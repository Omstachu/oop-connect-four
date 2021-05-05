export default class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.turn = 1;
    }
    getName() {
        return `${this.playerOneName} vs ${this.playerTwoName}`
    }

    playInColumn() {
        // ? adding a click listener here broke the code because of ??
        // ? external click event was ran asynchronously with internal event;
        if (this.turn === 1) {
            this.turn = 2;
        } else {
            this.turn = 1
        }
    }


}