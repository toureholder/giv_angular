import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingDetailRoutingModule } from './listing-detail-routing.module';
import { ListingDetailComponent } from './listing-detail.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '@shared/shared.module';
import { NotMailableAlertComponent } from './components/not-mailable-alert/not-mailable-alert.component';
import { ReportListingTileComponent } from './components/report-listing-tile/report-listing-tile.component';
import { IWantItButtonComponent } from './components/i-want-it-button/i-want-it-button.component';
import { ContactOwnerModalComponent } from './components/contact-owner-modal/contact-owner-modal.component';
import { PhotoCarouselComponent } from './components/photo-carousel/photo-carousel.component';
import { ListingDetailLoadingStateComponent } from './components/listing-detail-loading-state/listing-detail-loading-state.component';
import { ListingLocationComponent } from './components/listing-location/listing-location.component';

@NgModule({
  declarations: [
    ListingDetailComponent,
    NotMailableAlertComponent,
    ReportListingTileComponent,
    IWantItButtonComponent,
    ContactOwnerModalComponent,
    PhotoCarouselComponent,
    ListingDetailLoadingStateComponent,
    ListingLocationComponent,
  ],
  imports: [
    CommonModule,
    ListingDetailRoutingModule,
    SwiperModule,
    SharedModule,
  ],
})
export class ListingDetailModule {}
