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

    this.initElements();
  }

  initElements() {
    const { ctx, width, height, boundary, audioHandler } = this.props;
    const ball = new Ball({
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
      env: {
        ctx,
        audioHandler,
        width,
        height,
        boundary,
      },
    });

    const breaker = new Breaker({
      type: "rect",
      x: width / 2 - 150,
      y: height - 44 - 100,
      width: 150,
      height: 40,
      initialSpeed: 0,
      maxSpeed: 15,
      env: {
        ctx,
        width,
        height,
        boundary,
      },
    });

    const ground = new Ground({
      x: 0,
      y: height - 100,
      width: width,
      height: 100,
      initialSpeed: 0,
      maxSpeed: 15,
      env: {
        ctx,
        width,
        height,
        boundary,
      },
    });

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
    const { gameInstance, width, height, ctx, audioHandler } = this.props;

    const level = gameInstance.getLevel();

    const bricks = [];

    const unitWidth = width / 34;
    const unitHeight = (unitWidth * 15) / 13;

    let y = 0;
    BRICK_MATRIX[level].forEach((row) => {
      let x = 0;
      row.forEach((colVal) => {
        if (colVal) {
          const brick = new Brick({
            size: colVal[0] - 1,
            strength: colVal[1] - 1,
            width: unitWidth * colVal[0],
            height: unitHeight,
            x,
            y,
            env: {
              ctx,
              audioHandler,
              width,
              height,
            },
          });
          bricks.push(brick);
        }
        x += unitWidth * ((colVal && colVal[0]) || 1) + 4;
      });
      y += unitHeight + 4;
    });

    this.setElements({
      bricks,
    });
  }

  update() {
    const { gameInstance, audioHandler } = this.props;
    const { ball, breaker, ground, bricks } = this.elements;

    const activeState = gameInstance.getState();

    if (activeState === GAME_STATES.PLAY) {
      const rectCollisionVector = CollisionHandler.isCircleCollidingRect(
        {
          x: ball.state.x,
          y: ball.state.y,
          radius: ball.props.radius,
        },
        {
          x: breaker.state.x,
          y: breaker.state.y,
          width: breaker.props.width,
          height: breaker.props.height,
        }
      );
      if (rectCollisionVector) {
        if (rectCollisionVector[0]) {
          ball.setState({
            dy: ball.state.dy > 0 ? -ball.state.dy : ball.state.dy,
          });
        } else if (rectCollisionVector[2]) {
          ball.setState({
            dy: ball.state.dy > 0 ? ball.state.dy : -ball.state.dy,
          });
        }
        if (rectCollisionVector[1]) {
          ball.setState({
            dx: ball.state.dx > 0 ? ball.state.dx : -ball.state.dx,
          });
        } else if (rectCollisionVector[3]) {
          ball.setState({
            dx: ball.state.dx > 0 ? -ball.state.dx : ball.state.dx,
          });
        }
        audioHandler.play("OnBreakerBounce");
      } else if (
        ball.state.y + ball.props.radius >
        breaker.state.y + breaker.props.height
      ) {
        this.stop();
        gameInstance.changeState(GAME_STATES.END);
        audioHandler.play("OnGameEnd");
      } else {
        for (let brIdx = 0; brIdx < bricks.length; brIdx++) {
          const brick = bricks[brIdx];
          if (brick.disabled) {
            continue;
          }
          const brickCollisionVector = CollisionHandler.isCircleCollidingRect(
            {
              x: ball.state.x,
              y: ball.state.y,
              radius: ball.props.radius,
            },
            {
              x: brick.props.x,
              y: brick.props.y,
              width: brick.props.width,
              height: brick.props.height,
            }
          );

          if (brickCollisionVector) {
            if (brickCollisionVector[0]) {
              ball.setState({
                dy: ball.state.dy > 0 ? -ball.state.dy : ball.state.dy,
              });
            } else if (brickCollisionVector[2]) {
              ball.setState({
                dy: ball.state.dy > 0 ? ball.state.dy : -ball.state.dy,
              });
            }
            if (brickCollisionVector[1]) {
              ball.setState({
                dx: ball.state.dx > 0 ? ball.state.dx : -ball.state.dx,
              });
            } else if (brickCollisionVector[3]) {
              ball.setState({
                dx: ball.state.dx > 0 ? -ball.state.dx : ball.state.dx,
              });
            }

            const currScore = gameInstance.getScore();
            gameInstance.changeScore(currScore + 1);

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

    this.setElements({
      bricks: [],
    });

    this.mountBricks();
    this.bindEvents();

    this.props.audioHandler.play("OnGameStart");
    this.props.audioHandler.play("OnGameBg", { loop: true, volume: 0.6 });
  }

  stop() {
    const { ball, breaker } = this.elements;

    ball.stop();
    breaker.stop();

    this.unBindEvents();

    this.props.audioHandler.stop("OnGameBg");
  }

  reset() {
    const { ball, breaker } = this.elements;

    ball.reset();
    breaker.reset();

    this.start();
  }
}

export default PlaygroundScene;
