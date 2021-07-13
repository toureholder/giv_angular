import { TestBed } from '@angular/core/testing';
import { Listing } from '@shared/models/listing/listing.model';
import getCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { HttpService } from '../../../http/http.service';
import { ListingApiService } from './listing-api.service';

describe('ListingApiService', () => {
  let service: ListingApiService;
  let mockHttpService: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj('HtttpService', ['get']);

    const httpProvider: UseValueProvider = {
      provide: HttpService,
      useValue: mockHttpService,
    };

    TestBed.configureTestingModule({
      providers: [httpProvider],
    });

    service = TestBed.inject(ListingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getOne', () => {
    let listingId: number;

    beforeEach(() => {
      listingId = 1;
    });

    it('should call http service with correct url', () => {
      // Given
      const apiResponse = getCategoriesJson[0].listings[0];
      mockHttpService.get.and.returnValue(of(apiResponse));

      // When
      service.getOne(listingId);

      // Then
      expect(mockHttpService.get).toHaveBeenCalledWith(
        ListingApiService.LISTINGS_PATH + '/' + listingId
      );
    });

    it('should return listing observable', () => {
      // Given
      const apiResponse = getCategoriesJson[0].listings[0];
      mockHttpService.get.and.returnValue(of(apiResponse));

      // When
      service.getOne(listingId).subscribe((data: Listing) => {
        // Then
        expect(data).toEqual(Listing.fromJson(apiResponse));
      });
    });
  });
});
