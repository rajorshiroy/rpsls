let userScore = 0;
let compScore = 0;

const userScore_elem = document.getElementById("user-score");
const compScore_elem = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");

const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const lizard_btn = document.getElementById("lizard");
const spock_btn = document.getElementById("spock");


function fullName(inp){
  switch(inp){
    case 'r':
      return 'Rock';
    case 'p':
      return 'Paper';
    case 's':
      return 'Scissors';
    case 'l':
      return 'Lizard';
    case 'sp':
      return 'Spock';
  }
}

function resetIcons(){
  const allIcons = document.querySelectorAll(".selector-icon");
  allIcons.forEach((elem) => elem.src = "icons/none-icon.png");
}

function result(msg){
  resultDiv.innerHTML(msg);
}

function setIcons(uc, cc){
  // uc: user choice, cc: comp choice
  uc = fullName(uc).toLowerCase();
  cc = fullName(cc).toLowerCase();
  resetIcons(); // reset all icons to none then set appropriate icons
  if (uc === cc){
    document.getElementById(uc + "-selector").src = "icons/draw-icon.png";
  }
  else {
    document.getElementById(uc + "-selector").src = "icons/user-icon.png";
    document.getElementById(cc + "-selector").src = "icons/computer-icon.png";
  }
}

function game(userChoice){
  const compChoice = getComputerChoice();

setIcons(userChoice, compChoice);

  if (compChoice === userChoice){
    resultDiv.innerHTML = "You both picked " + fullName(userChoice) + ". It's a draw";
  }
  else {
    const result = userChoice + compChoice;
    switch(result){
      case 'sp':
        resultDiv.innerHTML = "Scissors cuts paper. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'ps':
        resultDiv.innerHTML = "Scissors cuts paper. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'sl':
        resultDiv.innerHTML = "Scissors decapitates Lizard. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'ls':
        resultDiv.innerHTML = "Scissors decapitates Lizard. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'pr':
        resultDiv.innerHTML = "Paper covers Rock. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'rp':
        resultDiv.innerHTML = "Paper covers Rock. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'psp':
        resultDiv.innerHTML = "Paper disproves Spock. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'spp':
        resultDiv.innerHTML = "Paper disproves Spock. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'rl':
        resultDiv.innerHTML = "Rock crushes Lizard. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'lr':
        resultDiv.innerHTML = "Rock crushes Lizard. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'rs':
        resultDiv.innerHTML = "Rock crushes Scissors. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'sr':
        resultDiv.innerHTML = "Rock crushes Scissors. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'lsp':
        resultDiv.innerHTML = "Lizard poisons Spock. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'spl':
        resultDiv.innerHTML = "Lizard poisons Spock. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'lp':
        resultDiv.innerHTML = "Lizard eats Paper. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'pl':
        resultDiv.innerHTML = "Lizard eats Paper. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'sps':
        resultDiv.innerHTML = "Spock smashes Scissors. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'ssp':
        resultDiv.innerHTML ="Spock smashes Scissors. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
      case 'spr':
        resultDiv.innerHTML = "Spock vaporizes Rock. You Win";
        userScore++;
        userScore_elem.innerHTML = userScore;
        break;
      case 'rsp':
        resultDiv.innerHTML = "Spock vaporizes Rock. Computer Wins";
        compScore++;
        compScore_elem.innerHTML = compScore;
        break;
    }
  }
}

function getComputerChoice(){
  const choices = ['r', 'p', 's', 'l', 'sp'];
  let index = Math.floor(Math.random() * 5);
  return choices[index];
}




rock_btn.addEventListener('click', () => game('r'));
paper_btn.addEventListener('click', () => game('p'));
scissors_btn.addEventListener('click', () => game('s'));
lizard_btn.addEventListener('click', () => game('l'));
spock_btn.addEventListener('click', () => game('sp'));
