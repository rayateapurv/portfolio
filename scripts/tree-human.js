let webNum = 35;
let webs = [];

function setup() {
  createCanvas(window.innerWidth, document.body.scrollHeight - 100);
  document.querySelector(".p5Canvas").classList.add("maincan");
  let newDiv = document.createElement("div");
  newDiv.classList.add("canvas-div");
  newDiv.appendChild(document.querySelector(".p5Canvas"));
  document.getElementById("main").appendChild(newDiv);
  //background(0);

  textAlign(CENTER, CENTER);
  frameRate(30);

  for (let i = 0; i < webNum; i++) {
    webs.push(new Web(random(width), random(height), random(20)));
  }
}

function draw() {
  for (let i = 0; i < webs.length; i++) {
    webs[i].show();
    webs[i].move();
  }

  if (frameCount > 800) {
    location.reload();
  }
}

class Thread {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(1);
    this.xspe = random(-0.6, 0.6);
    this.yspe = random(-0.6, 0.6);
    this.al = random(50, 200);
  }

  show() {
    noStroke();
    fill(255, this.al);
    circle(this.x, this.y, this.r);
  }

  bounds() {
    if (this.y < 0 || this.x < 0 || this.x >= 400 || this.y >= 400) {
      this.xspe = 0;
      this.yspe = 0;
    }
  }

  move() {
    if (frameCount % 20 == 0) {
      this.xspe += random(-0.2, 0.2);
      this.yspe += random(-0.2, 0.2);
    }
    this.x += this.xspe;
    this.y += this.yspe;
  }
}

class Web {
  constructor(x, y, num) {
    this.x = x;
    this.y = y;
    this.threads = [];
    for (let i = 0; i < num; i++) {
      this.threads.push(new Thread(this.x, this.y));
    }
  }

  show() {
    for (let thread of this.threads) {
      thread.show();
    }
  }

  move() {
    for (let thread of this.threads) {
      thread.move();
    }
  }
}

window.addEventListener("resize", () => {
  let canvas = document.querySelector(".p5Canvas");
  location.reload();
});
