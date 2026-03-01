let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

const roundResultDiv = document.getElementById("round-result");
const scoreDisplayDiv = document.getElementById("score-display");
const finalWinnerDiv = document.getElementById("final-winner");

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if ( randomNumber == 1){
        return "paper"
    }else if(randomNumber == 2){
        return "rock"
    }else{
        return "scissors"
    };
};            

function playRound(humanPick){
    if(humanScore>=winningScore||computerScore>=winningScore) return;

    const computerPick = getComputerChoice();
    let message = "";

    if(humanPick === computerPick){
        message = `It's a draw! Both chose ${humanPick.toUpperCase()}`;
    }else if( 
        (humanPick==="rock" && computerPick==="scissors")||
        (humanPick==="paper" && computerPick==="rock")||
        (humanPick==="scissors" && computerPick==="paper")
    ){
        humanScore++
        message = `You Win! ${humanPick} beats ${computerPick}`;
    }else{
        computerScore++
        message = `Computer Win! ${computerPick} beats ${humanPick}`;
    }

    roundResultDiv.textContent = message;
    scoreDisplayDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    checkWinner();
    
}

function checkWinner(){
            if (humanScore === winningScore) {
                finalWinnerDiv.textContent = `Final Result: You Won the Match! (${humanScore} - ${computerScore}) 🏆`;
            } else if (computerScore === winningScore) {
                finalWinnerDiv.textContent = `Final Result: Computer Won the Match! (${computerScore} - ${humanScore}) 🤖`;
            }
        }
        
function disableButtons(){
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));