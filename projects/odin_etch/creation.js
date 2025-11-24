// Note that this exercise specifically calls out for NOT using the grid functionality in javascript 

class Color {
    static rgbPattern = /('r'|'R')('g'|'G')('b'|'B')/
    static hexPattern = /('h'|'H')('e'|'E')('x'|'X')/

    #red = 0;
    #green = 0;
    #blue = 0;

    constructor(r, g, b) {
        this.#red = r;
        this.#green = g;
        this.#blue = b;
    }

    generateColor(method) {
        if (method.match(rgbPattern)) {
            return new Color(
                Math.random() * 255, Math.random() * 255, Math.random() * 255
            );
        } else if (method.match(hexPattern)) {
            console.warn("Method not yet implemented!");
        } else {
            throw new TypeError(`${method} not supported`);

        }
    }
}

function createGrid(n) {
    let gridSize = n * n; 
    let layer = Color.generateColor();

    if (document.querySelector(".grid")) {
        let grid = document.createElement('div');
        grid.classList.add('.grid');
    } else {
        let grid = document.querySelector(".grid");
    }

    while(grid.ChildNodes.length < gridSize){
        let square = document.createElement('div');
        square.classList.add('.square');
        square.style.opacity = 0;
        grid.appendChild(square);
    }

    while(grid.ChildNodes.length > gridSize){
       grid.firstChild().remove(); 
    }

    return grid;

}

function resetGrid(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(
        (square) => {
            square.opacity = 0;
        }
    )
}

function handleSquareColoring(square) {
    if(square.style.opacity === 1){
     square.style.opacity += 0.1; 
    } else {
        console.log(`Square: ${square} is already at full saturation`);
    }
}


function createPage() {
    document.body.appendChild(createGrid(2));

    let grid = document.querySelector(".grid");
    let button = document.createElement("button");

    button.classList.add("reset_button");
    button.textContent = "Reset";
    button.addEventListener("onClick", () => {
        resetGrid();
    })

    grid.appendChild(button);
}

createPage();