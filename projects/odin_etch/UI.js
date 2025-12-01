// TODO: Documentation 
/* COLOR */ 
console.log("loading module UI")
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
        return `rgb(${this.#red},${this.#green}, ${this.#blue})`
    }


}

function styleElement(element, styleObject = {}){
    for(const key in styleObject){
        element.style[key] = styleObject[key];
    }
}

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


export {Color, styleElement, colorGrid, resetOpacity}