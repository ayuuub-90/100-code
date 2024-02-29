let timer = document.querySelector('.timer');

setInterval(() => {
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    timer.innerHTML = hour + ":" + minute + ":" + second;
}, 1000);
