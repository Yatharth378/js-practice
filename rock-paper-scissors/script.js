function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber==0){
        return "Rock";
    }else if (randomNumber==1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose 1)Rock, 2)Paper or 3)Scissors !")
    return humanChoice;
}

function playGame(){
    let computerChoice = getComputerChoice();
    let manChoice = getHumanChoice();    

    console.log(computerChoice);
    console.log(manChoice);

    let humanScore = 0;
    let computerScore = 0;

    function playRound(){

        if (manChoice===computerChoice){
            console.log(`It's a tie! Both chose ${manChoice}.`);
        }else if(
            (manChoice==="Rock" && computerChoice==="Scissors")||
            (manChoice==="Paper" && computerChoice==="Rock")||
            (manChoice==="Scissors" && computerChoice==="Paper")
        ){
            humanScore++;
            console.log(`You win! ${manChoice} beats ${computerChoice}.`);
        }else{
            computerScore++;
            console.log(`Computer win! ${computerChoice} beats ${manChoice}.`);
        }
    }

    for (let i=0; i<5; i++){
        console.log(`--- Round ${i + 1} ---`)
        let computerChoice = getComputerChoice();
        let manChoice = getHumanChoice();

        playRound(manChoice,computerChoice);
        console.log(`Score -> You: ${humanScore} | Computer : ${computerScore}`);
    }
    if(humanScore>computerScore){
        console.log("Final Result : You Won the Match !");
    }else if(computerScore>humanScore){
        console.log("Final Result : Computer Won the Match !");
    }else{
        console.log("Final Result : It's a draw !");
    }
}
playGame();
