/* AUX */
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

/* COLOR */ 
class Color {
    static rgbPattern = /^(r|R){1}(g|G){1}(b|B){1}$/

    #red = 0;
    #green = 0;
    #blue = 0;

    // Intended user input color generation - NOTE: not possible to overload constructor in js
    constructor(r, g, b) {
        this.#red = Math.round(r);
        this.#green = Math.round(g);
        this.#blue = Math.round(b);
    }

    static generateColor(method) {
        if (method.match(Color.rgbPattern)) {
            return new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        } else {
            throw new TypeError(`${method} not supported`);

        }
    }

    getrgb(){
        return `rgb(${this.#red},${this.#blue}, ${this.#green})`
    }


}

/* GRID */ 
function modifyGrid(n) {
    let gridSize = n * n;
    let layer = Color.generateColor('rgb');
    let grid;

    if (!(document.querySelector('.grid'))) {
        grid = createElement('div', 'grid');
        document.querySelector('main').append(grid);
    } else {
        grid = document.querySelector(".grid");
    }

    while (grid.childNodes.length < gridSize) {
        let square = createElement('div', 'grid__square');
        square.style.color = layer.getrgb();
        square.style.opacity = 0;
        grid.appendChild(square);
    }

    while (grid.childNodes.length > gridSize) {
        grid.firstChild.remove();
    }

    return grid;

}

function resetGrid() {
    let input = document.querySelector('.container__input');
    let squares = document.querySelectorAll('.grid__square');
    let color = Color.generateColor();
    squares.forEach(
        (square) => {
            square.style.background = color;
            square.opacity = 0;
        }
    )
    handleInput();
}


/* Handlers */ 
function handleSquareColoring(square) {
    if (square.style.opacity === 1) {
        square.style.opacity += 0.1;
    } else {
        console.log(`Square: ${square} is already at full saturation`);
    }
}

function handleInput() {
    const input = document.querySelector('.container__input').value;
    try {
        input = parseInt(input);
    } catch (error) {
        console.warn(error.message);
    }

    if (0 < input && input <= 100) {
        return modifyGrid(input);
    } else {
        console.warn(`${input} could not be coerced to an integer between 1 and 100`);
    }

    input.value = "";
}

/* Main */ 
function createPage() {
    const main = document.querySelector('main');

    // Container for elements
    const buttons = createElement('div', 'button-container');

    // Reset button  
    const resetButton = createElement('button', 'container__reset-button', 'Reset', 'click', resetGrid);

    // Submit button  
    const submitButton = createElement('button', 'container__submit-button', 'Submit', 'click', handleInput);

    // Input 
    const input = createElement('input', 'container__input');

    // Footer
    const footer = createElement('footer');

    // Attach elements 
    main.append(buttons);
    buttons.append(resetButton, input, submitButton);
    document.body.append(footer);
}

createPage();
