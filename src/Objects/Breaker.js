import Component from "../HOC/Component";

import { CreateImage } from "../helpers/Creator";

import rover from "../assets/images/Board3.svg";

class Breaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      dx: props.initialSpeed,
    };

    this.preload([{ key: "rover", src: rover }]);
  }

  isTouchingBorder() {
    const { x, y, width, height } = this.state;
    const { env } = this.props;

    return (
      x === 0 || y === 0 || x + width === env.width || y + height === env.height
    );
  }

  validatePosition() {
    const { x } = this.state;
    const { width, env } = this.props;

    if (env.boundary.x) {
      if (x <= 0) {
        this.setState({
          x: 0,
        });
      } else if (x + width >= env.width) {
        this.setState({
          x: env.width - width,
        });
      }
    } else {
      if (x <= 0) {
        this.setState({
          x: env.width - width,
        });
      } else if (x + width >= env.width) {
        this.setState({
          x: 0,
        });
      }
    }
  }

  move() {
    const { x, dx } = this.state;

    this.setState({
      x: x + dx,
    });

    this.validatePosition();
  }

  goLeft() {
    const { maxSpeed } = this.props;

    this.setState({
      dx: -maxSpeed,
    });
  }

  goRight() {
    const { maxSpeed } = this.props;

    this.setState({
      dx: maxSpeed,
    });
  }

  draw() {
    const { env, width, height } = this.props;
    const { x, y } = this.state;

    this.assets["rover"] &&
      CreateImage({
        ctx: env.ctx,
        image: this.assets["rover"],
        x,
        y,
        width,
        height,
      });
  }

  update() {
    this.move();
    this.draw();
  }

  stop() {
    const { initialSpeed } = this.props;

    this.setState({
      dx: initialSpeed,
    });
  }

  reset() {
    const { x, y } = this.props;

    this.setState({
      x,
      y,
    });
  }

  pause() {
    this.stop();
    this.prevState = this.state;
  }

  resume() {
    this.setState(this.prevState);
  }
}

export default Breaker;
