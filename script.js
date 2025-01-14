var nav = document.querySelector('nav');
var bars = document.getElementById('bars');
var x = document.getElementById('x');
var i = 0;

bars.addEventListener("click", function() {
    if (i == 0) {
        nav.style.transform = "translateX(390px)";
        nav.style.transition = "0.5s ease-in-out";
        i = 1;
    } else {
        nav.style.transform = "translateX(-390px)";
        nav.style.transition = "1s ease-in-out";
        i = 0;
    }
})

x.addEventListener("click", function() {
    nav.style.transform = "translateX(-390px)";
    nav.style.transition = "1s ease-in-out";
    i = 0;
})