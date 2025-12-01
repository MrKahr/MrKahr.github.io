// TODO: add documentation 
console.log("loading module Model")
function createElement(tag, {classNames, text, eventHandlers} = {}) {
    const element = document.createElement(tag);

    if (classNames && typeof classNames === 'object') {
        Object.values(classNames).forEach(
            (value) => {element.classList.add(value)});
    } 
            
    if (text && typeof text === 'object') {
        Object.values(text).forEach(
            (value) => {element.textContent = element.textContent + value});
    }; 

    if(eventHandlers && typeof eventHandlers === 'object'){
        Object.entries(eventHandlers).forEach(
            ([type,callback]) => {element.addEventListener(type,callback)});
    }

    return element;
}


function resetInput(){
    const input = document.querySelector('.container__input');
    if(input){
        input.value = "";
    }
}

function modifyGrid(n) {
    const gridSize = n * n;
    let gridContainer = document.querySelector('.grid');

    if(!gridContainer){
        gridContainer = createElement('div', {className:"grid", eventHandlers:{}});   
    }

    while (gridContainer.children.length < gridSize) {
        const square = createElement('div', 
            {className: 'grid__square'}
        );
        gridContainer.appendChild(square);
    }

    while (gridContainer.children.length > gridSize) {
        gridContainer.lastChild.remove();
    }

    return gridContainer;

}


export {createElement, resetInput, modifyGrid} 