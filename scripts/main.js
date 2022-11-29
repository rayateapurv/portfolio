let roles = [
  "a creative technologist",
  "a game developer",
  "an interaction designer",
  "a data visualization designer",
  "a front-end developer",
  "a user experience designer",
];

let role = document.querySelector("#role");
let roleIndex = 1;

setInterval(() => {
  if (roleIndex >= roles.length) roleIndex = 0;
  role.innerHTML = roles[roleIndex];
  roleIndex++;
}, 2000);
