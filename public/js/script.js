

let icon = document.getElementById("icon");
let p = document.querySelector('a')
let body = document.querySelector('body')
icon.onclick = function() {
   body.classList.toggle('dark')
   p.classList.toggle('dark')
}