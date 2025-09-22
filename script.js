function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  computerChoiceNum = Math.floor(Math.random() * 3);
  return choices[computerChoiceNum];
}

function getHumanChoice() {
  const humanChoice = prompt("select one:\n- rock\n- paper\n- scissors");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice, humanScore = 0, computerScore = 0) {
  if (humanChoice === computerChoice) {
    console.log("Tie, you both chose " + humanChoice);
    return {human: humanScore, computer: computerScore};
  }
  const verbs = {
    // how does each one win?
    scissors: "cut",
    paper: "covers",
    rock: "breaks"
  }
  let humanWins;
  switch (humanChoice) {
    case "rock":
      humanWins = computerChoice === "scissors";
      break;
    case "paper":
      humanWins = computerChoice === "rock";
      break;
    case "scissors":
      humanWins = computerChoice === "paper";
      break;
    default:
      console.log(`choice ${humanChoice} not valid.`);
      return;
  }
  if (humanWins) {
    console.log(`You won! ${humanChoice} ${verbs[humanChoice]} ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Computer wins, ${computerChoice} ${verbs[computerChoice]} ${humanChoice}`);
    computerScore++;
  }
  return {human: humanScore, computer: computerScore};
}

function playGame() {
  let scores = {human: 0, computer: 0};
  for (let i = 0; i < 5; i++){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    scores = playRound(humanChoice, computerChoice, humanScore = scores.human, computerScore = scores.computer);
  }

  console.log(`final score: you: ${scores.human} computer ${scores.computer}.`)
}

playGame();
