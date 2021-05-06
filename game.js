import Column from "./column.js"
import ColumnWinInspector from "./column-win-inspector.js"

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
        // if (this.winnerNumber === 3) {
        //     return `${this.playerOneName} ties with ${this.playerTwoName}`

        // } else if (this.winnerNumber < 3 && this.winnerNumber > 0) {
        //     return this.winnerNumber;
        // }

        switch (this.winnerNumber) {
            case 3:
                return `${this.playerOneName} ties with ${this.playerTwoName}`;
            case 2:
                return `${this.playerTwoName} Wins!`;
            case 1:
                return `${this.playerOneName} Wins!`;
            default:
                return `${this.playerOneName} vs ${this.playerTwoName}`;
        }


    }
    checkForTie() {
        let reducer = this.columns.reduce((full, column) => {
            if (column.isFull()) {
                return full + 1;
            } else {
                return full;
            }


        }, 0);

        if (reducer === 7) {
            this.winnerNumber = 3;
        }

        // let res = this.columns.reduce(function(full, column) {
        //     if (full === false) {
        //         return full;
        //     }
        //     if (column.isFull()) {
        //         return true;
        //     }
        //     return false;


        // }, true)

        // if (res) {
        //     this.winnerNumber = 3;
        // }

    }
    checkForColumnWin() {
        if (this.winnerNumber) {
            return;
        };
        for (let i = 0; i < 7; i++) {
            let column = this.columns[i];
            const newInspector = new ColumnWinInspector(column);
            const winnerVal = newInspector.inspect();
            console.log(winnerVal);
            if (winnerVal) {
                this.winnerNumber = winnerVal;
            }
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
        this.checkForColumnWin();
    }


    getTokenAt(rowIndex, colIndex) {

        return this.columns[colIndex].getTokenAt(rowIndex);
    }

    isColumnFull(colIndex) {
        if (this.winnerNumber) {
            return true;
        }
        return this.columns[colIndex].isFull()
    }



}



// going to have column class, iterate through and push 7 different column classes with 7 identifiers