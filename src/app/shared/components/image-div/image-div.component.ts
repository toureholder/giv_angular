import { Component, OnInit, Input } from '@angular/core';
import { isAbsoulteUri } from '@shared/utils/utils';

export interface ImageData {
  imageUrl?: string;
  link?: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-image-div',
  templateUrl: './image-div.component.html',
  styleUrls: ['./image-div.component.scss'],
})
export class ImageDivComponent implements OnInit {
  @Input() imageData?: ImageData;
  hasAbsoluteLink?: boolean;

  ngOnInit(): void {
    const link = this.imageData?.link;
    this.hasAbsoluteLink = !!link && isAbsoulteUri(link);
  }
}
