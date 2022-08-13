function getTimeRemaining(endtime) { //Open function to get the remaining time with a parameter of ‘endtime’ so that we can return the result and use it outside of this function 
    const total = Date.parse(endtime) - Date.parse(new Date()); //Calculate the end time minus the time now using the computer clock 
    const seconds = Math.floor((total / 1000) % 60); //Calculate the number of seconds using our ‘total’ variable.  
    const minutes = Math.floor((total / 1000 / 60) % 60); 
    return { //This then returns the results 
        total, 
        minutes, 
        seconds 
    }; 
}

function initializeClock(id, endtime) { //Open a function to initialise the clock 
    const clock = document.getElementById(id); //Reference the ID of the clock 
    const minutesSpan = clock.querySelector('.minutes'); //Reference the minutes class 
    const secondsSpan = clock.querySelector('.seconds'); //Reference the seconds class function 
    
    function updateClock(){  //Open the update clock function
        const t = getTimeRemaining(endtime); //Set t variable to the remaining time 
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); //Dislay minutes in the minutes <span> 
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); //Display seconds in the seconds <span> 
        if (t.total <= 0) { 
            clearInterval(timeinterval);
            showResults();
            submitButton.style.display = 'none'; 
            previousButton.style.display = 'none'; 
            nextButton.style.display = 'none'; 
            tryAgainButton.style.display = 'inline-block';
        } else { 
            tryAgainButton.style.display = 'none'; 
        }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const tryAgainButton = document.getElementById("tryAgain");
const deadline = new Date(Date.parse(new Date()) + 5 * 60 * 1000);
initializeClock('clockdiv', deadline);
tryAgainButton.addEventListener("click", resetQuiz);
    
function resetQuiz(){ 
    location.reload(); 
}