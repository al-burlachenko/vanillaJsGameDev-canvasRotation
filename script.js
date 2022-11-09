/**@type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticles = 200;
let particlesArray = [];
const pumpkin = new Image();
pumpkin.src = "pumpkins.png";

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 100 + 50;
    this.speed = Math.random() * 5 + 1;
    this.angle = Math.random() * 360;
    this.spin = Math.random() < 0.5 ? -1 : 1;

    this.pumpkinWidth = 300;
    this.pumpkinHeight = 300;
    this.pumpkinFrame = Math.floor(Math.random() * 3);
  }
  draw() {
    // ctx.fillRect(this.x, this.y, this.size, this.size);
    // ctx.drawImage(pumpkin, this.x, this.y, this.size, this.size);
    ctx.drawImage(
      pumpkin,
      this.pumpkinWidth * this.pumpkinFrame,
      this.pumpkinHeight * this.pumpkinFrame,
      this.pumpkinWidth,
      this.pumpkinHeight,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
  update() {
    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
      this.size = Math.random() * 100 + 50;
      this.speed = Math.random() * 5 + 1;
      this.pumpkinFrame = Math.floor(Math.random() * 3);
    }
    this.y += this.speed;
  }
}

const particle1 = new Particle();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particle1.update();
  particle1.draw();
  requestAnimationFrame(animate);
}
animate();
