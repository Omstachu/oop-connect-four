export default class Column {
    constructor() {
        this.rows = [];
        for (let i = 0; i < 6; i++) {
            this.rows.push(null);
        }
    }

    add(playerNum) {
        // * take playerNum and store it in bottom most row;

        for (let i = this.rows.length - 1; i >= 0; i--) {
            if (this.rows[i] === null) {
                this.rows[i] = playerNum;
                return;
            }
        }

    }

    getTokenAt(rowIndex) {
        return this.rows[rowIndex];
    }
}

console.log("eg");