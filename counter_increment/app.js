let increment = document.querySelector('.increment');
let save = document.querySelector('.save');
let field = document.querySelector('.field');
let saved = document.querySelector('.saved');

let index = 0;

increment.addEventListener('click', () => {
    field.innerHTML = ++index;
});

// function up(){
//     field.innerHTML = ++index;
// }

save.addEventListener('click', () => {
    if (saved.innerHTML == "") {
        saved.innerHTML = field.innerHTML;
    }
    else {
        saved.innerHTML += ", " + field.innerHTML;
    }
    index = 0;
    field.innerHTML = index;
});