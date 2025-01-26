

let humanScore = 0 ;
let computerScore  = 0;
let roundNumnber = 0;

let computerChoice;
let humanChoice;

const displayedHumanScore = document.querySelector("#playerScore");
const displayedComputerScore = document.querySelector("#computerScore");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//Buttons event listeners


    rockButton.addEventListener("click",()=>{
    humanChoice = "rock";
    playRound();
    })

    paperButton.addEventListener("click",()=>{
    humanChoice = "paper";
    playRound();
    })


    scissorsButton.addEventListener("click",()=>{
    humanChoice = "scissors";
    playRound();
    })







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
  


    const displayResult = document.querySelector("#result");
    const displayedRoundNumber = document.querySelector("#roundNumber");
    const displayedWinner= document.querySelector("#winner");
   
    computerChoice = getComputerChoice();

    if ((humanScore >= 5) || (computerScore  >= 5)){

        return;
    }else{

    roundNumnber++;
    displayedRoundNumber.textContent = roundNumnber;

    switch (computerChoice){

        case "rock":

        if (humanChoice=="rock"){
            displayResult.textContent = "Computer picked ROCK. You picked ROCK. This round is a draw! ";

        }else if(humanChoice=="paper"){
            displayResult.textContent = "Computer picked ROCK. You picked PAPER. You won this round!";
            humanScore++;
        }else if(humanChoice=="scissors"){
            displayResult.textContent = "Computer picked ROCK. You picked scissors. You lost this round!";
            computerScore++;
        }

        updateDisplayedScore();
        checkWinner();

        break;


        case "paper":
            if (humanChoice=="rock"){
                displayResult.textContent = "Computer picked PAPER. You picked ROCK. You lost this round!";
                computerScore++;
            }else if(humanChoice=="paper"){
                displayResult.textContent = "Computer picked PAPER. You picked PAPER. This round is a draw! ";
            }else if(humanChoice=="scissors"){
                displayResult.textContent ="Computer picked PAPER. You picked scissors. You won this round!"; 
                humanScore++;
            }

        updateDisplayedScore();  
        checkWinner(); 
        break;

        case "scissors":
            if (humanChoice=="rock"){ 
                displayResult.textContent = "Computer picked SCISSORS. You picked ROCK.  You won this round!";
                humanScore++;
            }else if(humanChoice=="paper"){
                displayResult.textContent = "Computer picked SCISSORS.You picked PAPER. You lost this round!";
                computerScore++;
            }else if(humanChoice=="scissors"){
                displayResult.textContent = "Computer picked SCISSORS. You picked scissors. This round is a draw!";
            }

        updateDisplayedScore();
        checkWinner();
        break;


    }

    }

    function checkWinner(){
    if (humanScore >= 5 ){
        displayedWinner.textContent = "The winner is human! Refresh this page to replay. ";
        rockButton.style.cssText = "visibility:hidden";
        paperButton.style.cssText = "visibility:hidden";
        scissorsButton.style.cssText = "visibility:hidden";
        return;
    }else if(computerScore >= 5){
        displayedWinner.textContent = "The winner is Computer! Refresh this page to replay. ";
        rockButton.style.cssText = "visibility:hidden";
        paperButton.style.cssText = "visibility:hidden";
        scissorsButton.style.cssText = "visibility:hidden";

        return;
    }

}




}


function updateDisplayedScore(){
    displayedHumanScore.textContent = humanScore;
    displayedComputerScore.textContent = computerScore;

    console.log(humanScore);
}

