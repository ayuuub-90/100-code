let gray_heart = document.querySelector('.gray_heart');
let red_heart = document.querySelector('.red_heart');

gray_heart.addEventListener("click", function clock(){
    red_heart.style.display = "block"; 
});

red_heart.addEventListener("click", function clocked(){
    red_heart.style.display = "none"; 
});

