const container = document.querySelector('#mainContainer');

function createRows() {
    for (i = 0; i < 16; ++i) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
    }
}

function createCells() {
    const rows = document.querySelectorAll('#mainContainer .row');
    rows.forEach((row) => {
        for (i = 0; i < rows.length; ++i) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }
    });
}

function createGrid() {
    createRows();
    createCells();
}
