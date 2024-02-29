let email = document.querySelector('.email');
let check = document.querySelector('.fa-circle-check');
let xmark = document.querySelector('.fa-circle-xmark');


function isValid(value){
    if(value.includes("@gmail.")){
        check.style.display = 'block';
        xmark.style.display = 'none';
    }
    else {
        check.style.display = 'none';
        xmark.style.display = 'block';
    }
    if (value == ''){
        check.style.display = 'none';
        xmark.style.display = 'none';
    }
}