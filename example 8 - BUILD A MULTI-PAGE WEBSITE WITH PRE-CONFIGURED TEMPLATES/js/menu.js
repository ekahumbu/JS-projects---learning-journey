const menu = document.querySelector(".menu");
const menu_items = document.querySelectorAll(".menu_item");
const close_icon = document.getElementById("close_icon");
const menu_icon = document.getElementById("menu_icon");

function show_menu(){
    menu.classList.add("showMenu");
    close_icon.style.display = "block";
    menu_icon.style.display = "none";
}

function hide_menu(){
    menu.classList.remove("showMenu");
    close_icon.style.display = "none";
    menu_icon.style.display = "block";
}

menu_icon.addEventListener('click', show_menu);
close_icon.addEventListener('click', hide_menu);
menu_items.forEach(
    function(menu_item) {
        menu_item.addEventListener('click', hide_menu);
    }
)