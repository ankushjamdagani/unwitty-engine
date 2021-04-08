import Component from '../Engine/Component';

import { roundOff } from '../helpers/Math';

import { CreateImage } from '../Engine/Creator';
import Animator from '../Engine/Animator';

import ball1 from '../assets/images/BallRotate1.svg';
import ball2 from '../assets/images/BallRotate2.svg';
import ball3 from '../assets/images/BallRotate3.svg';
import ball4 from '../assets/images/BallRotate4.svg';
import ball5 from '../assets/images/BallRotate5.svg';

class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      dx: props.initialSpeed.x,
      dy: props.initialSpeed.y
    };

    this.preload([
      { key: 1, src: ball1 },
      { key: 2, src: ball2 },
      { key: 3, src: ball3 },
      { key: 4, src: ball4 },
      { key: 5, src: ball5 }
    ]);

    this.imageAnimator = new Animator({
      startVal: 1,
      minVal: 1,
      maxVal: 5,
      step: 1,
      ticksInterval: 6,
      direction: 'normal'
    });
  }

  isTouchingBorder() {
    const { x, y, radius } = this.state;
    const { env } = this.props;

    return (
      x - radius === 0 ||
      x + radius === env.width ||
      y - radius === 0 ||
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
          dx: -dx
        });
        env.audioHandler.play('OnWallBounce', { volume: 0.6 });
      } else if (x + radius >= env.width) {
        this.setState({
          x: env.width - radius,
          dx: -dx
        });
        env.audioHandler.play('OnWallBounce', { volume: 0.6 });
      }
    } else if (x - radius <= 0) {
      this.setState({
        x: env.width - radius
      });
    } else if (x + radius >= env.width) {
      this.setState({
        x: radius
      });
    }

    if (env.boundary.y) {
      if (y - radius <= 0) {
        this.setState({
          y: radius,
          dy: -dy
        });
        env.audioHandler.play('OnWallBounce', { volume: 0.6 });
      } else if (y + radius >= env.height) {
        this.setState({
          y: env.height - radius,
          dy: -dy
        });
        env.audioHandler.play('OnWallBounce', { volume: 0.6 });
      }
    } else if (y - radius <= 0) {
      this.setState({
        y: env.height - radius
      });
    } else if (y + radius >= env.height) {
      this.setState({
        y: radius
      });
    }
  }

  move() {
    const { x, y, dx, dy } = this.state;

    this.setState({
      x: roundOff(x + dx),
      y: roundOff(y + dy)
    });

    this.validatePosition();
  }

  start() {
    const { maxSpeed } = this.props;
    this.setState({
      dx: maxSpeed.x,
      dy: maxSpeed.y
    });
  }

  stop() {
    const { initialSpeed } = this.props;
    this.setState({
      dx: initialSpeed.x,
      dy: initialSpeed.y
    });
  }

  reset() {
    const { x, y } = this.props;
    this.setState({
      x,
      y
    });
  }

  pause() {
    this.prevState = this.state;

    this.setState({
      dx: 0,
      dy: 0
    });
  }

  resume() {
    this.setState(this.prevState);
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
        height: radius * 2
      });
  }

  update() {
    this.move();
    this.draw();
  }
}

export default Ball;
