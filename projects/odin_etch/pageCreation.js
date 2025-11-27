// TODO: Documentation
import { createElement, handleInput, handleGridReset} from "./Model.js"

function createPage() {
    const main = document.querySelector('main');

    // Container for elements
    const buttons = createElement('div', 'button-container');

    // Reset button  
    const resetButton = createElement('button', 'container__reset-button', 'Reset', 'click', handleGridReset);

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
