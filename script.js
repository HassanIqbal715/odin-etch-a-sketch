const grid = document.querySelector("#grid");
const sizeButton = document.querySelector("#size-button");

let x = 0;
let y = 0;

// x is the number of boxes horizontally
// y is the number of boxes vertically
function createGrid(x, y) {
    var gridWidth = x * 32;
    grid.style.width = `${gridWidth}px`;

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            var box = document.createElement("div");
            box.classList.add("box");
            grid.appendChild(box);
        }
    }
}

sizeButton.addEventListener("click", () => {
    x = parseInt(prompt("X"));
    y = parseInt(prompt("Y"));
    grid.innerHTML = '';
    createGrid(x, y);
});

createGrid(16, 16);