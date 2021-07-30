import { TestBed } from '@angular/core/testing';
import { StoreLinksData } from '@shared/components/store-links/store-links.component';
import { UseValueProvider } from '@testing/helpers';
import { EnvironmentService } from '../../environment/environment.service';
import {
  OS,
  OsDetectionService,
} from '../../os-detection/os-detection.service';
import { StoreLinksService } from './store-links.service';

describe('StoreLinksService', () => {
  let service: StoreLinksService;
  let mockOSDetection: jasmine.SpyObj<OsDetectionService>;
  let mockEnvironment: EnvironmentService;

  beforeEach(() => {
    mockOSDetection = jasmine.createSpyObj('OsDetectionService', [
      'getMobileOS',
    ]);

    mockEnvironment = {
      production: false,
      baseApiUrl: 'https://example.com',
      customerServiceNumber: '1234567890',
      storeLinks: {
        Android: 'https://play.google.com/store/apps/example',
        iOS: 'https://apps.apple.com/us/app/example/id1234567899?',
      },
    };

    const osDetectionProvider: UseValueProvider = {
      provide: OsDetectionService,
      useValue: mockOSDetection,
    };

    const environmentProvider: UseValueProvider = {
      provide: EnvironmentService,
      useValue: mockEnvironment,
    };

    TestBed.configureTestingModule({
      providers: [osDetectionProvider, environmentProvider],
    });
    service = TestBed.inject(StoreLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getStoreLinks', () => {
    it('should get store links', () => {
      // Given
      mockOSDetection.getMobileOS.and.returnValue(OS.Android);

      // Then
      expect(service.getStoreLinks()).toEqual(
        jasmine.objectContaining<StoreLinksData>({
          mobileStoreLink: mockEnvironment.storeLinks?.Android,
          playStoreLink: mockEnvironment.storeLinks?.Android,
          appStoreLink: mockEnvironment.storeLinks?.iOS,
        })
      );
    });
  });
});
