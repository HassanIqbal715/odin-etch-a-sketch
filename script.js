const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#size-button");
const sizePopup = document.querySelector("#size-popup");
const sizePopupBtn = document.querySelector("#size-popup-button");
const sizePopupCloseBtn = document.querySelector("#size-popup-close");
const inputX = document.querySelector("#input-x");
const inputY = document.querySelector("#input-y");
const blurElement = document.querySelector("#blur");
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

function closePopup() {
    inputX.value = '';
    inputY.value = '';
    sizePopup.style.display = 'none';
    blurElement.style.display = 'none';
}

sizeBtn.addEventListener("click", () => {
    sizePopup.style.display = 'flex';
    blurElement.style.display = 'block';
});

sizePopupBtn.addEventListener("click", () => {
    if (checkInput(inputX.value) && checkInput(inputY.value)) {
        x = parseInt(inputX.value);
        y = parseInt(inputY.value);
        if (x > 0 && y > 0) {
            grid.innerHTML = '';
            createGrid(x, y);
        }
    }
    closePopup();
});

sizePopupCloseBtn.addEventListener("click", () => {
    closePopup();
});

createGrid(16, 16);