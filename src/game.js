class Game {

    constructor() {
        this.player = PLAYERS.PLAYER1;
        this.canPlay = true;
    }

    setup() {
        this.board = new Board();
    }

    draw() {
        if (frameCount % 10 === 0) {
            this.board.draw();
            this.check();
        }
    }

    play(x) {
        const row = Math.floor(x / UNIT)
        const xMin = (UNIT * row) + 10;
        const xMax = (UNIT * (row + 1)) - 10;
        if (x > xMin && x < xMax) {
            this.board.setRow(game.player, row);
            this.player = (game.player === PLAYERS.PLAYER1) ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1;
        }
    }

    check() {
        const winner = this.board.whoWon()
        if (this.board.whoWon()) {
            if (winner === PLAYERS.PLAYER1) {
                document.body.style.backgroundColor = PLAYER_COLOR.PLAYER1;
                document.getElementById('player1').style.color = 'black'
                document.querySelector('#player1 > span').innerText = 'Player 1 WON!'
                document.querySelector('#player2 > span').innerText = 'GAME OVER'
            }
            if (winner === PLAYERS.PLAYER2) {
                document.body.style.backgroundColor = PLAYER_COLOR.PLAYER2;
                document.getElementById('player2').style.color = 'black'
                document.querySelector('#player1 > span').innerText = 'GAME OVER'
                document.querySelector('#player2 > span').innerText = 'Player 2 WON!'
            }

            this.canPlay = false;
        }
    }

    gameOver() {
        this.board.board = Array(6).fill(0).map(() => Array(7).fill(0))

        document.body.style.backgroundColor = PLAYER_COLOR.DEFAULT;
        document.querySelector('#player1 > span').innerText = 'Player 1'
        document.querySelector('#player2 > span').innerText = 'Player 2'
        document.getElementById('player1').style.color = PLAYER_COLOR.PLAYER1;
        document.getElementById('player2').style.color = PLAYER_COLOR.PLAYER2;

        this.player = PLAYERS.PLAYER1;
        this.canPlay = true;
    }
}