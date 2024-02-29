let circles = document.querySelectorAll('.circle');
let progress = document.querySelector('.progress');

let next = document.getElementById('next');
let prev = document.getElementById('prev');

let currStep = 0;

next.addEventListener('click', nextNode);
prev.addEventListener('click', lastNode);

function nextNode() {
    if (currStep <= circles.length - 1) {
        currStep++;
        circles[currStep].classList.toggle('active');
        progress.style.width = (currStep / (circles.length - 1)) * 100 + "%";
        prev.disabled = false;
        next.disabled = false;
    }
    if (currStep == circles.length - 1) {
        next.disabled = true;
    }

}

function lastNode() {
    if (currStep >= 0) {
        circles[currStep].classList.toggle('active');
        currStep--;
        progress.style.width = (currStep / (circles.length - 1)) * 100 + "%";
        prev.disabled = false;
        next.disabled = false;
    }
    if (currStep == 0) {
        prev.disabled = true;
    }
    
}