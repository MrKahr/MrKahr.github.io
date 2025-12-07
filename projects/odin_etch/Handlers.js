// TODO: add documentation 
import { resetInput, modifyGrid} from "./Model.js";
import { colorGrid, resetOpacity } from "./UI.js";

function handleSquareColoring(event) {
    console.log(`${event.target}`);
    const square = event.target; 
    let  opacity = parseFloat(square.style.opacity) || 0; /* Fallback if opacity is not set*/

    if(opacity < 1){
        opacity += 0.1;
        square.style.opacity = opacity;
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

function handleGridModify(){
    resetInput();
    colorGrid();
    resetOpacity();
}

export {handleSquareColoring, handleInput, handleGridModify}