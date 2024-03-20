function getComputerChoice(){

   const choices = ["rock", "paper", "scissors"];

   return choices[Math.floor(Math.random() * choices.length)]

}

function getPlayerChoice(){

    let playerChoice = prompt("Enter your choice").toLowerCase();
    return playerChoice;

}


function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return "Its a draw!"
    }

    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock"
    }

    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors"
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock"
    }

    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beat Paper"
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beat Paper"
    }

    else{
        return "You Lose! Rock beats Scissors"
    }
}



for(let i = 0; i<5; i++){
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
}
