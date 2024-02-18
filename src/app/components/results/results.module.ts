import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [ResultsComponent]
})
export class ResultsModule { }
