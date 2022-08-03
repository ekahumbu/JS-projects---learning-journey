/*this block of code displays a greeting to the user based upon the current time.
it is an example from the book: Javascript & Jquery*/
let today = new Date(); 
let hourNow = today.getHours();
let greeting;
if(hourNow > 18){
greeting = 'Good Evening!';
} else if(hourNow > 12){
greeting = 'Good Afternoon!';
} else if(hourNow > 0){
greeting = 'Good Morning!';
} else {
greeting = 'Welcome!';
}
/*this block of code added and displayed the greeting within h3 tags.
this is my adjustment from the books'code statement:
 document.write(greeting)*/
let hd3 = document.createElement('h3');
  hd3.className = "alert";
  hd3.innerHTML = `${greeting}`;
  document.body.append(hd3);
  