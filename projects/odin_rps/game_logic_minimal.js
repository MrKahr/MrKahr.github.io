const choices = ["ROCK", "PAPER", "SCISSORS"];

const wins = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER"
};

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const getHumanChoice = () => prompt("Choose rock, paper or scissors").toUpperCase();

const playRound = (humanChoice, computerChoice) => {
    console.log(`Human chose ${humanChoice}! Computer chose ${computerChoice}`)
    if (humanChoice === computerChoice) { return 0; }
    else { return wins[humanChoice] === computerChoice ? 1 : -1; }
};

const playGame = (totalRounds) => {
    let scoreDifference = 0;
    for (let i = 0; i < totalRounds; i++) { scoreDifference += playRound(getHumanChoice(), getComputerChoice()) };
    scoreDifference === 0 ? (console.log("Nobody wins!")) : (scoreDifference < 0 ? (console.log(`Computer wins by ${Math.abs(scoreDifference)}`)) : (console.log(`Human wins by ${Math.abs(scoreDifference)}!`)));
}

playGame(2); 