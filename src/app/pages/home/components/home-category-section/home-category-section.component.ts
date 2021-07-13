import { Component, Input, OnInit } from '@angular/core';
import { ImageData } from '@shared/components/image-div/image-div.component';
import { Listing } from '@shared/models/listing/listing.model';
import { ListingCategory } from '../../../../shared/models/listing-category/listing-category.model';

@Component({
  selector: 'app-home-category-section',
  templateUrl: './home-category-section.component.html',
  styleUrls: ['./home-category-section.component.scss'],
})
export class HomeCategorySectionComponent implements OnInit {
  @Input() category?: ListingCategory;
  @Input() templateOption?: string;
  imageList?: ImageData[];
  computedTemplateOption = '1';

  ngOnInit(): void {
    this.computeTemplateOption();
    this.prepareImageList();
  }

  private computeTemplateOption() {
    this.computedTemplateOption =
      this.templateOption || this.getRandomTemplateOption();
  }

  private getRandomTemplateOption(): string {
    const options = ['1', '2', '3', '4', '5', '6'];
    return options[Math.floor(Math.random() * options.length)];
  }

  private prepareImageList() {
    this.imageList = this.category?.listings.map((listing: Listing) => {
      return {
        imageUrl: listing.featuredImage?.url,
        imageAlt: listing.title,
        link: '/listing/' + listing.id,
      };
    });
  }
}
