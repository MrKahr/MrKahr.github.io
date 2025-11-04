export {choices, playRound, getComputerChoice, getRoundMessage, getFinalMessage};

const choices = ["ROCK", "PAPER", "SCISSORS"];

const beats = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER"
};

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice){
        return 0;
    } else if (beats[humanChoice] === computerChoice){
        return 1;
    } else {
        // Computer beats human
        return -1;
    };
};

const getRoundMessage = (result, humanChoice, computerChoice) => {
    let message = `Human chose: ${humanChoice} - Computer chose: ${computerChoice} - `;
    if(result === 0){
        message += `it's a tie!`;
    } else if(result > 0){
        message += 'human wins!';
    } else {
        message += 'computer wins!';
    }
    return message;
}

const getFinalMessage = (result) => {
    if(result > 0){
        return "Human wins!";
    } else if(result < 0){
        return "Computer wins!";
    } else {
        return "It's a tie!";
    }
}