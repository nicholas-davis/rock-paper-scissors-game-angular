import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Output() winner: EventEmitter<string> = new EventEmitter<string>();

  player2Choice: string = '';
  // Define a property to store the previous game winner
  previousWinner: string = '';

  selectOption(option: string): void {
    const options = ['👊', '✋', '✂️'];
    const randomIndex = Math.floor(Math.random() * options.length);
    this.player2Choice = options[randomIndex];

    // Determine the winner
    let gameWinner = '';
    if (option === '👊' && this.player2Choice === '✂️' ||
      option === '✋' && this.player2Choice === '👊' ||
      option === '✂️' && this.player2Choice === '✋') {
      gameWinner = 'Player 1 wins!';
    } else if (option === this.player2Choice) {
      gameWinner = 'It\'s a tie!';
    } else {
      gameWinner = 'Player 2 wins!';
    }

    // Check if the current game winner matches the previous game winner
    if (gameWinner === this.previousWinner) {
      // Update message based on the previous winner
      if (gameWinner === 'It\'s a tie!') {
        gameWinner = 'It\'s still a tie!';
      } else {
        gameWinner = gameWinner.replace('wins', 'wins again');
      }
    }

    // Update the previous winner
    this.previousWinner = gameWinner;

    // Emit the winner
    this.winner.emit(gameWinner);
  }

}
