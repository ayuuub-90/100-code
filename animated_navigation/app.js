let button = document.getElementById('toggle');
let navigation = document.getElementById('list');

button.addEventListener('click', () => {
    navigation.classList.toggle('active');
});