class Board {

    constructor() {
        this.board = Array(6).fill(0).map(() => Array(7).fill(0));
    }

    draw() {
        for (let col = 0; col < this.board.length; col++) {
            for (let row = 0; row < this.board[0].length; row++) {
                if (this.board[col][row] === PLAYERS.PLAYER1) {
                    fill(PLAYER_COLOR.PLAYER1);
                } else if (this.board[col][row] === PLAYERS.PLAYER2) {
                    fill(PLAYER_COLOR.PLAYER2);
                } else {
                    fill(PLAYER_COLOR.DEFAULT);
                }
                strokeWeight(3)
                circle(row * UNIT + UNIT / 2, col * UNIT + UNIT / 2, UNIT - 20);
            }
        }
    }

    setRow(player, row) {
        for (let col = this.board.length - 1; col >= 0; col--) {
            if (this.board[col][row] === 0) {
                this.board[col][row] = player;
                break;
            }
        }
    }


    whoWon() {
        return this.verticalCheck() || this.horizontalCheck() || this.diagonalCheck();
    }

    verticalCheck() {
        for (let i = 0; i < this.board.length - 3; i++) {
            for (let ii = 0; ii < this.board[0].length; ii++) {

                if (this.board[i][ii] !== 0 && this.board[i][ii] === this.board[i + 1][ii] &&
                    this.board[i + 1][ii] === this.board[i + 2][ii] &&
                    this.board[i + 2][ii] === this.board[i + 3][ii]) {
                    return this.board[i][ii]
                }
            }
        }
        return false;
    }

    horizontalCheck() {
        for (let i = 0; i < this.board.length; i++) {
            for (let ii = 0; ii < this.board[0].length - 3; ii++) {

                if (this.board[i][ii] !== 0 && this.board[i][ii] === this.board[i][ii + 1] &&
                    this.board[i][ii + 1] === this.board[i][ii + 2] &&
                    this.board[i][ii + 2] === this.board[i][ii + 3]) {
                    return this.board[i][ii]
                }
            }
        }
        return false;
    }

    diagonalCheck() {
        const colLength = this.board.length;
        const rowLength = this.board[0].length;
        for (let i = 0; i < this.board.length - 3; i++) {
            for (let ii = 0; ii < this.board[0].length - 3; ii++) {

                if (this.board[i][ii] !== 0 && this.board[i][ii] === this.board[i + 1][ii + 1] &&
                    this.board[i + 1][ii + 1] === this.board[i + 2][ii + 2] &&
                    this.board[i + 2][ii + 2] === this.board[i + 3][ii + 3]) {
                    return this.board[i][ii]
                }
            }
        }
        for (let i = 0; i < this.board.length - 3; i++) {
            for (let ii = 3; ii < this.board[0].length; ii++) {

                if (this.board[i][ii] !== 0 && this.board[i][ii] === this.board[i + 1][ii - 1] &&
                    this.board[i + 1][ii - 1] === this.board[i + 2][ii - 2] &&
                    this.board[i + 2][ii - 2] === this.board[i + 3][ii - 3]) {
                    return this.board[i][ii]
                }
            }
        }
        return false;
    }
}