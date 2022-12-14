/*
  Rock Paper Scissors ðð¥
  Concepts covered in this project
    ð For loops
    ð Dom Manipulation
    ð Variables
    ð Conditionals (if else if)
    ð Template Literals
    ð Event Listeners
    ð Higher order Function (Math.random())
*/
const totalScore = { playerScore: 0, computerScore: 0 }


// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  // let index = Math.floor(Math.random() * 3)
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  // let computerChoice = rpsChoices[index]
  return computerChoice
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice, computerChoice) {
  let score
  if (playerChoice == computerChoice) {
    score = 0
  }
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }
  else {
    score = -1
  }
  return score
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

function showResult(score, playerChoice, computerChoice) {
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  if (score == 0) {
    resultDiv.innerText = `ð It's a Tie! ð¥±`
  } else if (score == 1) {
    resultDiv.innerText = ` ð You Won! ð`
  }
  else {
    resultDiv.innerText = `ð¤¢ You Lose ð¤¢`
  }

  playerScoreDiv.innerText = ` ð¦Your Score: ${totalScore['playerScore']} `
  computerScoreDiv.innerText = ` ð¤Bot Score: ${totalScore['computerScore']}`
  handsDiv.innerText = ` ð¦ ${playerChoice} vs ð¤ ${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // console.log({ playerChoice })
  const computerChoice = getComputerChoice()
  // console.log({ computerChoice })
  const score = getResult(playerChoice, computerChoice)
  if (score == 1) {
    totalScore['playerScore'] += score
  } else {
    totalScore['computerScore'] -= score
  }
  // totalScore['playerScore'] += score
  // console.log({ score })
  // console.log(totalScore)
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameButtonDiv = document.getElementById('endGameButton')
  endGameButtonDiv.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')

  playerScoreDiv.innerText = ''
  computerScoreDiv.innerText = ''
  handsDiv.innerText = ''
  resultDiv.innerText = ''
}

playGame()