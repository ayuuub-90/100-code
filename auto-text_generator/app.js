let text = document.querySelector('.text');
let cursor = document.querySelector('.cursor');

const words = ["good😎", "easy👽", "goodn't🙁", "bored😤", "awseome😍", "wired🤯"]
let index = 0;
let charIndex = 0;
let typeDelay = 200;
let eraseDelay = 200;
let newLetterDelay = 2000;

document.addEventListener('DOMContentLoaded',() => {
    if (words.length) {
        setInterval(type, newLetterDela);
    }

});


function type(){
    if (charIndex < words[index].length) {
        text.innerHTML += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typeDelay);
    }
    else{
        setTimeout(erase, newLetterDelay);
    }
}

function erase(){
    if (charIndex > 0) {
        text.innerHTML = words[index].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, eraseDelay);
    }
    else{
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, typeDelay + 1000);
    }

}