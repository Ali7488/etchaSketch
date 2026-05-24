let gridContainer = document.getElementById("container");
let gridSize = 1;

function getGridSize() {
  do {
    gridSize = Number(
      prompt("How many Squares would you like in your grid? (1-100)"),
    );
  } while (!Number.isInteger(gridSize) || gridSize <= 0 || gridSize > 100);
}

function createGrid(gridSize) {
  const totalGridSquares = gridSize * gridSize;

  for (let i = 0; i < totalGridSquares; i++) {
    let gridElement = document.createElement("div");
    gridElement.className = "gridElement";
    gridElement.style.flex = `0 0 calc(100%/${gridSize})`;
    gridElement.style.height = `0 0 calc(100%/${gridSize})`;
    gridContainer.appendChild(gridElement);
  }
}


