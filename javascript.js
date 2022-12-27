const container = document.getElementById('pad');

const gridSelect = document.getElementById('gridsize');
gridSelect.addEventListener('click', () => {
    reset();
    gridFill();
});

const gridFun = document.getElementById('gridcolour');
gridFun.addEventListener('click', () => {
    reset();
    gridColour();
});

// fills grid squares black when hovered over
function gridFill() { 
    let fillBlack = document.getElementById('pad').querySelectorAll('.grid-item');
    fillBlack.forEach((filled) => {
        filled.addEventListener('mouseover', () => {
            filled.style.backgroundColor = 'black';
        });
    });
}
function gridColour() {
    let fillRandom = document.getElementById('pad').querySelectorAll('.grid-item');
    fillRandom.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColour();
        });
    });
}

// creates grid rows
function makeRows(rows, cols) { 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };
};

//removes the previous grid
function removeGrid() {
    const removeGrid = document.querySelectorAll('.grid-item');
    removeGrid.forEach((e) => e.parentNode.removeChild(e));
}

// resets the grid
function reset() { 
    let input = prompt("Select a grid size, max 64");

    removeGrid();
    makeRows(input, input);
    gridFill();
    if (input < 1 || input > 64) {
        alert('Please pick a valid number');
        removeGrid();
        makeRows(16, 16);
    }
}

// random colour generator
function randomColour() {
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

makeRows(16, 16);
gridFill();

