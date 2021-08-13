import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageDivComponent } from '@shared/components/image-div/image-div.component';
import { AsyncActionState } from '@shared/models/component_async_action/component_async_action';
import { ListingCategory } from '@shared/models/listing-category/listing-category.model';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { HomeCategorySectionComponent } from './components/home-category-section/home-category-section.component';
import { HomeLoadingStateComponent } from './components/home-loading-state/home-loading-state.component';
import { LandingPageFeaturesComponent } from './components/landing-page/landing-page-features/landing-page-features.component';
import { LandingPageHeroComponent } from './components/landing-page/landing-page-hero/landing-page-hero.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RandomProductGridModule } from './components/random-product-grid/random-product-grid.module';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';
import { DownloadAppCtaComponent } from '@shared/components/download-app-cta/download-app-cta.component';
import { EnvironmentService } from 'src/app/core/services/environment/environment.service';
import { UseValueProvider } from '@testing/helpers';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let template: HTMLElement;
  let homeServiceSpy: jasmine.SpyObj<HomeService>;
  let fakeList: ListingCategory[];
  let mockEnvironment: EnvironmentService;

  beforeEach(async () => {
    homeServiceSpy = jasmine.createSpyObj('HomeService', ['getCategories']);

    fakeList = [
      ListingCategory.getOneFake({
        numberOfListings: 3,
      }),
    ];

    mockEnvironment = {
      production: false,
      baseApiUrl: 'https://example.com',
      customerServiceNumber: '1234567890',
      storeLinks: {
        Android: 'https://play.google.com/store/apps/example',
        iOS: 'https://apps.apple.com/us/app/example/id1234567899?',
      },
    };

    const environmentProvider: UseValueProvider = {
      provide: EnvironmentService,
      useValue: mockEnvironment,
    };

    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        RouterTestingModule,
        RandomProductGridModule,
      ],
      declarations: [
        HomeComponent,
        HomeCategorySectionComponent,
        ImageDivComponent,
        HomeLoadingStateComponent,
        LandingPageComponent,
        LandingPageHeroComponent,
        LandingPageFeaturesComponent,
        DownloadAppCtaComponent,
      ],
      providers: [HomeService, environmentProvider],
    });

    TestBed.overrideProvider(HomeService, { useValue: homeServiceSpy });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;

    homeServiceSpy.getCategories.and.returnValue(of(fakeList));
  });

  it('getCategoriesRequest should start in READY state', () => {
    expect(component.getCategoriesRequest.isReady).toBe(true);
  });

  it('getCategoriesRequest should be in LOADING state during request', () => {
    // Act / When
    fixture.detectChanges();
    component.getCategoriesRequest.state = AsyncActionState.LOADING;

    // Assert / Then
    expect(component.getCategoriesRequest.isLoading).toBe(true);
  });

  it('getCategoriesRequest should be in SUCCESS state after request', () => {
    fixture.detectChanges();

    expect(component.getCategoriesRequest.isSuccess).toBe(true);
  });

  it('should get categories from service', () => {
    fixture.detectChanges();

    expect(homeServiceSpy.getCategories).toHaveBeenCalledTimes(1);
    expect(component.categories).toEqual(fakeList);
  });

  it('should render loading state while loading', () => {
    // Act / When
    fixture.detectChanges();
    component.getCategoriesRequest.state = AsyncActionState.LOADING;
    fixture.detectChanges();

    // Assert / Then
    expect(template.querySelector('[data-test="loading-state"]')).toBeTruthy();
  });

  it('should not render loading when service call completes', () => {
    // Act / When
    fixture.detectChanges();

    // Assert / Then
    expect(template.querySelector('[data-test="loading-state"]')).toBeFalsy();
  });

  it('should render list of categories when service call completes', () => {
    fixture.detectChanges();

    expect(template.querySelector('[data-test="success-state"]')).toBeTruthy();

    expect(
      template.querySelectorAll('[data-test="home-category"]').length
    ).toBe(fakeList.length);
  });

  it('first category should have a template option of "1"', () => {
    fixture.detectChanges();

    expect(
      template
        .querySelectorAll('[data-test="home-category"]')[0]
        .getAttribute('ng-reflect-template-option')
    ).toBe('1');
  });
});
