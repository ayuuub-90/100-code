let play_icon = document.querySelector('.play_icon');
let video_container = document.querySelector('.video_container');
let close_btn = document.querySelector('.close_btn');
let trailer = document.querySelector('.trailer');


play_icon.addEventListener('click', () => {
    video_container.classList.remove('active');
    trailer.play();
});

close_btn.addEventListener('click', () => {
    video_container.classList.add('active');
    trailer.pause();
    trailer.load();
})