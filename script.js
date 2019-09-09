const screen = document.querySelector("#screen");
let size = document.querySelector("#size");
let clear = document.querySelector("#clear");
let numSquares = 16;

clear.addEventListener("click", clearGrid);
size.addEventListener("click", newGrid);

function createGrid(numSquares) {
  for (let i = 0; i < numSquares * numSquares; i++) {
    let box = document.createElement("div");
    box.classList.add("grid");
    box.style.height = 1000 / numSquares + "px";
    box.style.width = 1000 / numSquares + "px";
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

createGrid(numSquares);
