import Component from "../Engine/Component";

import { roundOff } from "../helpers/Math";

import { CreateRect } from "../Engine/Creator";

import rover from "../assets/images/Board3.svg";

class Breaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      dx: props.initialSpeed.x,
      dy: props.initialSpeed.y,
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
    const { x, y, dy } = this.state;
    const { width, height, env } = this.props;

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

    if (env.boundary.y) {
      if (y <= 0) {
        this.setState({
          y: 0,
          dy: -dy,
        });
      } else if (y + height >= env.height) {
        this.setState({
          y: env.height - height,
          dy: -dy,
        });
      }
    } else {
      if (y <= 0) {
        this.setState({
          y: env.height - height,
        });
      } else if (y + height >= env.height) {
        this.setState({
          y: 0,
        });
      }
    }
  }

  move() {
    const { x, y, dx, dy } = this.state;

    this.setState({
      x: roundOff(x + dx),
      y: roundOff(y + dy),
    });

    this.validatePosition();
  }

  goLeft() {
    const { maxSpeed } = this.props;

    this.setState({
      dx: -maxSpeed.x,
    });
  }

  goRight() {
    const { maxSpeed } = this.props;

    this.setState({
      dx: maxSpeed.x,
    });
  }

  jump() {
    const { maxSpeed } = this.props;

    this.setState({
      dy: maxSpeed.y,
    });
  }

  draw() {
    const { env, width, height } = this.props;
    const { x, y } = this.state;

    CreateRect({
      ctx: env.ctx,
      x,
      y,
      width,
      height: height - 4,
      fillColor: "#000",
    });
  }

  update() {
    this.move();
    this.draw();
  }

  stop() {
    const { initialSpeed } = this.props;

    this.setState({
      dx: initialSpeed.x,
      dy: initialSpeed.y,
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
