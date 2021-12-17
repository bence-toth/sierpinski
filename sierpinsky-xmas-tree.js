const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

canvas.width = canvasSize;
canvas.height = canvasSize;

let iterationsLeft = 3000;

const drawDot = ({ x, y }) => {
  ctx.beginPath();
  ctx.arc(x, y, canvasSize * 0.002, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
};

ctx.fillStyle = "yellow";

const a1 = { x: canvasSize * 0.5, y: canvasSize * 0.1 };
const b1 = { x: canvasSize * 0.25, y: canvasSize * 0.35 };
const c1 = { x: canvasSize * 0.75, y: canvasSize * 0.35 };
drawDot(a1);
drawDot(b1);
drawDot(c1);

let p1 = {
  x: Math.random() * canvasSize,
  y: Math.random() * canvasSize,
};

const a2 = { x: canvasSize * 0.5, y: canvasSize * 0.225 };
const b2 = { x: canvasSize * 0.2, y: canvasSize * 0.6 };
const c2 = { x: canvasSize * 0.8, y: canvasSize * 0.6 };
drawDot(a2);
drawDot(b2);
drawDot(c2);

let p2 = {
  x: Math.random() * canvasSize,
  y: Math.random() * canvasSize,
};

const a3 = { x: canvasSize * 0.5, y: canvasSize * 0.425 };
const b3 = { x: canvasSize * 0.1, y: canvasSize * 0.9 };
const c3 = { x: canvasSize * 0.9, y: canvasSize * 0.9 };
drawDot(a3);
drawDot(b3);
drawDot(c3);

let p3 = {
  x: Math.random() * canvasSize,
  y: Math.random() * canvasSize,
};

ctx.fillStyle = "#00bbff";

drawDot(p1);
drawDot(p2);
drawDot(p3);

const drawNextDots = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    p1 = {
      x: (a1.x + p1.x) / 2,
      y: (a1.y + p1.y) / 2,
    };
    p2 = {
      x: (a2.x + p2.x) / 2,
      y: (a2.y + p2.y) / 2,
    };
    p3 = {
      x: (a3.x + p3.x) / 2,
      y: (a3.y + p3.y) / 2,
    };
  }
  if (random === 1) {
    p1 = {
      x: (b1.x + p1.x) / 2,
      y: (b1.y + p1.y) / 2,
    };
    p2 = {
      x: (b2.x + p2.x) / 2,
      y: (b2.y + p2.y) / 2,
    };
    p3 = {
      x: (b3.x + p3.x) / 2,
      y: (b3.y + p3.y) / 2,
    };
  }
  if (random === 2) {
    p1 = {
      x: (c1.x + p1.x) / 2,
      y: (c1.y + p1.y) / 2,
    };
    p2 = {
      x: (c2.x + p2.x) / 2,
      y: (c2.y + p2.y) / 2,
    };
    p3 = {
      x: (c3.x + p3.x) / 2,
      y: (c3.y + p3.y) / 2,
    };
  }

  ctx.fillStyle = "hsl(132, 100%, 30%)";
  drawDot(p1);
  ctx.fillStyle = "hsl(132, 100%, 25%)";
  drawDot(p2);
  ctx.fillStyle = "hsl(132, 100%, 20%)";
  drawDot(p3);

  if (iterationsLeft > 0) {
    setTimeout(() => {
      iterationsLeft--;
      requestAnimationFrame(drawNextDots);
    }, 1);
  }
};

drawNextDots();
