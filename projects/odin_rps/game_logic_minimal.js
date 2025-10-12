// Challenge, do in a few lines as possible 
const choices = ["ROCK, PAPER, SCISSORS"];

const wins = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER"
};

const getComputerChoice = () =>  choices[Math.floor(Math.random() * choices.length)];

const getHumanChoice = () => prompt("Choose rock, paper or scissors").toUpperCase();

const playRound = (humanChoice, computerChoice) => {
    console.log(`Human chose ${humanChoice}! Computer chose ${computerChoice}`);
    if(humanChoice === computerChoice){(console.log("It's a tie!"),0)}
    else{wins[humanChoice] === computerChoice ? (console("Human wins!") , 1): ((console.log("Computer wins!"), -1));}
};

const playGame = (totalRounds) => {
    let scoreDifference = 0;
    for (let i = 0; i  < totalRounds; i++){playRound(getComputerChoice(), getHumanChoice())};
    scoreDifference === 0 ? console.log("It's a tie!") : (scoreDifference < 0 ? `Computer wins by ${scoreDifference}! ` : `Human wins by ${scoreDifference}!`) 
}

playGame(2); 
