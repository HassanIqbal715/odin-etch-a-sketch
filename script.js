const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#size-button");
const sizePopup = document.querySelector("#size-popup");
const sizePopupBtn = document.querySelector("#size-popup-button");
const sizePopupCloseBtn = document.querySelector("#size-popup-close");
const inputSize = document.querySelector("#input-size");
const blurElement = document.querySelector("#blur");
let size = 16;
let gridSize = 800;

// x is the number of boxes horizontally
// y is the number of boxes vertically
function createGrid() {
    var boxSize = gridSize/size;
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            var box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute("style", `
                width: ${boxSize}px; height: ${boxSize}px
            `);
            grid.appendChild(box);
        }
    }
}

function checkInput(value) {
    return Number.isInteger(Number(value));
}

function closePopup() {
    inputSize.value = '';
    sizePopup.style.display = 'none';
    blurElement.style.display = 'none';
}

sizeBtn.addEventListener("click", () => {
    sizePopup.style.display = 'flex';
    blurElement.style.display = 'block';
});

sizePopupBtn.addEventListener("click", () => {
    if (checkInput(inputSize.value)) {
        size = parseInt(inputSize.value);
        if (size > 0) {
            grid.innerHTML = '';
            createGrid();
        }
    }
    closePopup();
});

sizePopupCloseBtn.addEventListener("click", () => {
    closePopup();
});

createGrid();