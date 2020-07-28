import { GAME_STATES } from "../constants";

import Component from "../HOC/Component";

import Ball from "../objects/Ball";
import Breaker from "../objects/Breaker";
import Brick from "../objects/Brick";
import Ground from "../objects/Ground";

import CollisionHandler from "../helpers/CollisionHandler";

const BRICK_MATRIX = {
  1: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [1, 3],
      [2, 2],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      0,
      0,
      0,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [1, 2],
      [1, 2],
      [1, 2],
      [2, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      0,
      0,
      0,
      [1, 2],
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [1, 2],
      [1, 2],
      [1, 2],
      [3, 1],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      0,
      0,
      0,
      [1, 2],
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [3, 1],
      [1, 2],
      [1, 2],
      0,
      0,
      0,
      [1, 2],
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 1],
      [1, 1],
      [1, 1],
      0,
      0,
      0,
      [1, 1],
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      0,
      0,
      0,
      [1, 3],
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      [1, 3],
      0,
      0,
      0,
      [1, 3],
    ],
  ],
};

class PlaygroundScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      level: 1,
    };

    this.initElements();
  }

  initElements() {
    const { ctx, width, height, boundary } = this.props;
    const ball = new Ball(
      {
        type: "circle",
        x: 120,
        y: 100,
        radius: 12,
        fillColor: "#3f8aff",
        initialSpeed: {
          x: 0,
          y: 0,
        },
        maxSpeed: {
          x: 5,
          y: 5,
        },
      },
      {
        ctx,
        width,
        height,
        boundary,
      }
    );

    const breaker = new Breaker(
      {
        type: "rect",
        x: width / 2 - 150,
        y: height - 44 - 100,
        width: 150,
        height: 40,
        initialSpeed: 0,
        maxSpeed: 15,
      },
      {
        ctx,
        width,
        height,
        boundary,
      }
    );

    const ground = new Ground(
      {
        x: 0,
        y: height - 100,
        width: width,
        height: 100,
        initialSpeed: 0,
        maxSpeed: 15,
      },
      {
        ctx,
        width,
        height,
        boundary,
      }
    );

    this.setElements({
      ball,
      breaker,
      ground,
      bricks: [],
    });
  }

  bindEvents() {
    window.addEventListener("keydown", this.listenArrowKeysDown);
    window.addEventListener("keyup", this.listenArrowKeysUp);
  }

  unBindEvents() {
    window.removeEventListener("keydown", this.listenArrowKeysDown);
    window.removeEventListener("keyup", this.listenArrowKeysUp);
  }

  listenArrowKeysDown = (e) => {
    if (e.which === 37) {
      this.elements.breaker.goLeft();
    } else if (e.which === 39) {
      this.elements.breaker.goRight();
    }
  };

  listenArrowKeysUp = (e) => {
    if (e.which === 37 || e.which === 39) {
      this.elements.breaker.stop();
    }
  };

  mountBricks() {
    const { width, height, ctx } = this.props;
    const { level } = this.state;

    const unitWidth = width / 34;
    const unitHeight = (unitWidth * 15) / 13;

    let y = 0;
    BRICK_MATRIX[level].forEach((row) => {
      let x = 0;
      row.forEach((colVal) => {
        if (colVal) {
          const brick = new Brick(
            {
              size: colVal[0] - 1,
              strength: colVal[1] - 1,
              width: unitWidth * colVal[0],
              height: unitHeight,
              x,
              y,
            },
            {
              ctx,
              width,
              height,
            }
          );
          this.elements.bricks.push(brick);
        }
        x += unitWidth * ((colVal && colVal[0]) || 1) + 4;
      });
      y += unitHeight + 4;
    });
  }

  update() {
    const { envApi } = this.props;
    const { playing } = this.state;
    const { ball, breaker, ground, bricks } = this.elements;

    if (playing) {
      const rectCollisionVector = CollisionHandler.isCircleCollidingRect(
        ball,
        breaker
      );
      if (rectCollisionVector) {
        if (rectCollisionVector[0]) {
          ball.dy = ball.dy > 0 ? -ball.dy : ball.dy;
        } else if (rectCollisionVector[2]) {
          ball.dy = ball.dy > 0 ? ball.dy : -ball.dy;
        }
        if (rectCollisionVector[1]) {
          ball.dx = ball.dx > 0 ? ball.dx : -ball.dx;
        } else if (rectCollisionVector[3]) {
          ball.dx = ball.dx > 0 ? ball.dx : -ball.dx;
        }
      } else if (ball.y + ball.radius > breaker.y + breaker.height) {
        this.stop();
        envApi.changeState(GAME_STATES.END);
      } else {
        for (let brIdx = 0; brIdx < bricks.length; brIdx++) {
          const brick = bricks[brIdx];
          if (brick.disabled) {
            continue;
          }
          const brickCollisionVector = CollisionHandler.isCircleCollidingRect(
            ball,
            brick
          );

          if (brickCollisionVector) {
            if (brickCollisionVector[0]) {
              ball.dy = ball.dy > 0 ? -ball.dy : ball.dy;
            } else if (brickCollisionVector[2]) {
              ball.dy = ball.dy > 0 ? ball.dy : -ball.dy;
            }
            if (brickCollisionVector[1]) {
              ball.dx = ball.dx > 0 ? ball.dx : -ball.dx;
            } else if (brickCollisionVector[3]) {
              ball.dx = ball.dx > 0 ? -ball.dx : ball.dx;
            }

            const currScore = envApi.getScore();
            envApi.changeScore(currScore + 1);

            brick.onCollision();
            break;
          }
        }
      }
    }

    ground.update();
    bricks.forEach((br) => br.update());
    ball.update();
    breaker.update();
  }

  start() {
    const { ball, breaker } = this.elements;

    ball.start();
    breaker.start();

    this.setState({
      playing: true,
    });
    this.setElements({
      bricks: [],
    });

    this.mountBricks();
    this.bindEvents();
  }

  stop() {
    const { ball, breaker } = this.elements;

    ball.stop();
    breaker.stop();

    this.setState({
      playing: false,
    });

    this.unBindEvents();
  }

  reset() {
    const { ball, breaker } = this.elements;

    ball.reset();
    breaker.reset();

    this.setState({
      playing: true,
    });

    this.start();
  }
}

export default PlaygroundScene;
