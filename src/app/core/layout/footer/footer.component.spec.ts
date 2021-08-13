import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadAppCtaComponent } from '@shared/components/download-app-cta/download-app-cta.component';
import { StoreLinksData } from '@shared/components/store-links/store-links.component';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { CoreModule } from '../../core.module';
import { StoreLinksService } from '../../services/business/store-links/store-links.service';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let mockStoreLinksService: jasmine.SpyObj<StoreLinksService>;

  beforeEach(async () => {
    mockStoreLinksService = jasmine.createSpyObj('StoreLinksService', [
      'getStoreLinks',
    ]);

    const storeLinksProvider: UseValueProvider = {
      provide: StoreLinksService,
      useValue: mockStoreLinksService,
    };

    await TestBed.configureTestingModule({
      declarations: [FooterComponent, DownloadAppCtaComponent],
      imports: [CoreModule, SharedModule],
      providers: [storeLinksProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set storeLinksData with mobileStoreLink for iOS', () => {
      // Given
      const fakeLinks: StoreLinksData = {
        mobileStoreLink: 'https://example.com',
        playStoreLink: 'https://android.com',
        appStoreLink: 'https://ios.com',
      };

      mockStoreLinksService.getStoreLinks.and.returnValue(fakeLinks);

      // When
      component.ngOnInit();

      // Then
      expect(component.storeLinksData).toEqual(
        jasmine.objectContaining<StoreLinksData>({
          mobileStoreLink: fakeLinks?.mobileStoreLink,
          playStoreLink: fakeLinks?.playStoreLink,
          appStoreLink: fakeLinks?.appStoreLink,
        })
      );
    });
  });
});
