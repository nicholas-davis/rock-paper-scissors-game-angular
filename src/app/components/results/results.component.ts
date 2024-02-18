import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnChanges {
  @Input() winner: string = '';
  isLoading: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['winner'] && !changes['winner'].firstChange) {
      this.isLoading = true;
      this.simulateAsyncOperation().then(() => {
        this.isLoading = false;
      }).catch(error => {
        console.error('Error occurred while loading data:', error);
        this.isLoading = false;
      });
    }
  }

  simulateAsyncOperation(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simulating completion of async operation after 2 seconds
        resolve();
      }, 2000);
    });
  }
}
