let emoji = document.querySelector(".emoji");

const emojis = ["😀","😁","😂","🤣","😃","😄","😎","🤬","🥶","🤢","🤡","👿","💩","👺","👽","🦊","🧠","💜"];

function rand(){
    return emojis[Math.floor(Math.random() * emojis.length)];
}
// console.log(rand());


emoji.addEventListener('mouseover', () => {
    let newEmoji = rand();
    emoji.innerText = newEmoji;
});
