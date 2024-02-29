let paragraph = document.getElementById('paragraph');
let btn = document.getElementById('btn');

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function rand(tab){
    let hexa = '#';
    for (let i = 0; i < 6; i++) {
        hexa += tab[Math.floor(Math.random()*tab.length)];
    }
    return hexa;
}


btn.addEventListener('click', () =>{
    let color1 = rand(num);
    let color2 = rand(num);
    document.body.style.background = `linear-gradient(${color1}, ${color2})`;
    paragraph.innerHTML = color1 + ' ' + color2;

});