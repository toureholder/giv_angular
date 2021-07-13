import getLocationDetailsJson from '@testing/fake-api-responses/locations/details/get.json';
import { TestBed } from '@angular/core/testing';
import { LocationFilter } from '@shared/models/location-filter/location-filter.model';
import { UseValueProvider } from '@testing/helpers';
import { HttpService } from '../../../http/http.service';

import { LocationApiService } from './location-api.service';
import { of } from 'rxjs';
import { Location } from '@shared/models/location/location.model';

describe('LocationApiService', () => {
  let service: LocationApiService;
  let mockHttpService: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj('HttpService', ['get']);

    const httpServiceProvider: UseValueProvider = {
      provide: HttpService,
      useValue: mockHttpService,
    };

    TestBed.configureTestingModule({
      providers: [httpServiceProvider],
    });

    service = TestBed.inject(LocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getLocationDetails', () => {
    const apiResponse = getLocationDetailsJson;
    const filter = LocationFilter.fake();

    beforeEach(() => {
      // Given
      mockHttpService.get.and.returnValue(of(apiResponse));
    });

    describe('when http service call succeeds', () => {
      it('should make call http service with correct url', () => {
        // When
        service.getLocationDetails(filter);

        // Then
        expect(mockHttpService.get).toHaveBeenCalledOnceWith(
          LocationApiService.LOCATIONS_PATH + LocationApiService.DETAILS_PATH,
          filter.serialize()
        );
      });

      it('should return location observable', () => {
        // When
        service.getLocationDetails(filter).subscribe((location: Location) => {
          expect(location.country?.id).toEqual(apiResponse.country.id);
          expect(location.country?.name).toEqual(apiResponse.country.name);
          expect(location.state?.id).toEqual(apiResponse.state.id);
          expect(location.state?.name).toEqual(apiResponse.state.name);
          expect(location.city?.id).toEqual(apiResponse.city.id);
          expect(location.city?.name).toEqual(apiResponse.city.name);
        });
      });
    });
  });
});
