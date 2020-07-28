function CreateRect({
  ctx,
  x,
  y,
  width,
  height,
  fillColor,
  strokeColor,
  strokeSize = 0,
}) {
  ctx.beginPath();
  if (fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, width, height);
  }
  if (strokeColor || strokeSize) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSize || 1;
    ctx.strokeRect(x, y, width, height);
  }

  ctx.closePath();
}

function CreateText({ ctx, x, y, text, fontColor, font }) {
  ctx.fillStyle = fontColor;
  ctx.font = font;
  ctx.fillText(text, x, y);
}

export { CreateRect, CreateText };
