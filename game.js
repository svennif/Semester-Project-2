var map = {
    col: 5,
    row: 6,
    tsize: 30,
    tiles: [
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
    ]
};
canvas = document.getElementById("canvas");

if(canvas.getContext) {
    var drawRectangle = canvas.getContext("2d");
        drawRectangle.fillRect(50, 50, 50, 50);
} else {
    alert('drawing unavailable');
}

