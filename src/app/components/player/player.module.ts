import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [PlayerComponent]
})
export class PlayerModule { }
