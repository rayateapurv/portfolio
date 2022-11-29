let r1, r2, r3; // structural radii
let s1, s2, s3;
let angle1 = 0,
  angle2 = 120,
  angle3 = 240; // layer 1 angles
let xco, yco; //center co-ordinates

function setup() {
  createCanvas(window.innerWidth, document.body.scrollHeight - 40);
  document.querySelector(".p5Canvas").classList.add("maincan");
  let newDiv = document.createElement("div");
  newDiv.classList.add("canvas-div");
  newDiv.appendChild(document.querySelector(".p5Canvas"));
  document.getElementById("main").appendChild(newDiv);

  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  r1 = random(50, 400);
  r2 = random(50, 400);
  r3 = random(50, 400);
  s1 = random(-1.5, 1.5);
  s2 = random(-1.5, 1.5);
  s3 = random(-1.5, 1.5);
}

function draw() {
  //background(54, 76, 89);
  clear();
  xco = mouseX;
  yco = mouseY;

  // circular motion x, y calculations for Thursday
  let x1 = xco + r1 * sin(angle1); // layer 1
  let y1 = yco + r2 * cos(angle1);

  // circular motion x, y calculations for Friday
  let x2 = xco + r2 * sin(angle2); // layer 1
  let y2 = yco + r3 * cos(angle2);

  // circular motion x, y calculations for Saturday
  let x3 = xco + r3 * sin(angle3); // layer 1
  let y3 = yco + r1 * cos(angle3);

  // base structure
  noFill();
  strokeWeight(5);
  stroke(255);

  // green main ellipses
  noStroke();
  fill("#870e53");
  ellipse(x1, y1, r1 / 8);
  ellipse(x2, y2, r2 / 6);
  fill("#2f92a8");
  ellipse(x3, y3, r3 / 6);

  // green circles motion
  angle1 += s1;
  angle2 += s2;
  angle3 += s3;
}

window.addEventListener("resize", () => {
  let canvas = document.querySelector(".p5Canvas");
  location.reload();
});
