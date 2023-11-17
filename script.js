// Declaring Important constants
const container = document.querySelector('#container');
const colorPicker = document.querySelector('#colorPicker');
const defaultSize = 16;
const body = document.querySelector('body');
let currentColor = colorInterface.value;
let storedColor = colorInterface.value;
let random = false;

createGrid(defaultSize);
draw();
storeColorListener();

const cells = document.querySelectorAll('.cell');

initialiseOptions();
initialiseInput();

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
    container.addEventListener('mousedown', (currentMouseover) => {
        if (currentMouseover.target.classList.contains('cell')) {
            if (random === true) {
                colorInterface.value = getRandomColor();
            }
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
            if (random === true) {
                colorInterface.value = getRandomColor();
            }
            currentMouseover.target.setAttribute(
                'style',
                `background-color: ${colorInterface.value};`
            );
        }
    });
}

function initialiseOptions() {
    colorButton.addEventListener('click', () => {
        colorMode();
    });
    eraserButton.addEventListener('click', () => {
        eraserMode();
    });
    randomButton.addEventListener('click', () => {
        randomMode();
    });
    clearButton.addEventListener('click', () => {
        clearCanvas();
    });
}

//Only triggers when user changes color
function storeColorListener() {
    colorInterface.addEventListener('change', () => {
        storedColor = colorInterface.value;
        colorMode(); // If user changes value activate colorMode
    });
}

function colorMode() {
    colorInterface.value = storedColor;
    removeButtonHighlight();
    colorButton.setAttribute(
        'style',
        'border: 3px solid rgba(0, 0, 0, 0.755); scale: 1.1;'
    );
    random = false;
}

function eraserMode() {
    colorInterface.value = '#ffffff';
    removeButtonHighlight();
    eraserButton.setAttribute(
        'style',
        'border: 3px solid rgba(0, 0, 0, 0.755); scale: 1.1;'
    );
    random = false;
}

function randomMode() {
    removeButtonHighlight();
    randomButton.setAttribute(
        'style',
        'border: 3px solid rgba(0, 0, 0, 0.755); scale: 1.1;'
    );
    random = true;
}

function getRandomColor() {
    return (
        '#' +
        Math.floor(Math.random() * 2 ** 24)
            .toString(16)
            .padStart(6, '0')
    );
}

function clearCanvas() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.setAttribute('style', `background-color: white`);
    });
}

function initialiseInput() {
    canvasSize.addEventListener('change', () => {
        changeSize();
    });
}

function emptyGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });
}

function changeSize() {
    sizeDisplay.textContent =
        `${canvasSize.value}` + 'x' + `${canvasSize.value}`;

    emptyGrid();

    createGrid(canvasSize.value);
}

function removeButtonHighlight() {
    colorButton.removeAttribute('style');
    eraserButton.removeAttribute('style');
    randomButton.removeAttribute('style');
}
