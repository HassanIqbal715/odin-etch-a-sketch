const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#size-button");
const sizePopup = document.querySelector("#size-popup");
const sizePopupBtn = document.querySelector("#size-popup-button");
const sizePopupCloseBtn = document.querySelector("#size-popup-close");
const inputX = document.querySelector("#input-x");
const inputY = document.querySelector("#input-y");
let x = 16;
let y = 16;

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

function checkInput(value) {
    return Number.isInteger(Number(value));
}

sizeBtn.addEventListener("click", () => {
    sizePopup.style.display = 'flex';
});

sizePopupBtn.addEventListener("click", () => {
    if (checkInput(inputX.value) && checkInput(inputY.value)) {
        x = parseInt(inputX.value);
        y = parseInt(inputY.value);
        grid.innerHTML = '';
        createGrid(x, y);
    }
    sizePopup.style.display = 'none';
});

sizePopupCloseBtn.addEventListener("click", () => {
    sizePopup.style.display = 'none';
});

createGrid(16, 16);