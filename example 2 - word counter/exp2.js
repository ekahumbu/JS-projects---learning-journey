//DOM - this will update once the user clicks submit
let count = document.getElementById('count');
let input = document.getElementById('input');
let submit = document.getElementById('submit');
let total = document.getElementById('total')



// add functionality to input and button//
function countLetters(word){
    word = input.value.split("")
    let price = 50;
    let letterCount = 0;

    for(let i = 0; i<word.length; i++){
        if(word[i] !== ""){
            letterCount++;
        }
    }
    count.innerText = letterCount;
}

function getTotal(letterCount){
    let price=50;
    if(letterCount == 0){
        total = 0;
    }
    submit.innerText = +letterCount*price;
}

// click submit button to submit
input.addEventListener('keyup',function(e){
    countLetters(e.target.value)
});
total.addEventListener('click', function(e){
    getTotal(e.target.value)
});
