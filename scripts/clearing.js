let flo1, flo2, flo3;
let app;
let ran;
let posarray = [];

function preload() {
  flo1 = loadImage("../assets/img/flower1.png");
  flo2 = loadImage("../assets/img/flower2.png");
  flo3 = loadImage("../assets/img/flower3.png");
  app = loadImage("../assets/img/apple1.png");
}

function setup() {
  createCanvas(window.innerWidth, document.body.scrollHeight - 100);
  document.querySelector(".p5Canvas").classList.add("maincan");
  let newDiv = document.createElement("div");
  newDiv.classList.add("canvas-div");
  newDiv.appendChild(document.querySelector(".p5Canvas"));
  document.getElementById("main").appendChild(newDiv);
  ran = int(random(1, 5));
}

function draw() {
  clear();
  //console.log(ran);
  if (ran == 1) {
    image(flo1, mouseX - 10, mouseY - 10, 20, 20);
  } else if (ran == 2) {
    image(flo2, mouseX - 10, mouseY - 10, 20, 20);
  } else if (ran == 3) {
    image(flo3, mouseX - 10, mouseY - 10, 20, 20);
  } else if (ran == 4) {
    image(app, mouseX - 10, mouseY - 10, 20, 20);
  }

  posarray.forEach((flo) => {
    if (flo.ran == 1) {
      image(flo1, flo.x, flo.y, 20, 20);
    } else if (flo.ran == 2) {
      image(flo2, flo.x, flo.y, 20, 20);
    } else if (flo.ran == 3) {
      image(flo3, flo.x, flo.y, 20, 20);
    } else if (flo.ran == 4) {
      image(app, flo.x, flo.y, 20, 20);
    }
  });
}

function mousePressed() {
  posarray.push({ x: mouseX - 10, y: mouseY - 10, ran: ran });
  ran = int(random(1, 5));
}

window.addEventListener("resize", () => {
  let canvas = document.querySelector(".p5Canvas");
  location.reload();
});
