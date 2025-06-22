const grid = document.querySelector("#grid");

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

createGrid(16, 16);