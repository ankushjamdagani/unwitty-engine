import Component from "../HOC/Component";

import { CreateImage } from "../helpers/Creator";
import Animator from "../helpers/Animator";

import ball1 from "../assets/images/BallRotate1.svg";
import ball2 from "../assets/images/BallRotate2.svg";
import ball3 from "../assets/images/BallRotate3.svg";
import ball4 from "../assets/images/BallRotate4.svg";
import ball5 from "../assets/images/BallRotate5.svg";

class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      dx: props.initialSpeed.x,
      dy: props.initialSpeed.y,
    };

    this.preload([
      { key: 1, image: ball1 },
      { key: 2, image: ball2 },
      { key: 3, image: ball3 },
      { key: 4, image: ball4 },
      { key: 5, image: ball5 },
    ]);

    this.imageAnimator = new Animator({
      startVal: 1,
      minVal: 1,
      maxVal: 5,
      step: 1,
      ticksInterval: 10,
      direction: "normal",
    });
  }

  isTouchingBorder() {
    const { x, y, radius } = this.state;
    const { env } = this.props;

    return (
      x - radius == 0 ||
      x + radius === env.width ||
      y - radius == 0 ||
      y + radius === env.height
    );
  }

  validatePosition() {
    const { x, y, dx, dy } = this.state;
    const { env, radius } = this.props;

    if (env.boundary.x) {
      if (x - radius <= 0) {
        this.setState({
          x: radius,
          dx: -dx,
        });
      } else if (x + radius >= env.width) {
        this.setState({
          x: env.width - radius,
          dx: -dx,
        });
      }
    } else {
      if (x - radius <= 0) {
        this.setState({
          x: env.width - radius,
        });
      } else if (x + radius >= env.width) {
        this.setState({
          x: radius,
        });
      }
    }

    if (env.boundary.y) {
      if (y - radius <= 0) {
        this.setState({
          y: radius,
          dy: -dy,
        });
      } else if (y + radius >= env.height) {
        this.setState({
          y: env.height - radius,
          dy: -dy,
        });
      }
    } else {
      if (y - radius <= 0) {
        this.setState({
          y: env.height - radius,
        });
      } else if (y + radius >= env.height) {
        this.setState({
          y: radius,
        });
      }
    }
  }

  move() {
    const { x, y, dx, dy } = this.state;

    this.setState({
      x: x + dx,
      y: y + dy,
    });

    this.validatePosition();
  }

  start() {
    const { maxSpeed } = this.props;
    this.setState({
      dx: maxSpeed.x,
      dy: maxSpeed.y,
    });
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
      x: x,
      y: y,
    });
  }

  draw() {
    const { radius, env } = this.props;
    const { x, y } = this.state;

    const imageIndex = this.imageAnimator.update();

    this.assets[imageIndex] &&
      CreateImage({
        ctx: env.ctx,
        image: this.assets[imageIndex],
        x: x - radius,
        y: y - radius,
        width: radius * 2,
        height: radius * 2,
      });
  }

  update() {
    this.move();
    this.draw();
  }
}

export default Ball;
