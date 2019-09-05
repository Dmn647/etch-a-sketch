const screen = document.querySelector("#screen");
let btn = document.querySelector("#size");
let numSquares = 16;

function createGrid() {
  for (let i = 0; i < numSquares * numSquares; i++) {
    let box = document.createElement("div");
    box.classList.add("grid");
    box.addEventListener("mouseover", function(e) {
      e.target.style.background = "blue";
    });
    screen.appendChild(box);
  }
}

function resize() {
  screen.style.gridTemplate = `repeat(${numSquares}, 1fr) / repeat(${numSquares}, 1fr)`;
}

function clearGrid() {
  let squareToRemove = document.querySelectorAll(".screen div");
  squareToRemove.forEach(squareToRemove => {
    screen.removeChild(squareToRemove);
  });
}

// prompt user for number to resize grid
function newGrid() {
  let gridSize = prompt("How many squares per side?");
  if (isNaN(gridSize)) {
    alert("Please enter a number");
    newGrid();
  } else {
    numSquares = gridSize;
    remove();
    resize();
    createGrid();
  }
}

createGrid();
