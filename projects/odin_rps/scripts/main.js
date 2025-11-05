import { createContext } from "react";
import { createElement, addChildren, removeChildren } from "./dom_manipulation.js"
import { choices, playRound, getComputerChoice, getRoundMessage, getFinalMessage } from "./rps_logic.js";

class GameState {
    // Private variables in javascript 
    #maxRounds;
    #rounds = 0;
    #scoreDifference = 0;
    
    constructor(maxRounds = 5) {
        this.#maxRounds = maxRounds;
    }
    
    getRounds(){
        return this.#rounds;
    }

    getScoreDifference(){
        return this.#scoreDifference;
    }

    getMaxRounds(){
        return this.#maxRounds;
    }

    incrementRounds(increment) {
        this.#rounds += increment;
    }

    incrementScoreDifference(increment) {
        this.#scoreDifference += increment;
    }

    setMaxRounds(maxRounds) {
        this.#maxRounds = maxRounds;
    }

    reset() {
        this.#rounds = 0;
        this.#scoreDifference = 0;
    }

    isGameOver() {
        return this.#maxRounds === this.#rounds;
    }

}

// Aux functions 
function resetGame(gameState, moves) {
    gameState.reset();
    removeChildren(moves);
};

function handleClickChoice(humanChoice, gameState, moves) {
    removeChildren(moves);

    const computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    gameState.incrementScoreDifference(result);
    gameState.incrementRounds(1);

    // Register the entry on the scoreboard 
    let entry = createElement("li", "entry", { "properties": { "textContent": getRoundMessage(result, humanChoice, computerChoice) } }, []);
    moves.appendChild(entry);

    if (gameState.isGameOver()) {
        entry = createElement("li", "entry", { "properties": { "textContent": `Final tally: ${getFinalMessage(gameState.getScoreDifference())} - resetting game!`} }, []);
        moves.append(entry);
        gameState.reset();

    }
};

// Initialize
function createPage() {
    let game = new GameState(5);

    // Dom-variable decl 
    let resetButton, moves, tally;
    let buttons = [], figures = [];
    let contentContainer, moveContainer, figureContainer, buttonContainer;

    // Dom-variable init 
    contentContainer = createElement("div", "container", {}, []);
    moveContainer = createElement("div", "moveContainer", {}, []);
    buttonContainer = createElement("div", "buttonContainer", {}, []);
    figureContainer = createElement("div", "figureContainer", {}, []);
    moves = createElement("ul", "moves", {}, []);
    tally = createElement("")
    
    resetButton = createElement("button", "resetButton", {
        "properties": { "textContent": "RESET" }, "listeners": {
            "onClick": () => {
                resetGame(game, moves);
            }
        }
    }, []);
    figures = choices.map((choice) => {
        return createElement("img", "picture", {
            "properties": {
                "src": `./assets/${choice.toLowerCase()}.png`,
                "alt": `Hand drawn placeholder for ${choice}`,
                "height": "320",
                "width": "320"
            }
        },[]);
    });
    buttons = choices.map((choice) => {
        return createElement("button", "choice", {
            "properties": { "textContent": choice }, 
            "listeners": {
                "onClick": () => {
                    let humanChoice = choice;
                    handleClickChoice(humanChoice, game, moves);
                }
            }
        }, []);
    });

    // Append 
    addChildren(contentContainer, [figureContainer, buttonContainer, moveContainer]);
    addChildren(moveContainer, [moves]);
    addChildren(buttonContainer, [...buttons, resetButton]);
    addChildren(figureContainer, figures);

    document.body.appendChild(contentContainer);

};

createPage();