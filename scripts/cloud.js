let particle;

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
  clear();
  let t = frameCount / 60;

  //   for (let i = 0; i < random(1); i++) {
  //     snowflakes.push(new Snow());
  //   }
  if (frameCount % 20 == 0) {
    snowflakes.push(new Snow());
  }

  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }
}

class Snow {
  constructor() {
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(20, 25);
    this.rand = int(random(0, 3));
    this.alpha = random(255);

    this.radius = sqrt(random(pow(width / 2, 2)));
  }

  update(time) {
    let w = 0.2;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.2);

    if (random() > 0.5) {
      this.size += 1;
    } else {
      this.size -= 1;
    }

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  display() {
    fill(160, 219, 242, this.alpha);
    imageMode(CENTER);
    image(particle, this.posX, this.posY, this.size, this.size);
  }
}

window.addEventListener("resize", () => {
  let canvas = document.querySelector(".p5Canvas");
  location.reload();
});
