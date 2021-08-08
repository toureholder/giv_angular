import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGridComponent } from './image-grid.component';
import { ImageDivModule } from '../image-div/image-div.module';
import { ImageGridLoadingStateComponent } from './image-grid-loading-state/image-grid-loading-state.component';

@NgModule({
  declarations: [ImageGridComponent, ImageGridLoadingStateComponent],
  imports: [CommonModule, ImageDivModule],
  exports: [ImageGridComponent],
})
export class ImageGridModule {}
