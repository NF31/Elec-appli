

let icon = document.getElementById("icon");
let p = document.querySelector('.pareil');
let body = document.querySelector('body');
icon.onclick = function() {
   body.classList.toggle('dark')
   p.classList.toggle('dark')
}