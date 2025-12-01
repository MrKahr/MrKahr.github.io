// TODO: add documentation 
console.log("loading module Handlers")
function handleSquareColoring(event) {
    const square = event.target; 

    if(square.style.opacity < 1){
        square.style.opacity += 0.1;
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

export {handleSquareColoring, handleInput, handleGridReset}