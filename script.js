let roundWinner
let playerScore = 0
let computerScore = 0


// computerSelect function selects randomly an option for the computer
function computerSelect() {
    let randomNumber = createRandomNumber0to2()
    let computerOption = selectComputerOption(randomNumber)
    console.log(`Computer: ${computerOption}`)
    return computerOption
}

// createRandomNumber0to2 creates a random number between 0, 1 and 2
function createRandomNumber0to2() {
    return Math.floor((Math.random() * 3))
}

// Selects the computer Rock, Paper, Scissors option
function selectComputerOption(numberOption) {
    if (numberOption == 0) {
        return "Rock"
    }
    else if (numberOption == 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

// Allows the user to select an option
function playerSelect() {
    let playerSelection = prompt("Choose your option: Rock, Paper or Scissors")
    while (!checkPlayerSelection(playerSelection)) {
        playerSelection = prompt("Choose your option: Rock, Paper or Scissors")
    }
    console.log(`Player: ${playerSelection}`)
    return playerSelection
}

// Check the validity of the introduced option by the user
function checkPlayerSelection(playerSelection) {
    let playerOption = playerSelection.toLowerCase()
    if (playerOption == "rock" || playerOption == "paper" || playerOption == "scissors") {
        return true
    }
    else {
        return false
    }
}

// This function starts a round. Player is asked to choose and the results are given
function playRound() {
    let playerSelection = playerSelect()
    let computerSelection = computerSelect()
    roundWinner = checkRoundWinner(playerSelection, computerSelection)
}

// This function checks who won the round
function checkRoundWinner(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            console.log("It's a tie for this round! Rock vs Rock")
            return "Tie"
        }
        else if (computerSelection.toLowerCase() == "paper") {
            console.log("Computer wins this round! Paper beats Rock")
            return "Computer"
        }
        else {
            console.log("Player wins this round! Rock beats Scissors")
            return "Player"
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            console.log("Player wins this round! Paper beats Rock")
            return "Player"
        }
        else if (computerSelection.toLowerCase() == "paper") {
            console.log("It's a tie for this round! Paper vs Paper")
            return "Tie"
        }
        else {
            console.log("Computer wins this round! Scissors beats Paper")
            return "Computer"
        }
    }
    else {
        if (computerSelection.toLowerCase() == "rock") {
            console.log("Computer wins this round! Rock beats Scissors")
            return "Computer"
        }
        else if (computerSelection.toLowerCase() == "paper") {
            console.log("Player wins this round! Scissors beats Paper")
            return "Player"
        }
        else {
            console.log("It's a tie for this round! Scissors vs Scissors")
            return "Tie"
        }
    }
} 

// This function starts a game
function playGame() {
    let numberOfRounds = parseInt(prompt("How many rounds do you want to play?"))
    for (let i=1; i <= numberOfRounds; i++) {
        console.log(`Round ${i}`)
        playRound()
        updateGameScore(roundWinner)
        displayGameScore()
    }
    console.log(checkGameWinner())
}

// This updates the game Score
function updateGameScore(roundWinner) {
    if (roundWinner == "Player") {
        playerScore++
    }
    else if (roundWinner == "Computer") {
        computerScore++
    }
}

// This displays the game score
function displayGameScore() {
    console.log(`The game score is Computer:${computerScore} vs Player:${playerScore}`)
}

// This function checks the gameWinner
function checkGameWinner() {
    if (playerScore == computerScore) {
        return "Tied Game!!"
    }
    else if (playerScore > computerScore) {
        return "Player Wins!!"
    }
    else {
        return "Computer Wins!!"
    }
}

playGame()