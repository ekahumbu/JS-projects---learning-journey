/*got inspired by the guessing game - in the mdn web docs tutorial as i was doing my basics refresher- 
to recreate my word count JS script. this word counter does not count blanks in between words (i am a good buisnessman :))
but it does count characters */
const wordCount = document.querySelector('.wordCount');
const wordCost = document.querySelector('.wordCost');
const wordSubmit = document.querySelector('.wordSubmit');
const getWord = document.querySelector('.getWord');
//declaring the variables i will need
let letterCount = 0;
let price = 50;
let total;// this will hold the cost per letter typed//
let resetButton;//look below for its details//
getWord.focus();//this sets the cursor ready for typing every time the page loads//

/* add functionality - the mistakes i made taught me it is important to be mindful of which elements i am assigning functionality
as you will see in my comments below, in line 21 and 23 i was stuck because i had previously used wordSubmit*/
function countLetters(){
   const userWord = getWord.value.split("");// this splits the user word to allow for easier count//

    for(let i = 0; i<userWord.length; i++){//this loop counts each letter in the word typed//
        if(userWord[i] !== " "){
            letterCount++;// works till here then jumps to the next condition//
            wordCount.textContent = `Your word has ${letterCount} letters`;
        } else{
            wordCount.textContent = 'Blanks are not allowed!';// it is also ignoring this// i realized that i was not tagging the correct HTML element, wordCount//
        }
        }
    
    if(letterCount>0){ //this conditions checks for letter count and multiplies each word by the variable price//
        total = letterCount*price;
        wordCost.textContent = `The cost for your sign will be Kshs ${total}.`;
    } else
    {wordCost.textContent = 'The cost for your sign will be 0';}
    cleanUp();

    getWord.value = ' ';
    getWord.focus();
}

// click submit button to submit
wordSubmit.addEventListener('click', countLetters);

function cleanUp(){ // just as the name suggests, this functions makes sure user can't add a letter after submission//
    getWord.disabled = true;
    wordSubmit.disabled = true;
    resetButton = document.createElement('button');// and cleans up the previously stored data by giving user the option to change it//
    resetButton.textContent = 'New Word';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetform);
}

function resetform(){ //this function resets the whole form by taking lettercount back to 0//
    letterCount = 0;

    const resetParam = document.querySelectorAll('.resultParam p');
    for(const resetPara of resetParam){//deleting all the data stored in the tagged elements
        resetPara.textContent = ' ';
    }
    resetButton.parentNode.removeChild(resetButton);

    getWord.disabled = false;
    wordSubmit.disabled = false;// makes the form buttons and inputs active again
    getWord.value = ' ';
    getWord.focus();
}
