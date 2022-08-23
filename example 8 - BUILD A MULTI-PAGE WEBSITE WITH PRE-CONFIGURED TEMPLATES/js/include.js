function first(){
    x+=1;
    return x;
}

function second(){
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "js/menu.js";
    document.getElementsByTagName("body")[0].appendChild(script);
}

//PURPOSE OF FUNCTIOn: Update div with any data obtained from reading specified html files//
function includeMyHTML() { 
    var z, i, el, file, xhttp; 
    z = document.getElementsByTagName("*"); 
    for (i = 0; i < z.length; i++) { 
        el = z[i]; 
        file = el.getAttribute("include-html"); 
        if (file) { 
            xhttp = new XMLHttpRequest(); 
            xhttp.onreadystatechange = function() { 
                if (this.readyState == 4) { 
                    if (this.status == 200) {el.innerHTML = this.responseText;} 
                    if (this.status == 404) {el.innerHTML = "Page not found.";} 
                    el.removeAttribute("include-html"); 
                    includeMyHTML(); 
                } 
            } 
            xhttp.open("GET", file, true); 
            xhttp.send(); 
            return; 
        } 
    } 
}; 
includeMyHTML();

