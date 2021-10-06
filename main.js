
const button = document.getElementById("button")

let tieBreaker = 0;
let playerScore = 0;
let computerScore = 0;
let playerWin = "You Win!";
let computerWin = "You Lose!";
let draw = "DRAW play again!"
let champ = "VICTORIOUS!!!"


button.addEventListener("click", () => {


    
    let player = prompt("Choose: rock, paper or scissor")
    console.log("Player Choice: " + player)

    function playRound(playerSelection, computerSelection) {
  
        if (computerSelection == playerSelection) {

            return draw;

        } else if (computerSelection === "scissor" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "rock" && playerSelection === "scissor") {
            
            return computerWin;
       
        } else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissor" || computerSelection === "scissor" && playerSelection === "rock") {
           
            return playerWin;
            
        }
       
    }

    const computerSelection = computerPlay()
    console.log("Computer Choice: " + computerSelection)
    let winner = playRound(player, computerSelection)
    console.log("Round Winner: " + winner)
  
    
   
    function computerPlay() {
        let computerRandom = Math.floor(Math.random() * 3) + 1
        let computerChoice = computerRandom === 1 ? "rock"
        : computerRandom === 2 ? "paper"
        : "scissor"
      
        return computerChoice
          
    }

    function game() {
       
      
        if (winner == playerWin) {
            
            return playerScore++;

        } else if (winner == draw) {

            return tieBreaker++;

        } else if (winner == computerWin) {
            
            return computerScore++
        }

      }

        game()
        console
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        console.log("Draw Count: " + tieBreaker)

    function roundFive() {

        if (computerScore == 5) {
            
            return "COMPUTER ARE " + champ;

        } else if (playerScore == 5) {

            return "YOU ARE " + champ;
        }
    }
        console.log(roundFive())
    
})



      
 