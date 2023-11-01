export default class Model {
    constructor() {
        this.currentPlayer = "X";
        this.winner = null;
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        this.xScore = 0;
        this.oScore = 0;
    }


    
}