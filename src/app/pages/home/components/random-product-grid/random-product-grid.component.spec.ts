import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageData } from '@shared/components/image-div/image-div.component';
import { SharedModule } from '@shared/shared.module';
import { assert } from '@testing/helpers';

import { RandomProductGridComponent } from './random-product-grid.component';

describe('RandomProductGridComponent', () => {
  let component: RandomProductGridComponent;
  let fixture: ComponentFixture<RandomProductGridComponent>;

  let template: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [RandomProductGridComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomProductGridComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render listings' featured images", () => {
    // Arrange / Given
    component.featuredImages = getFakeImageDataList();

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    if (component.slicedImageList) {
      expect(template.querySelectorAll('app-image-div').length).toBe(
        component.slicedImageList?.length
      );
      return;
    }

    assert(true);
  });

  it('should set a data-index on each image div', () => {
    // Arrange / Given
    component.featuredImages = getFakeImageDataList();

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    if (component.slicedImageList) {
      for (let index = 0; index < component.slicedImageList?.length; index++) {
        expect(template.querySelector(`[data-index="${index}"]`)).toBeTruthy();
      }
      return;
    }

    assert(true);
  });

  it('should should render only the first 6 listings', () => {
    // Arrange / Given
    component.featuredImages = getFakeImageDataList();

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    expect(component.featuredImages.length).toBeGreaterThan(6);
    expect(template.querySelectorAll('app-image-div').length).toBe(6);
  });

  it('should mantain template option if received as argument', () => {
    // Arrange / Given
    component.featuredImages = getFakeImageDataList();

    component.templateOption = '3';

    // Act / When
    fixture.detectChanges();

    // Then
    expect(component.computedTemplateOption).toBe('3');
    expect(template.querySelector('[data-template="3"]')).toBeTruthy();
  });

  describe('#slicedImageList', () => {
    describe('when featuredImages is undefined', () => {
      it('should be an empty array', () => {
        fixture.detectChanges();

        expect(component.slicedImageList).toEqual([]);
      });
    });
  });
});

// Helpers

function getFakeImageDataList(): ImageData[] {
  return [
    {
      imageUrl: 'http://example.com/cat.jpg',
      imageAlt: 'a cat',
      link: '/cat',
    },
    {
      imageUrl: 'http://example.com/dog.jpg',
      imageAlt: 'a dog',
      link: '/dog',
    },
    {
      imageUrl: 'http://example.com/ball.jpg',
      imageAlt: 'a ball',
      link: '/ball',
    },
    {
      imageUrl: 'http://example.com/cat.jpg',
      imageAlt: 'a cat',
      link: '/cat',
    },
    {
      imageUrl: 'http://example.com/dog.jpg',
      imageAlt: 'a dog',
      link: '/dog',
    },
    {
      imageUrl: 'http://example.com/ball.jpg',
      imageAlt: 'a ball',
      link: '/ball',
    },
    {
      imageUrl: 'http://example.com/cat.jpg',
      imageAlt: 'a cat',
      link: '/cat',
    },
    {
      imageUrl: 'http://example.com/dog.jpg',
      imageAlt: 'a dog',
      link: '/dog',
    },
    {
      imageUrl: 'http://example.com/ball.jpg',
      imageAlt: 'a ball',
      link: '/ball',
    },
  ];
}
