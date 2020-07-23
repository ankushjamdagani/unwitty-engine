import Ball from "./Objects/Ball";
import Breaker from "./Objects/Breaker";

import CollisionHandler from "./Observers/CollisionHandler";

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

const canvas = document.querySelector("canvas");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const ctx = canvas.getContext("2d");

const ball = new Ball(
  {
    type: "circle",
    x: 100,
    y: 100,
    radius: 10,
    fillColor: "black",
    initialSpeed: {
      x: 5,
      y: -5,
    },
  },
  {
    ctx,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  }
);

const breaker = new Breaker(
  {
    type: "rect",
    x: CANVAS_WIDTH / 2 - 120,
    y: CANVAS_HEIGHT - 15,
    width: 120,
    height: 15,
    fillColor: "crimson",
    initialSpeed: 0,
    maxSpeed: 15,
  },
  {
    ctx,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  }
);

function animate() {
  requestAnimationFrame(animate);
  const collisionCoords = CollisionHandler.isCircleCollidingRect(
    ball,
    breaker,
    4
  );
  if (collisionCoords) {
    ball.dy = -ball.dy;
    console.log(collisionCoords);
  } else if (ball.y > breaker.y) {
    ball.stop();
    breaker.stop();
  }

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ball.update();
  breaker.update();
}

function bindEvents() {
  window.addEventListener("keydown", function (e) {
    if (e.which === 37) {
      breaker.goLeft();
    } else if (e.which === 39) {
      breaker.goRight();
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.which === 37 || e.which === 39) {
      breaker.stop();
    }
  });
}

window.GameAPI = { Objects: { ball, breaker } };

bindEvents();
animate();
