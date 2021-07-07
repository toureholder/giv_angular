import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomProductGridComponent } from './random-product-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RandomProductGridComponent],
  imports: [CommonModule, SharedModule],
  exports: [RandomProductGridComponent],
})
export class RandomProductGridModule {}
