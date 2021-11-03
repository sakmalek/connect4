const game = new Game();

function setup() {
    createCanvas(HEIGHT, WIDTH);
    createBoard();
    game.setup();
}

function draw() {
    game.draw();
}

function createBoard() {
    document.getElementById('player1').style.color = PLAYER_COLOR.PLAYER1;
    document.getElementById('player2').style.color = PLAYER_COLOR.PLAYER2;
}

function mousePressed() {
    if (game.canPlay) {
        game.play(mouseX);
    }
}

function keyPressed() {
    if (keyCode === 32) {
        game.gameOver();
    }
}