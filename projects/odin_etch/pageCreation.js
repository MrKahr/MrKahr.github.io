import { createElement } from "./Model.js"
import { handleGridModify, handleInput, handleSquareColoring } from "./Handlers.js"

function createPage() {
    const main = document.querySelector('main');

    // Container for elements
    const buttons = createElement(
        'div',
        { classNames: ['button-container'] }
    );

    // Reset button  
    const resetButton = createElement(
        'button',
        {
            classNames: ['container__reset-button'],
            text: ['Reset'],
            eventHandlers: { 'click': [handleGridModify]}
        }
    );

    // Submit button  
    const submitButton = createElement(
        'button',
        {
            classNames: ['container__submit-button'],
            text: ['Submit'],
            eventHandlers: { 
                'click': [handleInput,handleGridModify]
            }
        }
    );

    // Input 
    const input = createElement(
        'input',
        { classNames: ['container__input'] }
    );

    // Grid 
    const grid = createElement(
        'div',
        { 
            classNames: ['grid'], 
            eventHandlers: {
                'mouseover': [handleSquareColoring]
            }
        }
    );
    // Footer
    const footer = createElement('footer');

    // Attach elements 
    main.append(buttons, grid);
    buttons.append(resetButton, input, submitButton);
    document.body.append(footer);
}

createPage();
