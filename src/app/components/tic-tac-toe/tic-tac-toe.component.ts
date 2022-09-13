import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  squares: any = []
  nextIsx = true
  winner = ''
  counter = 0
  draw = ''
  playerInLead:string = 'The game has not started yet.'
  newPage = true
  buttonName = 'Start New Game'
  newGameStyle = {
    'background-image':
      'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)'
  }
  winnerStyle = {}
  displayLeadPlayer = false
  winnerBox = {}
  constructor () {}
  playerX:number=0;
  playerO:number=0
  ngOnInit (): void {}
  newGame () {
    this.squares = Array(9).fill(null)
    this.winner = ''
    this.draw = ''
    this.counter = 0
    this.newPage = false
    this.displayLeadPlayer = false
    // this.playerInLead = 'This game has not started yet';
    this.buttonName = 'Restart Game'
    this.newGameStyle = {
      'background-image': 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)'
    }
    this.winnerBox = {
      'animation': 'backInDown',
      'animation-duration': '2s',
    }
  }
  get player () {
    return this.nextIsx ? 'X' : 'O'
  }
  makeMove (index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.player)
      this.nextIsx = !this.nextIsx
      this.counter++
      if (this.nextIsx) {
        this.winnerStyle = {
          'color': 'rgb(145, 105, 185)'
        }
      }
      else{
        this.winnerStyle={
          color:'rgb(80, 105, 185)'
        }
      }
    }
    this.winner = this.calculateWinner()
    if(this.winner == 'X'){
      this.playerX++;
    }
    else if(this.winner == 'O'){
      this.playerO++;
    }
    if (!this.winner && this.counter == 9) {
      this.draw = 'yes'
    }
  }
  getThePlayerInLead () {
    if(this.playerX>this.playerO){
      this.playerInLead = 'X is in lead'
    }
    else if(this.playerO>this.playerX){
      this.playerInLead='O is in lead'
    }
    else if(this.playerO==this.playerX && this.playerO==0 ){
      this.playerInLead='The game has not started yet'
    }
    else{
      this.playerInLead='The score is same'
    }
   
    this.displayLeadPlayer = true
  }
  calculateWinner () {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index]
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a]
      }
    }
    return null
  }
}
