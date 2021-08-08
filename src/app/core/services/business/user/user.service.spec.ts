import { TestBed } from '@angular/core/testing';
import { Listing } from '@shared/models/listing/listing.model';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { UserApiService } from './api/user-api.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let mockApi: jasmine.SpyObj<UserApiService>;

  beforeEach(() => {
    mockApi = jasmine.createSpyObj('UserApiService', ['getListingsByUserId']);

    const apiProvider: UseValueProvider = {
      provide: UserApiService,
      useValue: mockApi,
    };

    TestBed.configureTestingModule({
      providers: [apiProvider],
    });

    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getListingsByUserId', () => {
    it('should call api', () => {
      // Given
      const id = 1;

      // When
      service.getListingsByUserId(id);

      // Then
      expect(mockApi.getListingsByUserId).toHaveBeenCalledWith(id);
    });

    it('should retrun observable from api', () => {
      // Given
      const id = 1;
      const list = Listing.exampleList();
      mockApi.getListingsByUserId.and.returnValue(of(list));

      // When
      service.getListingsByUserId(id).subscribe((val: Listing[]) => {
        // Then
        expect(val).toEqual(list);
      });
    });
  });
});
