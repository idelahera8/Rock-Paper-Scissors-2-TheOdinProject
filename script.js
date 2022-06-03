// computerSelect function selects randomly an option for the computer
function computerSelect() {
    let randomNumber = createRandomNumber0to2()
    let computerOption = selectComputerOption(randomNumber)
    console.log(computerOption)
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
    console.log(playerSelection)
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
    console.log(checkWinner(playerSelection, computerSelection))
}

// This function checks who won
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            return "It's a tie! Rock vs Rock"
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "Computer wins! Paper beats Rock"
        }
        else {
            return "Player wins! Rock beats Scissors"
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            return "Player wins! Paper beats Rock"
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "It's a tie! Paper vs Paper"
        }
        else {
            return "Computer wins! Scissors beats Paper"
        }
    }
    else {
        if (computerSelection.toLowerCase() == "rock") {
            return "Computer wins! Rock beats Scissors"
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "Player wins! Scissors beats Paper"
        }
        else {
            return "It's a tie! Scissors vs Scissors"
        }
    }
} 

playRound()