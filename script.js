// Declaring Important constants
const container = document.querySelector('#container');
const colorPicker = document.querySelector('#colorPicker');
const defaultMode = 'colorMode';
const defaultSize = 16;
const body = document.querySelector('body');

createGrid(defaultSize);
draw();

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
    container.addEventListener('click', (currentMouseover) => {
        if (currentMouseover.target.classList.contains('cell')) {
            currentMouseover.target.setAttribute(
                'style',
                `background-color: ${colorInterface.value};`
            );
        }
    });

    container.addEventListener('mouseover', (currentMouseover) => {
        if (
            currentMouseover.target.classList.contains('cell') &&
            currentMouseover.buttons === 1
        ) {
            currentMouseover.target.setAttribute(
                'style',
                `background-color: ${colorInterface.value};`
            );
        }
    });
}

function colorMode() {}

function eraser() {}

function clearCanvas() {
    cells.forEach((cell) => {
        cell.setAttribute('style', `background-color: white`);
    });
}

function changeSize() {}
