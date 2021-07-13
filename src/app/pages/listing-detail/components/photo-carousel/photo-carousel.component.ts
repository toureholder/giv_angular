import { Component, Input } from '@angular/core';
import { ImageData } from '@shared/components/image-div/image-div.component';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss'],
})
export class PhotoCarouselComponent {
  @Input() imageDataList?: ImageData[];
}
