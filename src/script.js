


document.addEventListener("DOMContentLoaded", function () {
    const cursorRectangle = document.getElementById("cursorRectangle");

    document.addEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        
        cursorRectangle.style.left = x - (cursorRectangle.clientWidth / 2) + "px";
        cursorRectangle.style.top = y - (cursorRectangle.clientHeight / 2 ) + "px";
    });
});