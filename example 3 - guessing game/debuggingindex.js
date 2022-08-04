//this is a debugging exercise for the guessing game. Dealt with syntax and logic error//

 /* let randomNumber = Math.floor(Math.random()) + 1; --- logic error. noticed when testing game, 
 the random number is always set to 1. this means the random number instance is set wrong. we need to multiply the 
 rounded random number by 100 for it to pick numbers btw 1 to 100*/
 let randomNumber = Math.floor(Math.random()*100) + 1;

 const guesses = document.querySelector('.guesses');
 const lastResult = document.querySelector('.lastResult');
 /*const lowOrHi = document.querySelector('lowOrHi');---syntax error, with no .before lowOrHigh, 
 it does not point to element thus a null return when variable is called. correction done below*/
 const lowOrHi = document.querySelector('.lowOrHi');
 const guessSubmit = document.querySelector('.guessSubmit');
 const guessField = document.querySelector('.guessField');

 let guessCount = 1;
 let resetButton;

 function checkGuess() {

   const userGuess = Number(guessField.value);
   if(guessCount === 1) {
     guesses.textContent = 'Previous guesses: ';
   }
   guesses.textContent += userGuess + ' ';

   if(userGuess === randomNumber) {
     lastResult.textContent = 'Congratulations! You got it right!';
     lastResult.style.backgroundColor = 'green';
     lowOrHi.textContent = '';
     setGameOver();
   } else if(guessCount === 10) {
     lastResult.textContent = '!!!GAME OVER!!!';
     setGameOver();
   } else {
     lastResult.textContent = 'Wrong!';
     lastResult.style.backgroundColor = 'red';
     if(userGuess < randomNumber) {
       lowOrHi.textContent = 'Last guess was too low!';
     } else if(userGuess > randomNumber) {
       lowOrHi.textContent = 'Last guess was too high!';
     }
   }

   guessCount++;
   guessField.value = '';
   guessField.focus();
 }
 /*guessSubmit.addeventListener('click', checkGuess);*//*practising on errors, 
 this line gave a Type error,which usually indicates a typing error. the issue 
 is the method addEventListner is not in JS camel. I have corrected it below*/
 guessSubmit.addEventListener('click', checkGuess);

 function setGameOver() {
     guessField.disabled = true;
     guessSubmit.disabled = true;
     resetButton = document.createElement('button');
     resetButton.textContent = 'Start new game';
     document.body.appendChild(resetButton);
     /*resetButton.addeventListener('click', resetGame); ---syntax error, same as line 88.*/
   resetButton.addEventListener('click', resetGame);
 }

 function resetGame() {
     guessCount = 1;

   const resetParas = document.querySelectorAll('.resultParas p');
   for (const resetPara of resetParas) {
     resetPara.textContent = '';
   }
     resetButton.parentNode.removeChild(resetButton);

     guessField.disabled = false;
     guessSubmit.disabled = false;
     guessField.value = '';
     guessField.focus();

     lastResult.style.backgroundColor = 'white';
/* let randomNumber = Math.floor(Math.random()) + 1; --- logic error. noticed when testing game, 
the random number is always set to 1. this means the random number instance is set wrong. we need to multiply the 
rounded random number by 100 for it to pick numbers btw 1 to 100*/
     randomNumber = Math.floor(Math.random()*100) + 1;
 }