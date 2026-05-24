let gridContainer = document.getElementById("container");
let gridSize = 1;
let resizeBtn = document.getElementById("resize");

function getGridSize() {
  do {
    gridSize = Number(
      prompt("How many Squares would you like in your grid? (1-100)"),
    );
  } while (!Number.isInteger(gridSize) || gridSize <= 0 || gridSize > 100);
  return gridSize;
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

function enableColoring() {
  gridContainer.addEventListener("mouseout", (event) => {
    const box = event.target;

    if (!box.classList.contains("gridElement")) {
      return;
    }

    box.classList.add("filled");
  });
}

function main() {
  const gridSize = 16;
  createGrid(gridSize);
  enableColoring();
  resizeBtn.addEventListener("click", () => {
    let newGridSize = getGridSize();
    createGrid(newGridSize);
  });
}

main();
