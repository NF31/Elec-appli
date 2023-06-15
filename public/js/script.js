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
const body = document.querySelector('body');
const p = document.querySelector('pareil');
const toggle = document.getElementById('toggle');
toggle.addEventListener ('click', () =>{
    body.classList.toggle('active')
    p.classList.toggle('active')
    toggle.classList.toggle('active')
}) 