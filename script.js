

let humanScore = 0 ;
let computerScore  = 0;
let computerChoice;
let humanChoice;



//playGame();

function getComputerChoice(){

    let randomNumber = Math.random();

    if (randomNumber>0 && randomNumber<=0.33){
        return "rock";
    }else if (randomNumber >0.33 && randomNumber <= 0.66){
        return "paper";
    }else if (randomNumber >0.66 && randomNumber <= 1){
        return "scissors";
    }

}




function playRound(){
   
    computerChoice = getComputerChoice();
   

    switch (computerChoice){

        case "rock":

        if (humanChoice=="rock"){
            console.log("Computer picked ROCK. You picked ROCK. This round is a draw! ");
        }else if(humanChoice=="paper"){
            console.log("Computer picked ROCK. You picked PAPER. You won this round!");
            humanScore++;
        }else if(humanChoice=="scissors"){
            console.log("Computer picked ROCK. You picked scissors. You lost this round!");
            computerScore++;
        }
        break;


        case "paper":
            if (humanChoice=="rock"){
                console.log("Computer picked PAPER. You picked ROCK. You lost this round!");
                computerScore++;
            }else if(humanChoice=="paper"){
                console.log("Computer picked PAPER. You picked PAPER. This round is a draw! ");
            }else if(humanChoice=="scissors"){
                console.log("Computer picked PAPER. You picked scissors. You won this round!");
                humanScore++;
            }

           
        break;

        case "scissors":
            if (humanChoice=="rock"){
                console.log("Computer picked SCISSORS. You picked ROCK.  You won this round!");
                humanScore++;
            }else if(humanChoice=="paper"){
                console.log("Computer picked SCISSORS.You picked PAPER. You lost this round!");
                computerScore++;
            }else if(humanChoice=="scissors"){
                console.log("Computer picked SCISSORS. You picked scissors. This round is a draw!");
            }
        break;


    }



}


/*

function playGame(){
    let numOfRound = 5;

    for (let i = 0;i < numOfRound;i++){
        playRound();
    }

    if (humanScore > computerScore){
        console.log(`Final result: You won! Your score:${humanScore} Computer score:${computerScore} .`);

    } else if (computerScore > humanScore){
        console.log(`Final result: You lost! Your score:${humanScore} Computer score:${computerScore} .`);
    }


}


*/

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click",()=>{
    humanChoice = "rock";
    playRound();

})


const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click",()=>{
    humanChoice = "paper";
    playRound();
})

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click",()=>{
    humanChoice = "scissors";
    playRound();
})

