 function playGame(){
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

        function getHumanChoice(){
            let humanChoice = prompt("Choose : 1) Rock  2) Paper  3) Scissors !");
            humanChoice = humanChoice.toLowerCase();
            return humanChoice;
        }

        let humanScore = 0;
        let computerScore = 0;


        for(i=0;i<5;i++){
            console.log(`--- Round ${i + 1} ---`)
            
            let humanPick = getHumanChoice();
            let computerPick = getComputerChoice();

            function playRound(){
                console.log(humanPick);
                console.log(computerPick);
                if(humanPick === computerPick){
                    console.log(`It's a draw! Both chose ${humanPick.toUpperCase()}`)
                }else if( 
                    (humanPick==="rock" && computerPick==="scissors")||
                    (humanPick==="paper" && computerPick==="rock")||
                    (humanPick==="scissors" && computerPick==="paper")
                ){
                    humanScore++
                    console.log(`You Win !`)
                }else{
                    computerScore++
                    console.log(`Computer Win !`)
                }

                console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
            }
            playRound();
            
        } 
        console.log("============================");
        console.log("GAME OVER");
        if (humanScore > computerScore) {
            console.log(`Final Result: You Won the Match! (${humanScore} - ${computerScore}) 🏆`);
        } else if (computerScore > humanScore) {
            console.log(`Final Result: Computer Won the Match! (${computerScore} - ${humanScore}) 🤖`);
        } else {
            console.log("Final Result: It's a draw! 🤝");
        }
 }

 playGame();
