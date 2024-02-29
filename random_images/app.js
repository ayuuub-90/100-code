let container = document.querySelector('.container');
const url = "https://picsum.photos/id/" ;

for (let i = 0; i < 52; i++) {
    let img = document.createElement('img');
    img.src = url +random()+ "/400/400"
    container.appendChild(img);
    
}

function random(){
    return Math.floor(Math.random() * 100);
}

