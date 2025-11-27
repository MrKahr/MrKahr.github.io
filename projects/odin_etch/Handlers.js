// TODO: documentation 
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
