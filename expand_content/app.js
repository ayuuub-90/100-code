let learn_more = document.getElementById('learn_more');
let paragraph = document.querySelector('.paragraph');
let spn = document.querySelector('.spn');

learn_more.addEventListener('click', () => {
    paragraph.classList.toggle('active');
    spn.classList.toggle('active');
});