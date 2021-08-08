import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageData } from '@shared/components/image-div/image-div.component';
import { Listing } from '@shared/models/listing/listing.model';
import { LocationFilter } from '@shared/models/location-filter/location-filter.model';
import { Location } from '@shared/models/location/location.model';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { ListingService } from 'src/app/core/services/business/listing/listing.service';
import { LocationService } from 'src/app/core/services/business/location/location.service';
import { SwiperModule } from 'swiper/angular';
import { IWantItButtonComponent } from './components/i-want-it-button/i-want-it-button.component';
import { ListingDetailLoadingStateComponent } from './components/listing-detail-loading-state/listing-detail-loading-state.component';
import { ListingLocationComponent } from './components/listing-location/listing-location.component';
import { NotMailableAlertComponent } from './components/not-mailable-alert/not-mailable-alert.component';
import { PhotoCarouselComponent } from './components/photo-carousel/photo-carousel.component';
import { ReportListingTileComponent } from './components/report-listing-tile/report-listing-tile.component';
import { ListingDetailComponent } from './listing-detail.component';

describe('ListingDetailComponent', () => {
  let component: ListingDetailComponent;
  let fixture: ComponentFixture<ListingDetailComponent>;
  let template: HTMLElement;
  let mockListingService: jasmine.SpyObj<ListingService>;
  let mockLocationService: jasmine.SpyObj<LocationService>;
  const paramsId = 123;

  beforeEach(async () => {
    registerLocaleData(localePt);
    mockListingService = jasmine.createSpyObj('ListingService', ['getOne']);
    mockLocationService = jasmine.createSpyObj('LocationService', [
      'getLocationDetails',
    ]);

    const activatedRouteProvider: UseValueProvider = {
      provide: ActivatedRoute,
      useValue: {
        params: of({
          id: paramsId,
        }),
      },
    };

    const listingServiceProdiver: UseValueProvider = {
      provide: ListingService,
      useValue: mockListingService,
    };

    const locationServiceProdiver: UseValueProvider = {
      provide: LocationService,
      useValue: mockLocationService,
    };

    await TestBed.configureTestingModule({
      declarations: [
        ListingDetailComponent,
        ListingDetailLoadingStateComponent,
        ListingLocationComponent,
        PhotoCarouselComponent,
        NotMailableAlertComponent,
        ReportListingTileComponent,
        IWantItButtonComponent,
      ],
      imports: [CoreModule, RouterTestingModule, SharedModule, SwiperModule],
      providers: [
        activatedRouteProvider,
        listingServiceProdiver,
        locationServiceProdiver,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should call listing service get one with correct id', () => {
      // When
      component.ngOnInit();

      // Then
      expect(mockListingService.getOne).toHaveBeenCalledOnceWith(paramsId);
    });

    describe('when listing service returns a listing', () => {
      let listing: Listing;

      beforeEach(() => {
        // Given
        listing = Listing.example();
        mockListingService.getOne.and.returnValue(of(listing));

        // When
        component.ngOnInit();
      });

      it('should set listing', () => {
        expect(component.listing).toEqual(
          jasmine.objectContaining<Listing>(listing)
        );
      });

      it('should create a list of image data', () => {
        expect(component.imageDataList).toEqual(
          jasmine.arrayContaining<ImageData>([
            {
              imageUrl: listing.featuredImage?.url,
            },
          ])
        );
      });

      it('should call location service get one with correct filter', () => {
        expect(mockLocationService.getLocationDetails).toHaveBeenCalledOnceWith(
          jasmine.objectContaining<LocationFilter>({
            cityId: listing.cityId,
            stateId: listing.stateId,
            countryId: listing.countryId,
          })
        );
      });
    });

    describe('when location service returns a location', () => {
      let location: Location;
      let listing: Listing;

      beforeEach(() => {
        // Given
        listing = Listing.example();
        mockListingService.getOne.and.returnValue(of(listing));

        location = Location.example();
        mockLocationService.getLocationDetails.and.returnValue(of(location));

        // When
        component.ngOnInit();
      });

      it('should set location', () => {
        expect(component.location).toEqual(
          jasmine.objectContaining<Location>(location)
        );
      });
    });
  });

  describe('ui tests', () => {
    describe('loading state', () => {
      it('should display only loading state when listing is undefined', () => {
        // Given
        component.listing = undefined;

        // When
        fixture.detectChanges();

        // Then
        expect(
          template.querySelector('app-listing-detail-loading-state')
        ).toBeTruthy();

        expect(
          template.querySelector('[data-test="listing-detail-page-content"]')
        ).toBeFalsy();
      });

      it('should display only loading state when listing is undefined', () => {
        // Given
        component.listing = Listing.example();

        // When
        fixture.detectChanges();

        // Then
        expect(
          template.querySelector('app-listing-detail-loading-state')
        ).toBeFalsy();

        expect(
          template.querySelector('[data-test="listing-detail-page-content"]')
        ).toBeTruthy();
      });
    });

    describe('when listing service returns a listing', () => {
      let listing: Listing;
      let location: Location;
      const testAttribute = 'app-not-mailable-alert';

      it('should display not mailable alert if listing is not mailable', () => {
        // Given
        listing = Listing.example();
        mockListingService.getOne.and.returnValue(of(listing));

        location = Location.example();
        mockLocationService.getLocationDetails.and.returnValue(of(location));

        // When
        fixture.detectChanges();

        expect(template.querySelector(testAttribute)).toBeTruthy();
      });

      it('should NOT display not mailable alert if listing is not mailable', () => {
        // Given
        listing = Listing.example({ isMailable: true });
        mockListingService.getOne.and.returnValue(of(listing));

        // When
        fixture.detectChanges();

        expect(template.querySelector(testAttribute)).toBeFalsy();
      });
    });
  });
});
