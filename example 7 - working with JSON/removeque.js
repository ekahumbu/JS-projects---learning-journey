function submitRemoveForm(event){ 
    event.preventDefault(); 
} 

function showQuestions(){ 
    const questionHolder = document.getElementById('showQstn'); 
    questionToShow = []; 
    const myQuestions = []; 
        for(i=0; i < data.length; i++){
            myQuestions.push(data[i]); 
        } 
    const newObject = localStorage.getItem("questionBank"); 
    let dataStored = JSON.parse(newObject); 
    if(dataStored != ""){ 
        for(i=0; i < dataStored.length; i++){ 
            myQuestions.push(dataStored[i]); 
            } 
        } else { 
            for(i=0; i < data.length; i++){ 
                myQuestions.push(data[i]); 
            } 
        }

    if(myQuestions != ""){ 
        for(i=0; i < myQuestions.length; i++){ 
            questionToShow.push( 
                `<label> 
                <input type="checkbox" name="${i}" value="${i}" class="chk_butn"> ${i+1}. ${myQuestions[i].question.substring(0, 32)}
                ... </label><br>` 
                ); 
        } 
    } else { 
        for(i=0; i < data.length; i++){ 
            questionToShow.push( 
                `<label> 
                <input type="checkbox" name="${i}" value="${i}" class="chk_butn"> ${i+1}. ${data[i].question.substring(0, 32)}
                ... </label><br>` 
                ); 
            } 
    } 
    questionHolder.innerHTML = questionToShow; 
    return questionToShow; 
}

function removeQuestion(){ 
    const questionHolder = document.getElementById('showQstn'); 
    questionsToRemove = []; 
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked') 
    for (var c = 0; c < checkboxes.length; c++) { 
        questionToShow[checkboxes[c].value] = "";
        questionBank.splice(checkboxes[c].value,1); 
    } questionHolder.innerHTML = questionToShow; 
} 

function saveMyFile(){ 
    localStorage.setItem("questionBank", JSON.stringify(questionBank)); 
    location.replace("index0.html");
} 

showQuestions(); 
const questionBank = []; 
const newObject = localStorage.getItem("questionBank");//retrieve the question bank from localStorage
let dataStored = newObject && JSON.parse(newObject); //parse the JSON data to js obj */
if(dataStored != ""){ 
    for(i=0; i < dataStored.length; i++){ 
        questionBank.push(dataStored[i]); 
    } 
} else { 
    for(i=0; i < data.length; i++){ 
        questionBank.push(data[i]); 
    } 
} 
const removeButton = document.getElementById("removeQuestions"); 
const saveButton = document.getElementById("saveQuestions"); 
removeButton.addEventListener("click", removeQuestion); 
saveButton.addEventListener("click", saveMyFile);