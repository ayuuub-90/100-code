let cursor = document.querySelector(".cursor");

addEventListener("mousemove", function(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})