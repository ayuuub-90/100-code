let input = document.querySelector('.input');

let ABC = document.querySelector('.ABC');
let abc = document.querySelector('.abc');
let Abc = document.querySelector('.Abc');
let bold = document.querySelector('.bold');
let italic = document.querySelector('.italic');
let underline = document.querySelector('.underline');

let result = document.querySelector('.result');



ABC.onclick = function () {
    result.innerHTML = input.value.toUpperCase();
}

abc.onclick = function () {
    result.innerHTML = input.value.toLowerCase();
}

Abc.onclick = function () {
    result.innerHTML = input.value.charAt(0).toUpperCase() + input.value.slice(1);
}

bold.onclick = function () {
    result.innerHTML = `
        <h3><b>${input.value}</b></h3>
    `
}

italic.onclick = function () {
    result.innerHTML = `
        <h3><i>${input.value}</i></h3>
    `
}

underline.onclick = function () {
    result.innerHTML = `
        <h3><u>${input.value}</u></h3>
    `
}