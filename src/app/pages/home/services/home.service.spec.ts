import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HomeService } from './home.service';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import getCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';
import { ListingCategory } from 'src/app/shared/models/listing-category/listing-category.model';

describe('HomeService', () => {
  let service: HomeService;
  let mockHttp: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpService', ['get']);

    const httpProvider: UseValueProvider = {
      provide: HttpService,
      useValue: mockHttp,
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService, httpProvider],
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getCategories', () => {
    it('should call http service with correct url', () => {
      // Given
      mockHttp.get.and.returnValue(of(getCategoriesJson));

      // When
      service.getCategories();

      // Then
      expect(mockHttp.get).toHaveBeenCalledWith(
        HomeService.HOME_PATH + HomeService.FEATURED_CATEGORIES_PATH
      );
    });

    it('should return observable of list of featured categories', () => {
      // Given
      mockHttp.get.and.returnValue(of(getCategoriesJson));

      // When
      service.getCategories().subscribe((data: ListingCategory[]) => {
        // Then
        expect(data[0].simpleName).toEqual(getCategoriesJson[0].simple_name);

        expect(data[1].simpleName).toEqual(getCategoriesJson[1].simple_name);
      });
    });
  });
});
