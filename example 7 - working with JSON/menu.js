function htmlMenu(){ 
    const menu = document.getElementById('menu'); //reference the element with the ID of menu
    const menudismiss = document.getElementById('menudismiss'); //reference the element with the ID menudismiss
     menu.innerHTML = '<h1>&#9776;</h1>'; //set the menu to a burger symbol
     menu.addEventListener("click", displayMenu); 
     menudismiss.addEventListener("click", dismissMenu); 
    
} 

function displayMenu(){ 
    const menubox = document.getElementById('menubox'); 
    if(menubox.style.display == "block"){ 
        menubox.style.display = "none"; 
    } else { 
        menubox.style.display = "block"; 
    } 
} 

function dismissMenu(){ 
    const menubox = document.getElementById('menubox'); 
    menubox.style.display = "none"; 
} 
htmlMenu();