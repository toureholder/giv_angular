import { Component, Input, OnInit } from '@angular/core';
import { ImageData } from '@shared/components/image-div/image-div.component';
import { Listing } from '@shared/models/listing/listing.model';

@Component({
  selector: 'app-random-product-grid',
  templateUrl: './random-product-grid.component.html',
  styleUrls: ['./random-product-grid.component.scss'],
})
export class RandomProductGridComponent implements OnInit {
  @Input() templateOption?: string;
  computedTemplateOption = '1';
  @Input() featuredImages?: ImageData[];
  slicedImageList?: ImageData[];

  ngOnInit(): void {
    this.computeTemplateOption();
    this.sliceImageList();
  }

  private computeTemplateOption() {
    this.computedTemplateOption =
      this.templateOption || this.getRandomTemplateOption();
  }

  private getRandomTemplateOption(): string {
    const options = ['1', '2', '3', '4', '5', '6'];
    return options[Math.floor(Math.random() * options.length)];
  }

  private sliceImageList() {
    this.slicedImageList = this.featuredImages?.slice(0, 6) || [];
  }
}
