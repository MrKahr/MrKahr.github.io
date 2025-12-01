import {createElement} from "./Model.js"
import {handleGridReset, handleInput} from "./Handlers.js"

function createPage() {
    const main = document.querySelector('main');

    // Container for elements
    const buttons = createElement(
        'div', 
        {className: 'button-container'});

    // Reset button  
    const resetButton = createElement(
        'button', 
        {className:['container__reset-button'], 
        text: ['Reset'],
        eventHandlers: {'click': handleGridReset}}
    );

    // Submit button  
    const submitButton = createElement(
        'button', 
        {className: ['container__submit-button'],
            text: ['Submit'],
            eventHandlers:{'click':handleInput}
        });

    // Input 
    const input = createElement(
        'input', 
        {className: 'container__input'});

    // Grid 
    const grid = createElement(
        'div',
        {className:['grid']}
    )
    // Footer
    const footer = createElement('footer');

    // Attach elements 
    main.append(buttons, grid);
    buttons.append(resetButton, input, submitButton);
    document.body.append(footer);
}

createPage();
