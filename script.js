const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

//This is a single-class game where the display and model aren't separated.
function ticTacToe() {
    this.board = {
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
        6: " ",
        7: " ",
        8: " ",
        9: " "     
    }; //The board is your standard 3x3 tic tac toe board.

    this.player = "X"; //This variable holds the active player.

    //This method displays the board contents.
    this.display = () => {
        console.log(` ${this.board[1]} | ${this.board[2]} | ${this.board[3]} `)
        console.log(`------------`) 
        console.log(` ${this.board[4]} | ${this.board[5]} | ${this.board[6]} `) 
        console.log(`------------`) 
        console.log(` ${this.board[7]} | ${this.board[8]} | ${this.board[9]} `)
    }

    //This method checks if a position had already been taken. 
    this.positionValid = (position) => this.board[position] == " "

    //This method checks for our win conditions (8 total).
    this.isWin = (player) => {
        if((this.board[1] == player && this.board[2] == player && this.board[3] == player) || 
        (this.board[4] == player && this.board[5] == player && this.board[6] == player) ||
        (this.board[7] == player && this.board[8] == player && this.board[9] == player) ||
        (this.board[1] == player && this.board[4] == player && this.board[7] == player) ||
        (this.board[2] == player && this.board[5] == player && this.board[8] == player) ||
        (this.board[3] == player && this.board[6] == player && this.board[9] == player) ||
        (this.board[1] == player && this.board[5] == player && this.board[9] == player) ||
        (this.board[3] == player && this.board[5] == player && this.board[7] == player)) { 
                return true;
            } else {
                return false;
            }
    }

    //This method changes the active player.
    this.changePlayer = () => {
        if (this.player == "X") {
            this.player = "O";
        } else {
            this.player = "X";
        }
    }
    
    //This method is our main game loop.
    this.run = () => {
        console.log('Your turn Player ' + this.player);
        //Note that the valid position input is 1-9.
        rl.question(`Player ${this.player}, please enter a location you want to insert ${this.player} into: `, (position) => {
            if (this.positionValid(position)) {
                this.board[position] = this.player;
                this.display(); 
                if (this.isWin(this.player)) {
                    console.log(`Congratulations! Player ${this.player} wins!`)
                    return rl.close();
                }
                this.changePlayer();        
            } else {
                console.log(`Please try another position, Player ${this.player}. That one is already taken.`)
            }
            this.run();  
        });     
    } 
};

let xd = new ticTacToe;

xd.run();