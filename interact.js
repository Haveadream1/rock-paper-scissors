let playerScore = 0;
let computerScore = 0;
let playerChoice, computerChoice;
let roundSentence, roundScore;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const againButton = document.querySelector('.again-button');
const alertSection = document.querySelector('.alert-section');
const alertContainer = document.querySelector('.alert-container');
const alertText = document.querySelector('.alert-text');

const header = document.querySelector('header');
const score = document.querySelector('.score');

const footer = document.querySelector('footer');
const result = document.querySelector('.result');

const computerChoiceImage = document.querySelector('.computer-choice-img');

const array = ['rock','paper','scissors'];
function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const choice = array[randomIndex];
    return choice;
}

function setDisplay(playerChoice, computerChoice) {
    roundSentence = `You won, ${playerChoice} beat ${computerChoice}`;
    playerScore++;
    roundScore = (`${playerScore} - ${computerScore}`);
    return playerScore, computerScore;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        setDisplay(playerChoice, computerChoice);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        setDisplay(playerChoice, computerChoice);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        setDisplay(playerChoice, computerChoice);
    } else if (playerChoice === computerChoice) {
        roundSentence = ('Equality !');
        roundScore = (`${playerScore} - ${computerScore}`);
    } else {
        roundSentence = (`You lost, the ${playerChoice} beat the ${computerChoice}`);
        computerScore++;
        roundScore = (`${playerScore} - ${computerScore}`);
    }
    return playerScore, computerScore;
}

function displayChoice() {
    if (computerChoice === 'rock') {
        computerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _fisted hand sign_.jpg" alt="Fist emoji">';
    } else if (computerChoice === 'paper') {
        computerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _raised hand with fingers splayed_.jpg" alt="Palm emoji">';
    } else {
        computerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _victory hand_.jpg" alt="Peace emoji">';
    }
}

function displayInfoRound() {
    score.textContent = roundScore;
    header.appendChild(score);

    result.textContent = roundSentence;
    footer.appendChild(result);
}

function displayAlert() {
    alertSection.style.visibility= 'visible';

    alertText.textContent = textResult;
    alertContainer.appendChild(alertText);
}

againButton.addEventListener('click', () => {
    alertSection.style.visibility = 'hidden';
});

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    return playerScore, computerScore;
}

function stopGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    rock.classList.remove('choice');
    paper.classList.remove('choice');
    scissors.classList.remove('choice');

    computerChoiceImage.textContent = '?';

    if(playerScore === 3) {
        textResult = 'You Win !';
        displayAlert(textResult);
    } else if(computerScore === 3) {
        textResult = 'You Loose !';
        displayAlert(textResult);
    }
    resetScore();
}

function launchGame(playerChoice, computerChoice) {

    if ((playerScore === 3) || (computerScore === 3)) {
        stopGame();
    } else {
        playRound(playerChoice, computerChoice);
        console.log(playerChoice,computerChoice);

        displayChoice();
        displayInfoRound();
    }
    return playerChoice , computerChoice;
}

rock.addEventListener("click", () => {
    playerChoice = 'rock';
    computerChoice = getComputerChoice(array);

    rock.classList.add('choice');
    paper.classList.remove('choice');
    scissors.classList.remove('choice');

    launchGame(playerChoice, computerChoice);
})

paper.addEventListener("click", () => {
    playerChoice = 'paper';
    computerChoice = getComputerChoice(array);

    rock.classList.remove('choice');
    paper.classList.add('choice');
    scissors.classList.remove('choice');

    launchGame(playerChoice, computerChoice);
})

scissors.addEventListener("click", () => {
    playerChoice = 'scissors';
    computerChoice = getComputerChoice(array);

    rock.classList.remove('choice');
    paper.classList.remove('choice');
    scissors.classList.add('choice');

    launchGame(playerChoice, computerChoice);
})

//launch Game
//computer choice random
//player choice 
//launch first round
//display the winner
    // rock beat scissors
    // scissors beat paper
    // paper beat rock
    // if computer choice and player choice is the same = equality
// take score
// launch second round
    // take score
// launch third and last round
    // take score
    //display the winner
// propose to reload a game