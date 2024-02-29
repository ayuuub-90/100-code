let spans = document.querySelectorAll("span");
let heads = document.querySelectorAll(".head");
let subs = document.querySelectorAll(".sub");

spans.forEach(element => {
    element.addEventListener('click', () => {
        heads.forEach(head => {
            head.classList.add('active');
        })

        subs.forEach(sub => {
            sub.classList.add('active');
        })

        spans.forEach(elem => {
            elem.classList.remove('hover');
        });
        element.classList.add('hover');
        document.querySelectorAll(`.${element.textContent}`).forEach(x => {
            x.classList.remove('active');
        })
    })
});

