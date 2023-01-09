let particle;
let resetter = 0;

// an array to add multiple particles
let particles = [];

function preload() {
  particle = loadImage("../assets/img/fade.png");
}

let snowflakes = [];

function setup() {
  createCanvas(window.innerWidth, document.body.scrollHeight - 100);
  document.querySelector(".p5Canvas").classList.add("maincan");
  let newDiv = document.createElement("div");
  newDiv.classList.add("canvas-div");
  newDiv.appendChild(document.querySelector(".p5Canvas"));
  document.getElementById("main").appendChild(newDiv);
  fill(240);
  noStroke();
}

function draw() {
  //background(0);
  //clear();
  let t = frameCount / 60;

  //   for (let i = 0; i < random(1); i++) {
  //     snowflakes.push(new Snow());
  //   }
  if (frameCount % 60 == 0) {
    snowflakes.push(new Snow());
    resetter++;
  }

  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }

  if (resetter > 60) {
    clear();
    resetter = 0;
    snowflakes = [];
  }
}

class Snow {
  constructor() {
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(10, 16);
    this.rand = ceil(random(0, 2));
    this.alpha = random(100);

    this.radius = sqrt(random(pow(width / 2, 2)));
  }

  update(time) {
    let w = 0.05;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.2);

    if (random() > 0.3) {
      this.size += 0.2;
    } else {
      this.size -= 0.5;
    }

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  display() {
    if (this.rand == 1) {
      fill(160, 100, 242, this.alpha);
    } else {
      fill(255, 0, 255, this.alpha);
    }
    //fill(160, 219, 242, this.alpha);
    circle(this.posX, this.posY, this.size);
  }
}

window.addEventListener("resize", () => {
  let canvas = document.querySelector(".p5Canvas");
  location.reload();
});
