let scrol_bar = document.querySelector(".scrol_bar");
let scrol_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

function scrolling(){
    let scrol_top = document.documentElement.scrollTop;
    let scrolled = (scrol_top/scrol_height )* 100 + '%';

    scrol_bar.style.width = scrolled; 
};

addEventListener("scroll", scrolling);
