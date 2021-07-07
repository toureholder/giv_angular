import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { ImageDivComponent } from '@shared/components/image-div/image-div.component';
import { ListingCategory } from '@shared/models/listing-category/listing-category.model';
import { HomeCategorySectionComponent } from './components/home-category-section/home-category-section.component';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';
import { AsyncActionState } from '@shared/models/component_async_action/component_async_action';
import { HomeLoadingStateComponent } from './components/home-loading-state/home-loading-state.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RandomProductGridModule } from './components/random-product-grid/random-product-grid.module';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let template: HTMLElement;
  let homeServiceSpy: jasmine.SpyObj<HomeService>;
  let fakeList: ListingCategory[];

  beforeEach(() => {
    homeServiceSpy = jasmine.createSpyObj('HomeService', ['getCategories']);
    fakeList = [
      ListingCategory.getOneFake({
        numberOfListings: 3,
      }),
    ];

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RandomProductGridModule],
      declarations: [
        HomeComponent,
        HomeCategorySectionComponent,
        ImageDivComponent,
        HomeLoadingStateComponent,
      ],
      providers: [HomeService],
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
