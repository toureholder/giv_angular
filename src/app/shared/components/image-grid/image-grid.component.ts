import { Component, Input } from '@angular/core';
import { ImageData } from '../image-div/image-div.component';

export interface ImgageGridItem {
  image: ImageData;
  title?: string;
}

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent {
  @Input() images?: ImgageGridItem[];
}
