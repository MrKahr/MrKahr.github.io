import {createElement, addChildren, removeChildren} from "./dom_manipulation.js" 
import {choices,playRound,getComputerChoice, getRoundMessage, getFinalMessage} from "./rps_logic.js";

console.log("script loaded!");
let maxRounds = 6;
let rounds = 0;
let scoreDifference = 0; 

function createPage() {
    let resetbutton, entries;
    let buttons = [], figures = [];
    let contentContainer, scoreContainer, figureContainer, buttonContainer;

    // I know I can make objects with constructors that are better suited for this, but I wanted to challenge myself in the spirit of this exercise 

  
    contentContainer = createElement("div", "container", {}, []);
    scoreContainer = createElement("div", "scoreContainer", {}, []);
    buttonContainer = createElement("div", "buttonContainer",{}, []);
    figureContainer = createElement("div", "figureContainer", {}, []);
    entries = createElement("ul", "entries", {}, []);
    resetbutton = createElement("button", "button", {"properties":{"textContent": "RESET"}, "listeners": {
        "onClick": () => {
            rounds = 0;
            scoreDifference = 0;
            let currentScores = document.querySelector(".entries");
            removeChildren(currentScores);
        }
    }},[]);
    
    // Image and corresponding buttons have to be paired 
    for (let i = 0; i < choices.length; i++) {
        figures[i] = createElement(
            "img",
            "picture",
            {
                "properties": {
                    "src": `./assets/${choices[i].toLocaleLowerCase()}.png`,
                    "alt": `Hand drawn placeholder for ${choices[i]}`,
                    "height": "320",
                    "width": "320"
                }
            }, 
            []
        );
        buttons[i] = createElement(
            "button", 
            "choice", 
            {
            "properties":{"textContent": choices[i]}, 
            "listeners":{"onClick": () => {
                // For clarity, we want the player to only see action at a time
                let entries = document.querySelector(".entries");
                removeChildren(entries);
                
                let humanChoice = buttons[i].textContent;
                let computerChoice = getComputerChoice();
                let result = playRound(humanChoice, computerChoice, scoreDifference);
                
                scoreDifference += result; 
                rounds++;

                // Register the entry on the scoreboard 
                let entry = createElement("li", "entry", {"properties": {"textContent":getRoundMessage(result, humanChoice, computerChoice)}},[]);
                entries.appendChild(entry);

                if(rounds === maxRounds){
                    entry = createElement("li", "entry", {"properties": {"textContent":"Final tally: " + getFinalMessage(scoreDifference) + "-  restting game!"}},[]);
                    entries.append(entry);
                    scoreDifference = 0;
                    rounds = 0;
                    let currentScores =  document.querySelector(".entires");
                    removeChildren(currentScores);
                }

            }
        }
    },[]);
    }; 

    addChildren(contentContainer, [figureContainer, buttonContainer, scoreContainer]);
    addChildren(scoreContainer, [entries]);
    addChildren(buttonContainer, [resetbutton, ...buttons]);
    addChildren(figureContainer, figures);

    document.body.appendChild(contentContainer);

};

createPage();