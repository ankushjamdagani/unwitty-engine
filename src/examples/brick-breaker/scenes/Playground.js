import { GAME_STATES, KEY_CODES } from '../constants';

import Component from '../Engine/Component';
import CollisionHandler from '../Engine/CollisionHandler';

import withResistance from '../behaviours/withResistance';

import Ball from '../objects/Ball';
import Breaker from '../objects/Breaker';
import Brick from '../objects/Brick';

import BRICK_MATRIX from '../config/bricks.json';

class PlaygroundScene extends Component {
  constructor(props) {
    super(props);

    this.initElements();
  }

  initElements() {
    const { ctx, width, height, boundary, audioHandler } = this.props;
    const ball = new (withResistance(Ball))({
      type: 'circle',
      x: width / 2 - 120 - 12,
      y: height - 20 - 32,
      radius: 12,
      fillColor: '#3f8aff',
      initialSpeed: {
        x: 0,
        y: 0
      },
      maxSpeed: {
        x: 5,
        y: 5
      },
      env: {
        ctx,
        audioHandler,
        width,
        height,
        boundary
        // fluidFriction: .9
      }
    });

    const breaker = new (withResistance(Breaker))({
      type: 'rect',
      x: width / 2 - 120,
      y: height - 20,
      width: 120,
      height: 20,
      initialSpeed: {
        x: 0,
        y: 0
      },
      maxSpeed: {
        x: 15,
        y: -15
      },
      env: {
        ctx,
        width,
        height,
        boundary,
        gravity: 2
      }
    });

    this.setElements({
      ball,
      breaker,
      bricks: []
    });
  }

  bindEvents() {
    window.addEventListener('keydown', this.listenKeysDown);
    window.addEventListener('keyup', this.listenKeysUp);
  }

  unBindEvents() {
    window.removeEventListener('keydown', this.listenKeysDown);
    window.removeEventListener('keyup', this.listenKeysUp);
  }

  listenKeysDown(e) {
    const key = e.key.toLowerCase();
    if (key === KEY_CODES.LEFT) {
      this.elements.breaker.goLeft();
    } else if (key === KEY_CODES.RIGHT) {
      this.elements.breaker.goRight();
    } else if (key === KEY_CODES.SPACE) {
      this.elements.breaker.jump();
    }
  }

  listenKeysUp(e) {
    const key = e.key.toLowerCase();
    if (key === KEY_CODES.LEFT || key === KEY_CODES.RIGHT) {
      this.elements.breaker.stop();
    }
  }

  mountBricks() {
    const { gameInstance, width, height, ctx, audioHandler } = this.props;

    // [20, 30]; // must be dynamic. based on screen size, 15 : 13 brick size
    const gridDims = [17, 34];
    const level = gameInstance.getLevel();
    const bricksMatrix = BRICK_MATRIX[level];
    const leftOffset = Math.floor((gridDims[1] - bricksMatrix[0].length) / 2);
    const topOffset = Math.floor((gridDims[0] - bricksMatrix.length) / 2);

    const unitWidth = width / gridDims[1];
    // const unitHeight = (unitWidth * 15) / 13;
    const unitHeight = height / gridDims[0];

    const bricks = [];
    let y = topOffset * unitHeight;
    bricksMatrix.forEach((row) => {
      let x = leftOffset * unitWidth;
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
              height
            }
          });
          bricks.push(brick);
        }
        x += unitWidth * ((colVal && colVal[0]) || 1) + 4;
      });
      y += unitHeight + 4;
    });

    this.setElements({
      bricks
    });
  }

  update() {
    const { height, gameInstance, audioHandler } = this.props;
    const { ball, breaker, bricks } = this.elements;

    const activeState = gameInstance.getState();

    if (activeState === GAME_STATES.PLAY) {
      const rectCollisionVector = CollisionHandler.isCircleCollidingRect(
        {
          x: ball.state.x,
          y: ball.state.y,
          radius: ball.props.radius
        },
        {
          x: breaker.state.x,
          y: breaker.state.y,
          width: breaker.props.width,
          height: breaker.props.height
        }
      );
      if (rectCollisionVector) {
        if (rectCollisionVector[0] || rectCollisionVector[2]) {
          const isPositive = breaker.state.dy > 0;
          const newBallSpeed = isPositive
            ? breaker.state.dy + ball.state.dy
            : breaker.state.dy - ball.state.dy;
          ball.setState({
            y: rectCollisionVector[2]
              ? breaker.state.y + breaker.props.height + ball.props.radius
              : breaker.state.y - ball.props.radius,
            dy: newBallSpeed
          });
        }
        if (rectCollisionVector[1] || rectCollisionVector[3]) {
          const isPositive = breaker.state.dx > 0;
          const newBallSpeed = isPositive
            ? breaker.state.dx + ball.state.dx
            : breaker.state.dx - ball.state.dx;
          ball.setState({
            dx: newBallSpeed
          });
        }
        audioHandler.play('OnBreakerBounce');
      } else if (ball.state.y + ball.props.radius >= height) {
        // gameInstance.changeState(GAME_STATES.END);
      } else {
        for (let brIdx = 0; brIdx < bricks.length; brIdx += 1) {
          const brick = bricks[brIdx];
          if (brick.disabled) {
            // eslint-disable-next-line no-continue
            continue;
          }
          const brickCollisionVector = CollisionHandler.isCircleCollidingRect(
            {
              x: ball.state.x,
              y: ball.state.y,
              radius: ball.props.radius
            },
            {
              x: brick.props.x,
              y: brick.props.y,
              width: brick.props.width,
              height: brick.props.height
            }
          );

          if (brickCollisionVector) {
            if (brickCollisionVector[0]) {
              ball.setState({
                dy: ball.state.dy > 0 ? -ball.state.dy : ball.state.dy
              });
            } else if (brickCollisionVector[2]) {
              ball.setState({
                dy: ball.state.dy > 0 ? ball.state.dy : -ball.state.dy
              });
            }
            if (brickCollisionVector[1]) {
              ball.setState({
                dx: ball.state.dx > 0 ? ball.state.dx : -ball.state.dx
              });
            } else if (brickCollisionVector[3]) {
              ball.setState({
                dx: ball.state.dx > 0 ? -ball.state.dx : ball.state.dx
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

    bricks.forEach((br) => br.update());
    ball.update();
    breaker.update();
  }

  start() {
    const { ball, breaker } = this.elements;

    ball.start();
    breaker.start();

    this.mountBricks();
    this.bindEvents();

    this.props.audioHandler.play('OnGameStart');
    this.props.audioHandler.play('OnGameBg', { loop: true, volume: 0.6 });
  }

  stop() {
    const { ball, breaker } = this.elements;

    ball.stop();
    breaker.stop();

    this.unBindEvents();

    this.props.audioHandler.stop('OnGameStart');
    this.props.audioHandler.stop('OnGameBg');
    this.props.audioHandler.play('OnGameEnd');
  }

  pause() {
    const { ball, breaker } = this.elements;

    ball.pause();
    breaker.pause();

    this.unBindEvents();

    this.props.audioHandler.stop('OnGameStart');
    this.props.audioHandler.stop('OnGameBg');
  }

  resume() {
    const { ball, breaker } = this.elements;

    ball.resume();
    breaker.resume();

    this.bindEvents();

    this.props.audioHandler.play('OnGameBg', { loop: true, volume: 0.6 });
  }

  reset() {
    const { ball, breaker } = this.elements;

    ball.reset();
    breaker.reset();

    this.start();
  }
}

export default PlaygroundScene;
