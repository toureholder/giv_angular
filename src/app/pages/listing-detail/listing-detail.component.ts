import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageData } from '@shared/components/image-div/image-div.component';
import { Listing } from '@shared/models/listing/listing.model';
import { LocationFilter } from '@shared/models/location-filter/location-filter.model';
import { Location } from '@shared/models/location/location.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListingService } from 'src/app/core/services/business/listing/listing.service';
import { LocationService } from 'src/app/core/services/business/location/location.service';

import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.scss'],
})
export class ListingDetailComponent implements OnInit {
  listing?: Listing;
  imageDataList?: ImageData[];
  location?: Location;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.getListingId().subscribe((id) => {
      this.fetchAndSetListing(id);
    });
  }

  private getListingId(): Observable<number> {
    return this.activatedRoute.params.pipe(
      map((params) => {
        return params.id;
      })
    );
  }

  private fetchAndSetListing(id: number): void {
    this.listingService.getOne(id)?.subscribe((listing) => {
      this.listing = listing;
      this.prepareImageData(listing);
      this.fetchAndSetLocation(listing);
    });
  }

  private fetchAndSetLocation(listing: Listing): void {
    this.locationService
      .getLocationDetails(
        new LocationFilter({
          cityId: listing.cityId,
          stateId: listing.stateId,
          countryId: listing.countryId,
        })
      )
      ?.subscribe((location) => {
        this.location = location;
      });
  }

  private prepareImageData(listing: Listing): void {
    this.imageDataList = listing.listingImages.map((image) => {
      return {
        imageUrl: image.url,
      };
    });
  }
}
