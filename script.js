console.log("Test3");

getComputerChoice();


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