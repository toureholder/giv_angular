import { TestBed } from '@angular/core/testing';
import { LocationFilter } from '@shared/models/location-filter/location-filter.model';
import { Location } from '@shared/models/location/location.model';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { LocationApiService } from './api/location-api.service';

import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;
  let mockLocationApi: jasmine.SpyObj<LocationApiService>;

  beforeEach(() => {
    mockLocationApi = jasmine.createSpyObj('locationApiService', [
      'getLocationDetails',
    ]);

    const locationApiProvider: UseValueProvider = {
      provide: LocationApiService,
      useValue: mockLocationApi,
    };

    TestBed.configureTestingModule({
      providers: [locationApiProvider],
    });

    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getLocationDetails', () => {
    const filter = LocationFilter.fake();
    const exampleLocation = Location.example();

    beforeEach(() => {
      // Given
      mockLocationApi.getLocationDetails.and.returnValue(of(exampleLocation));
    });

    describe('when location api returns a location', () => {
      it('should call location api getLocationDetails', () => {
        // When
        service.getLocationDetails(filter);

        // Then
        expect(mockLocationApi.getLocationDetails).toHaveBeenCalledOnceWith(
          filter
        );
      });

      it('should return location observable from location api', () => {
        // When
        service.getLocationDetails(filter)?.subscribe((location: Location) => {
          expect(location).toEqual(exampleLocation);
        });
      });
    });
  });
});
