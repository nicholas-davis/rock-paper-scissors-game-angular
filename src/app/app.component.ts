import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gameWinner: string = '';

  onWinner(winner: string): void {
    this.gameWinner = winner;
  }
}
