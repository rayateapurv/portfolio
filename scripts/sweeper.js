class Cell {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.isClicked = false;
    this.ran = random(10);
  }

  show() {
    if (this.isClicked) {
      //   fill(255);
      //   rect(this.x, this.y, this.w, this.w);
      if (this.ran > 7.5) {
        image(one, this.x, this.y, this.w, this.w);
      } else if (this.ran > 5.5 && this.ran < 7.5) {
        image(two, this.x, this.y, this.w, this.w);
      } else if (this.ran > 3.5 && this.ran < 5.5) {
        image(three, this.x, this.y, this.w, this.w);
      } else if (this.ran > 2 && this.ran < 3.5) {
        image(entmine, this.x, this.y, this.w, this.w);
      } else if (this.ran > 1.4 && this.ran < 2) {
        image(mine, this.x, this.y, this.w, this.w);
        //mineSound.play();
        //location.reload();
      } else {
        image(tom, this.x, this.y, this.w, this.w);
      }
    }
  }

  clickCheck() {
    if (
      click.x < this.x + this.w &&
      click.x > this.x &&
      click.y < this.y + this.w &&
      click.y > this.y
    ) {
      this.isClicked = true;
    }
  }
}

let grid;
let size = 40;
let cols, rows;
let click = { x: 360, y: 360 };
let tom, one, two, three, mine, entmine;
let mineSound;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function preload() {
  tom = loadImage("../assets/img/tomato2.jpg");
  one = loadImage("../assets/img/1.jpg");
  two = loadImage("../assets/img/2.jpg");
  three = loadImage("../assets/img/3.jpg");
  mine = loadImage("../assets/img/mine2.jpg");
  entmine = loadImage("../assets/img/entangle_mine2.jpg");

  mineSound = loadSound("../assets/sound/Mine.wav");
}

function setup() {
  createCanvas(window.innerWidth, document.body.scrollHeight - 100);
  document.querySelector(".p5Canvas").classList.add("maincan");
  let newDiv = document.createElement("div");
  newDiv.classList.add("canvas-div");
  newDiv.appendChild(document.querySelector(".p5Canvas"));
  document.getElementById("main").appendChild(newDiv);

  cols = floor(width / size);
  rows = floor(height / size);
  grid = make2DArray(cols, rows);

  imageMode(CENTER);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * size, j * size, size);
    }
  }
}

function draw() {
  //background(220);
  clear();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
      grid[i][j].clickCheck();
    }
  }
}

function mousePressed() {
  if (
    mouseX > 2 * size &&
    mouseX < width - 2 * size &&
    mouseY > 2 * size &&
    mouseY < height - 2 * size
  ) {
    click.x = mouseX;
    click.y = mouseY;
  }
}

window.addEventListener("resize", () => {
  let canvas = document.querySelector(".p5Canvas");
  location.reload();
});
