const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

canvas.width = canvasSize;
canvas.height = canvasSize;

const drawDot = ({ x, y }) => {
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, 2 * Math.PI);
  ctx.fill();
};

drawDot(100, 100);

const a = { x: canvasSize * 0.5, y: canvasSize * 0.1 };
const b = { x: canvasSize * 0.2, y: canvasSize * 0.9 };
const c = { x: canvasSize * 0.8, y: canvasSize * 0.9 };

ctx.fillStyle = "red";
drawDot(a);
drawDot(b);
drawDot(c);

let point = {
  x: Math.random() * canvasSize,
  y: Math.random() * canvasSize,
};

ctx.fillStyle = "blue";

drawDot(point);

const drawNextDot = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    point = {
      x: (a.x + point.x) / 2,
      y: (a.y + point.y) / 2,
    };
  }
  if (random === 1) {
    point = {
      x: (b.x + point.x) / 2,
      y: (b.y + point.y) / 2,
    };
  }
  if (random === 2) {
    point = {
      x: (c.x + point.x) / 2,
      y: (c.y + point.y) / 2,
    };
  }
  drawDot(point);
};

setInterval(drawNextDot, 10);
