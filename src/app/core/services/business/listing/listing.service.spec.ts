import { TestBed } from '@angular/core/testing';
import { Listing } from '@shared/models/listing/listing.model';
import getCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { ListingApiService } from './api/listing-api.service';
import { ListingService } from './listing.service';

describe('ListingService', () => {
  let service: ListingService;
  let mockApi: jasmine.SpyObj<ListingApiService>;

  beforeEach(() => {
    mockApi = jasmine.createSpyObj('ListingApiService', ['getOne']);

    const apiProvider: UseValueProvider = {
      provide: ListingApiService,
      useValue: mockApi,
    };

    TestBed.configureTestingModule({
      providers: [apiProvider],
    });

    service = TestBed.inject(ListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getOne', () => {
    it('should return listing observable from api', () => {
      // Given
      const apiResponse = getCategoriesJson[0].listings[0];
      const listing = Listing.fromJson(apiResponse);
      mockApi.getOne.and.returnValue(of(listing));

      // When
      service.getOne(listing.id)?.subscribe((data: Listing) => {
        // Then
        expect(data).toEqual(listing);
      });

      // Then
      expect(mockApi.getOne).toHaveBeenCalledWith(listing.id);
    });
  });
});
