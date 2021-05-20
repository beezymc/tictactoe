const e = require("cors");
const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

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
    };

    this.player = "X";

    this.display = () => {
        console.log(` ${this.board[1]} | ${this.board[2]} | ${this.board[3]} `)
        console.log(`------------`) 
        console.log(` ${this.board[4]} | ${this.board[5]} | ${this.board[6]} `) 
        console.log(`------------`) 
        console.log(` ${this.board[7]} | ${this.board[8]} | ${this.board[9]} `)
    }

    this.positionValid = (position) => this.board[position] == " "

    this.winCase = (player) => {
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

    this.changePlayer = () => {
        if (this.player == "X") {
            this.player = "O";
        } else {
            this.player = "X";
        }
    }
    
    this.run = () => {
        console.log('Your turn Player ' + this.player);
        rl.question(`Player ${this.player}, please enter a location you want to insert ${this.player} into: `, (position) => {
            if (this.positionValid(position)) {
                this.board[position] = this.player;
                this.display(); 
                if (this.winCase(this.player)) {
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