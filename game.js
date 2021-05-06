import Column from "./column.js"

export default class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.turn = 1;
        this.winnerNumber = 0;

        this.columns = [];
        for (let i = 0; i < 7; i++) {
             this.columns.push(new Column());

        }

    }

    getName() {
        return `${this.playerOneName} vs ${this.playerTwoName}`
    }
    checkForTie() {
    let reducer = this.columns.reduce((full, column) => {

            if (column.isFull()) {
                return full + 1;
            } else {
                return full;
            }


    });

        if (reducer === 6) {
            this.winnerNumber = 3;
        }

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

        this.checkForTie()
    }


    getTokenAt(rowIndex, colIndex) {

        return this.columns[colIndex].getTokenAt(rowIndex);
    }

    isColumnFull(colIndex) {
        return this.columns[colIndex].isFull()
    }

}



// going to have column class, iterate through and push 7 different column classes with 7 identifiers
