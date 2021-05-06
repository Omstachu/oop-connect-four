export default class ColumnWinInspector {

    constructor(columnObj) {
        this.columnObj = columnObj;
    }

    inspect() {
        for (let i = 5; i >= 3; i--) {
            let row = this.columnObj.rows;
            if (row[i] === row[i - 1] === row[i - 2] === row[i - 3]) {
                return row[i];
            }
        }
        return 0;
    }
}