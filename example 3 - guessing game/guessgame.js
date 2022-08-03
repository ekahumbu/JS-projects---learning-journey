let randomNumber = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess(){
    const userGuess = Number(guessField.value);//defines userguess which takes in the user input. used number constructor to ensure input is a number//
    if(guessCount === 1){ //checking of user input begins//
        guesses.textContent = 'Previous guesses: '; //this displays on page the user guesses//
    }// note the use of method .textContent - used to display its value on page//
    guesses.textContent += userGuess + ' ';// this appends the user input(guesses) with space delimeter, making a list//
    
    if(userGuess === randomNumber){//this is the condition setting for when the user correctly guesses the number which is set by the formula at the top//
        lastResult.textContent = `Hooray!! You guessed it right in ${guessCount} guesses.`;// what is displayed on page//
        lastResult.style.backgroundColor = 'pink';//this adds a css style to the message displayed//
        lowOrHi.textContent = ' ';// this clears the contents of the lowOrHigh variable - if any because the user could guess right at first try//
        setGameOver();//hoisted function
        } else if(guessCount === 10){//this is the condition setting for the wrong guesses//
        lastResult.textContent = 'Oops, GAME OVER!!!';
        lowOrHi.textContent = ' ';
        setGameOver();
        } else {
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'purple';
            if(userGuess < randomNumber){//this is the condition setting that gives the user a chance to continue guessing//
            lowOrHi.textContent = 'Your last guess was too low!';
            } else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Your last guess was too high!';
            }
     }

guessCount++;//keeps counting the no of tries/guesses (by one, which is what ++ does) - remember there is a limit of 10//
guessField.value = ' '; //this clears the guessing area//
guessField.focus();//focuses the area ready for new guess//
}

guessSubmit.addEventListener('click', checkGuess);//adding event listner to submit guess button - take note of method .addEventListner('event', eventhandler)//
//at this point the game works but functionality not complete because the undefined hoisted function setGameOver()//
function setGameOver(){
    guessField.disabled = true; //they make the user text area and submit button inactive - in line with game restrictions predefined//
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');//create a new button to HTML that allows the user to start the game afresh//
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);//call function resetGmae when the reset button set up above is clicked)
}

function resetGame(){//this block of code is full resets of all that has happened to a new clean form ready for new user guesses//
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');//empties all the text using loop//
    for(const resetPara of resetParas){
        resetPara.textContent = ' ';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = ' ';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random*100)+1;
}