const lines = [
  "> alias: rav3n_",
  "> role: Cybersecurity Analyst",
  "> status: always watching 👁️",
];

let i = 0;
let j = 0;
let currentLine = "";
let isDeleting = false;
const speed = 40;
const terminal = document.querySelector(".typed-text");

function type() {
  if (i < lines.length) {
    currentLine = lines[i];
    if (!isDeleting && j <= currentLine.length) {
      terminal.textContent = currentLine.slice(0, j++);
    } else if (isDeleting && j >= 0) {
      terminal.textContent = currentLine.slice(0, j--);
    }

    if (j === currentLine.length + 5 && !isDeleting) {
      isDeleting = true;
      setTimeout(type, 800);
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
      setTimeout(type, 200);
    } else {
      setTimeout(type, speed);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);
