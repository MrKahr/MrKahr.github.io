import {createElement, addChildren, removeChildren} from "./dom_manipulation.js" 
import {choices,playRound,getComputerChoice, getRoundMessage } from "./rps_logic.js";

console.log("script loaded!");
let maxRounds = 6;
let rounds = 0;
let scoreDifference = 0; 

function createPage() {
    let content, resetbutton, buttons = [], scoreContainer, scores;

    // I know I can make objects with constructors that are better suited for this, but I wanted to challenge myself in the spirit of this exercise 
    scores = createElement("ol", "entries");
    scoreContainer = createElement("div", "container");
    content = createElement("div", "container",{}, [scoreContainer]);
    resetbutton = createElement("button", "button", {"listeners": {
        "onClick": () => {
            scoreDifference = 0;
            let currentScores = document.querySelector(".scores");
            removeChildren(currentScores);
        }
    }});
    for (let i = 0; i < choices.length; i++) {
        buttons[i] = createElement(
            "button", 
            "choice", 
            {
            "properties":{"textContent": choices[i]}, 
            "listeners":{"onClick": () => {
                let humanChoice = buttons[i].textContent;
                let computerChoice = getComputerChoice();
                let result = playRound(humanChoice, computerChoice, scoreDifference);
                
                scoreDifference += result; 
                rounds++;

                // Register the entry on the scoreboard 
                let entries = document.querySelector(".scores");
                let entry = createElement("li", "entry", {"properties": {"textContent":getRoundMessage(result, humanChoice, computerChoice)}});
                entries.appendChild(entry);

                if(rounds === maxRounds){
                    entry = createElement("li", "entry", {"properties": {"textContent":"Final tally:" + getRoundMessage(scoreDifference, humanChoice, computerChoice) + "restting game!"}});
                    entries.append(entry);
                    scoreDifference = 0;
                    let currentScores =  document.querySelector(".scores");
                    removeChildren(currentScores);
                }

            }
        }
    });
    }; 
    addChildren(content, [scores,...buttons, resetbutton]); 
    document.body.appendChild(content);

};

createPage();