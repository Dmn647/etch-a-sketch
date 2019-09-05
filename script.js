const screen = document.querySelector("#screen");
let btn = document.querySelector("#size");
let numSquares = 16;

function createGrid() {
  for (let i=0; i < numSquares * numSquares; i++) {
    let box = document.createElement("div");
    box.classList.add("grid");
    box.addEventListener("mouseover", function(e) {
      e.target.style.background = "blue";
    });
  screen.appendChild(box);
  };
}
