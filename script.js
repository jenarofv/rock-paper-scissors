
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  computerChoiceNum = Math.floor(Math.random() * 3);
  return choices[computerChoiceNum];
}

function getHumanChoice() {
  const humanChoice = prompt("select one:\n- rock\n- paper\n- scissors");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie, you both chose " + humanChoice);
    return;
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
}
