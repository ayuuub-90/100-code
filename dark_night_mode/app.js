let circle = document.querySelector('.circle');
let container = document.querySelector('.container');

let mode = 'light';

circle.addEventListener('click', () => {
    if (mode === 'light') {
        circle.style.transform = `translateX(` + 100 + `%)`;
        circle.style.backgroundColor = 'black';
        container.style.backgroundColor = 'white';
        document.body.style.backgroundColor = 'black';

        mode = 'dark';
        return;
    }
    if (mode === 'dark') {
        circle.style.transform = `translateX(0)`;
        circle.style.backgroundColor = 'white';
        container.style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'white';

        mode = 'light';
        return;
    }
    
})
