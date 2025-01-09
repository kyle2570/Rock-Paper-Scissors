console.log("Test3");

//getComputerChoice();
//console.log(getHumanChoice());


let humanScore = 0 ;
let computerScore  = 0;

playRound();

function getComputerChoice(){

    let randomNumber = Math.random();

    console.log(randomNumber);

    if (randomNumber>0 && randomNumber<=0.33){
        return "rock";
    }else if (randomNumber >0.33 && randomNumber <= 0.66){
        return "paper";
    }else if (randomNumber >0.66 && randomNumber <= 1){
        return "scissors";
    }

}

function getHumanChoice(){
   let answer = prompt("Please answer with one of \"rock\", \"paper\", or \"scissors\"");
   answer = answer.toLowerCase();

   while (true){

   if (answer=="rock") {
    return "rock";
   }else if (answer=="paper") {
    return "paper";
   }else if (answer=="scissors") {
    return "scissors"
   }else{

    answer = prompt("Invalid answer.Please answer with one of \"rock\", \"paper\", or \"scissors\"");
    answer = answer.toLowerCase();
    }

    }



}


function playRound(){
   
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    switch (computerChoice){

        case "rock":

        if (humanChoice=="rock"){
            console.log("It's a draw! Rock vs rock.");
        }else if(humanChoice=="paper"){
            console.log("You won! Paper beats rock.");
            humanScore++;
        }else if(humanChoice=="scissors"){
            console.log("You lost! Rock beats scissors.");
            computerScore++;
        }
        break;


        case "paper":
            if (humanChoice=="rock"){
                console.log("you lost! Paper beats rock.");
                computerScore++;
            }else if(humanChoice=="paper"){
                console.log("It's a draw! Paper vs paper.");
            }else if(humanChoice=="scissors"){
                console.log("You won! Scissors beats paper.");
                humanScore++;
            }

           
        break;

        case "scissors":
            if (humanChoice=="rock"){
                console.log("You Won! Rock beats scissors.");
                humanScore++;
            }else if(humanChoice=="paper"){
                console.log("You lost! Scissors beats paper.");
                computerScore++;
            }else if(humanChoice=="scissors"){
                console.log("It's a draw! Scissors vs scissors.");
            }
        break;


    }



}



