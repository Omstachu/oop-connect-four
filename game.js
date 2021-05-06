import Column from "./column.js"

export default class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.turn = 1;
        this.column = new Column();
        this.columns = [];


        this.columns = [];
        for (let i = 0; i < 7; i++) {
            this.columns.push(this.column);

        }

    }

    getName() {
        return `${this.playerOneName} vs ${this.playerTwoName}`
    }

    playInColumn(colIndex) {
        // ? adding a click listener here broke the code because of ??
        // ? external click event was ran asynchronously with internal event;
       
        this.columns[colIndex].add(this.turn);

        if (this.turn === 1) {
            this.turn = 2;
        } else {
            this.turn = 1
        }
    }

    getTokenAt(rowIndex, colIndex) {
        return this.columns[colIndex].getTokenAt(rowIndex);
    }


}



// going to have column class, iterate through and push 7 different column classes with 7 identifiers
