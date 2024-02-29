let selector = document.querySelector('.selector');
let list = document.querySelector('.list');
let items = document.querySelectorAll('.item');
let field = document.getElementsByClassName('field');
let icon = document.getElementsByClassName('icon');
let text = document.getElementById('text');


selector.addEventListener('click', () => {
    list.classList.toggle('hidden');
});

for (option of items) {
    option.onclick = function () {
        selector.innerHTML = this.textContent;
        // list.classList.toggle('hidden');
    }
}




// console.log('hello world');