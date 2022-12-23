let roles = [
  "a creative technologist",
  "a game developer",
  "an interaction designer",
  "a data visualization designer",
  "a front-end developer",
  "a user experience designer",
];

let role = document.querySelector("#role");

let app = document.getElementById("role");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

let pause = 300;

typewriter
  .pauseFor(pause)
  .typeString(roles[0])
  .pauseFor(pause)
  .deleteChars(roles[0].length)
  .pauseFor(pause)
  .typeString(roles[1])
  .pauseFor(pause)
  .deleteChars(roles[1].length)
  .pauseFor(pause)
  .typeString(roles[2])
  .pauseFor(pause)
  .deleteChars(roles[2].length)
  .pauseFor(pause)
  .typeString(roles[3])
  .pauseFor(pause)
  .deleteChars(roles[3].length)
  .pauseFor(pause)
  .typeString(roles[4])
  .pauseFor(pause)
  .deleteChars(roles[4].length)
  .pauseFor(pause)
  .typeString(roles[5])
  .pauseFor(pause)
  .deleteChars(roles[5].length)
  .start();
