import Ball from "./Ball";

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

const INITIAL_SPEED = 5;
const GRAVITY = 9.8;
const FLUID_FRICTION = 0.001;
const SURFACE_FRICTION = 0.01;

const canvas = document.querySelector("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const ctx = canvas.getContext("2d");

const ball = new Ball(
  {
    x: Math.random() * CANVAS_WIDTH,
    y: 0,
    radius: 20,
    fillColor: "crimson",
    initialSpeed: INITIAL_SPEED,
  },
  {
    ctx,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    gravity: GRAVITY,
    fluidFriction: FLUID_FRICTION,
    surfaceFriction: SURFACE_FRICTION,
  }
);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ball.update();
}

animate();
