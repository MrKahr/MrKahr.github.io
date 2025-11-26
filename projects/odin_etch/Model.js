import {Color} from "./UI.js";

/* AUX  -- optional parameters do not exist in javascript, only optional object chaining*/
function createElement(tag, className, text, event, callback) {
    const element = document.createElement(tag);

    if (className) { 
        element.classList.add(className); 
    }
    if (text) {
        element.textContent = text 
    }; 
    if (event && callback) { 
        element.addEventListener(event, callback);
    }

    return element;

}

/* GRID */ 
function colorGrid(){
    let color = Color.generateColor('rgb');
    let squares = document.querySelectorAll('.grid__square');
    squares.forEach(
        (square) => {
            square.style.backgroundColor = color.getrgb();
        }
    )
}

function resetOpacity() {
    let squares = document.querySelectorAll('.grid__square');
    squares.forEach(
        (square) => {
            square.style.opacity = 0;
        }
    )
}

function resetInput(){
    let input = document.querySelector('.container__input');
    input.value = "";
}



function modifyGrid(n) {
    // Creation 
    const gridSize = n * n;
    let grid;

    if (!(document.querySelector('.grid'))) {
        grid = createElement('div', 'grid');
        document.querySelector('main').append(grid);
    } else {
        grid = document.querySelector(".grid");
    }

    while (grid.children.length < gridSize) {
        const square = createElement('div', 'grid__square',"", "click", handleSquareColoring);
        grid.appendChild(square);
    }

    while (grid.children.length > gridSize) {
        grid.firstChild.remove();
    }

    colorGrid();
    resetOpacity();

    return grid;

}


/* Handlers */ 
function handleSquareColoring(square) {
    if (!square.style.opacity === 1) {
        square.style.opacity += 0.1;
    } else {
        console.log(`Square: ${square} is already at full saturation`);
    }
}

function handleInput() {
    const input = document.querySelector('.container__input');
    const value = parseInt(input.value);

    if (0 < value && value <= 100) {
        modifyGrid(value);
    } else {
        window.alert(`${value} is not an integer between 1 and 100`);
    }

    resetInput();

}

function handleGridReset(){
    resetInput();
    colorGrid();
    resetOpacity();
}


export {createElement, handleGridReset, handleInput}