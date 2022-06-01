// computerPlay function selects randomly an option for the computer
function computerPlay() {
    let randomNumber = createRandomNumber0to2()
    let computerOption = selectComputerOption(randomNumber)
    console.log(computerOption)
}

// createRandomNumber0to2 creates a random number between 0, 1 and 2
function createRandomNumber0to2() {
    return Math.floor((Math.random() * 3))
}

// Selects the computer Rock, Paper, Scissor option
function selectComputerOption(numberOption) {
    if (numberOption == 0) {
        return "Rock"
    }
    else if (numberOption == 1) {
        return "Paper"
    }
    else {
        return "Scissor"
    }
}

computerPlay()