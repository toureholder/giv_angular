import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let mockEnvironment: EnvironmentService;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    mockEnvironment = {
      production: false,
      baseApiUrl: 'https://example.com',
      customerServiceNumber: '1234567890',
      storeLinks: {
        Android: 'https://play.google.com/store/apps/example',
        iOS: 'https://apps.apple.com/us/app/example/id1234567899?',
      },
    };

    const httpProvider: UseValueProvider = {
      provide: HttpClient,
      useValue: mockHttpClient,
    };

    const environmentProvider: UseValueProvider = {
      provide: EnvironmentService,
      useValue: mockEnvironment,
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [httpProvider, environmentProvider],
    });

    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#get', () => {
    it('should prefix path with base url when url it is RELATIVE', () => {
      // Given
      const path = '/home/categories/featured';

      // When
      service.get(path);

      // Then
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        `${mockEnvironment.baseApiUrl}${path}`
      );
    });

    it('should NOT prefix path with base url when url it is ABOSULTE', () => {
      // Given
      const path = 'https://example.com/home/categories/featured';

      // When
      service.get(path);

      // Then
      expect(mockHttpClient.get).toHaveBeenCalledWith(path);
    });

    it('should call http client with params when provided', () => {
      // Given
      const path = 'https://example.com/home/categories/featured';
      const fooBar = { foo: 'bar' };

      // When
      service.get(path, fooBar);

      // Then
      expect(mockHttpClient.get).toHaveBeenCalledWith(path, { params: fooBar });
    });

    it('should return Observable from http client', () => {
      // Given
      const fooBar = { foo: 'bar' };
      mockHttpClient.get.and.returnValue(of(fooBar));

      // When
      service.get('any').subscribe((data) => {
        // Then
        expect(data).toEqual(fooBar);
      });
    });
  });
});
