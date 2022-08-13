function submitForm(event){ //prevent default actions
    event.preventDefault(); 
}

function getMyData(){ 
    const question = document.getElementById("qn").value; 
    const a = document.getElementById("a").value; 
    const b = document.getElementById("b").value; 
    const c = document.getElementById("c").value; 
    const d = document.getElementById("d").value; 
    const correctAnswer = document.getElementById("ca").value; 
    const newData = { question, answers: { a, b, c, d }, correctAnswer } 
    

    if(question != "" && a != "" && b != "" && c != "" && d != "" && correctAnswer != ""){ 
        questionBank.push(newData); 
        document.getElementById('qCount').innerHTML = questionBank.length; 
        document.getElementById("addQuestion").reset(); 
    }
    return questionBank;
}

function saveMyFile(){ 
    localStorage.setItem("questionBank", JSON.stringify(questionBank)); 
    //location.replace("index0.html");
} 

const addQuestionButton = document.getElementById("submitQuestion"); //reference the submitQuestion
const saveButton = document.getElementById("saveQuestionBank");//reference the saveQuestionBank */
const questionBank = []; 
const newObject = localStorage.getItem("questionBank");//retrieve the question bank from localStorage
let dataStored = newObject && JSON.parse(newObject); //parse the JSON data to js obj */

if(dataStored != ""){
    for(i=0; i < dataStored.length; i++){ //iterate through the dataStored array and push each question into the questionBank array
        questionBank.push(dataStored[i]); 
    } 
} else { 
    for(i=0; i < data.length; i++){ 
        questionBank.push(data[i]); 
    }
}

document.getElementById('qCount').innerHTML = questionBank.length; //update the h1 that displays no of ques 
addQuestionButton.addEventListener('click', getMyData); //listen for submit form 
saveButton.addEventListener('click', saveMyFile); //listen for save question 
