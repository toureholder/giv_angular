import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageDivComponent } from '../../../../shared/components/image-div/image-div.component';
import { ListingCategory } from '../../../../shared/models/listing-category/listing-category.model';
import { RandomProductGridModule } from '../random-product-grid/random-product-grid.module';
import { HomeCategorySectionComponent } from './home-category-section.component';

describe('HomeCategorySectionComponent', () => {
  let component: HomeCategorySectionComponent;
  let fixture: ComponentFixture<HomeCategorySectionComponent>;
  let template: HTMLElement;
  let numberOfListings: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RandomProductGridModule],
      declarations: [HomeCategorySectionComponent, ImageDivComponent],
    });
  });

  beforeEach(() => {
    numberOfListings = 5;
    fixture = TestBed.createComponent(HomeCategorySectionComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render listings grid', () => {
    // Arrange / Given
    component.category = ListingCategory.getOneFake({
      numberOfListings,
    });

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    expect(template.querySelectorAll('app-random-product-grid').length).toBe(1);
  });
});
