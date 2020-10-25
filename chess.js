window.addEventListener('load', function () {
    drawBoard(8, 8, 50);
})

function drawBoard(width, length, tileSize) {
    let color = 'black';

    for (let y = 0; y < length; y++) {

        for (let x = 0; x < width; x++) {
            drawTile(x, y, color, tileSize);
            color = swapColor(color);
        }

        color = swapColor(color);
    }
}

function swapColor(color) {
    if (color === 'white') {
        return 'black';
    }

    return 'white';
}

function drawTile(x, y, color, size) {
    let tile = document.createElement('div');

    // set tile style
    tile.style.position = 'absolute';
    tile.style.left = (size * x) + 'px';
    tile.style.top = (size * y) + 'px';
    tile.style.backgroundColor = color;
    tile.style.width = size;
    tile.style.height = size;

    document.getElementById('chess-board').append(tile);
}
