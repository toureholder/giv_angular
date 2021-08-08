import { TestBed } from '@angular/core/testing';
import { Listing } from '@shared/models/listing/listing.model';
import getUserListingsReponse from '@testing/fake-api-responses/users/:id/listings/get.json';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs/internal/observable/of';
import { HttpService } from '../../../http/http.service';
import { ListingApiService } from '../../listing/api/listing-api.service';
import { UserApiService } from './user-api.service';

describe('UserApiService', () => {
  let service: UserApiService;
  let mockHtttp: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    mockHtttp = jasmine.createSpyObj('HttpService', ['get']);

    const httpProvider: UseValueProvider = {
      provide: HttpService,
      useValue: mockHtttp,
    };

    TestBed.configureTestingModule({
      providers: [httpProvider],
    });

    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getListingsByUserId', () => {
    it('should make correct http service request', () => {
      // Given
      const id = 1;

      // When
      service.getListingsByUserId(id);

      // Then
      expect(mockHtttp.get).toHaveBeenCalledWith(
        UserApiService.USERS_PATH + '/' + id + ListingApiService.LISTINGS_PATH
      );
    });

    describe('when http serice returns valid json', () => {
      // Given
      const id = 1;

      beforeEach(() => {
        mockHtttp.get.and.returnValue(of(getUserListingsReponse));
      });

      it('should return listings observable', () => {
        // When
        service.getListingsByUserId(id).subscribe((val: Listing[]) => {
          // Then
          expect(val).toEqual(
            Listing.fromJsonListtoList(getUserListingsReponse)
          );
          expect(val[0]).toEqual(Listing.fromJson(getUserListingsReponse[0]));
        });
      });
    });
  });
});
