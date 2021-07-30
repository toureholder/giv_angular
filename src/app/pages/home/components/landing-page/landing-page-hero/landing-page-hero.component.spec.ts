import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { CoreModule } from 'src/app/core/core.module';
import { StoreLinksService } from 'src/app/core/services/business/store-links/store-links.service';
import {
  StoreLinksComponent,
  StoreLinksData,
} from '../../../../../shared/components/store-links/store-links.component';
import { LandingPageHeroComponent } from './landing-page-hero.component';

describe('LandingPageHeroComponent', () => {
  let component: LandingPageHeroComponent;
  let fixture: ComponentFixture<LandingPageHeroComponent>;
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
      declarations: [LandingPageHeroComponent, StoreLinksComponent],
      imports: [CoreModule, SharedModule],
      providers: [storeLinksProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
