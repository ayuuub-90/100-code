let slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        slides.forEach(element => {
            element.classList.remove('active');
        });
        slide.classList.add('active');
    })


}