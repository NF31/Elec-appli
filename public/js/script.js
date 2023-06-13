let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

const menu = document.querySelector(".menu-hamburger");
const nav = document.querySelector (".nav-links");

menu.addEventListener('click', () =>{
    nav.classList.toggle('mobile-menu')
})