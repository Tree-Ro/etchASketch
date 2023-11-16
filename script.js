// Declaring Important constants
const container = document.querySelector('#container');
const colorPicker = document.querySelector('#colorPicker');
const defaultMode = 'colorMode';
const defaultSize = 16;
const body = document.querySelector('body');

createGrid(defaultSize);

const cells = document.querySelectorAll('.cell');

let mousedown = 0;
body.addEventListener('mousedown', () => {
    mousedown = 1;
});
body.addEventListener('mouseup', () => {
    mousedown = 0;
});

function createRows(amount) {
    for (i = 0; i < amount; ++i) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
    }
}

function createCells() {
    const rows = document.querySelectorAll('#container .row');
    rows.forEach((row) => {
        for (i = 0; i < rows.length; ++i) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }
    });
}

function createGrid(amount) {
    createRows(amount);
    createCells();
}

function draw() {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if (mousedown === 1) {
                cell.setAttribute(
                    'style',
                    `background-color: ${colorInterface.value}`
                );
            }
        });
    });
}
draw();

function colorMode() {}

function eraser() {}

function clearCanvas() {}

function changeSize() {}
