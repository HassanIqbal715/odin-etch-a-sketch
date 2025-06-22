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
            const box = document.createElement("div");
            box.setAttribute("style", `
                width: ${boxSize}px; height: ${boxSize}px;
            `);
            let r = 0;
            let g = 0;
            let b = 0;
            let a = 0;
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
            });
            
            box.addEventListener("mouseleave", () => {
                box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
            });

            box.addEventListener("click", () => {
                r = Math.floor(Math.random() * 255);
                g = Math.floor(Math.random() * 255);
                b = Math.floor(Math.random() * 255);
                if (a < 1.0) {
                    a += 0.1;
                }
                box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
            });
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
        if (size > 100) {
            alert("Size too large!");
            return;
        }
        else if (size <= 0) {
            alert("Enter a positive value!");
            return;
        }
        else {
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