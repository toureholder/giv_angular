import { NgModule } from '@angular/core';
import { ImageDivComponent } from './image-div.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImageDivComponent],
  imports: [CommonModule, RouterModule],
  exports: [ImageDivComponent],
})
export class ImageDivModule {}
