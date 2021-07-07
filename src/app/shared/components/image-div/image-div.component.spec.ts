import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageDivComponent } from './image-div.component';

describe('ImageDivComponent', () => {
  let fixture: ComponentFixture<ImageDivComponent>;
  let component: ImageDivComponent;
  let template: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ImageDivComponent],
    });

    // Given
    fixture = TestBed.createComponent(ImageDivComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  describe('when link is relative link', () => {
    beforeEach(() => {
      // Given
      component.imageData = {
        imageUrl: 'https://picsum.com/image.jpg',
        imageAlt: 'a cat',
        link: '/listing/1',
      };

      // When
      fixture.detectChanges();
    });

    it('should have a link with correct href', () => {
      // Then
      expect(
        template.querySelector(`a[href="${component.imageData?.link}"]`)
      ).toBeTruthy();
    });

    it('should render an image with correct src e alt', () => {
      // Then
      const img = template.querySelector('img');
      expect(img).toBeTruthy();
      expect(img?.src).toEqual(component.imageData?.imageUrl);
      expect(img?.alt).toEqual(component.imageData?.imageAlt);
    });
  });

  describe('when link is absolute link', () => {
    beforeEach(() => {
      // Given
      component.imageData = {
        imageUrl: 'https://picsum.com/image.jpg',
        imageAlt: 'a cat',
        link: 'https://example.com/listing/1',
      };

      // When
      fixture.detectChanges();
    });

    it('should have a link with correct href', () => {
      // Then
      expect(
        template.querySelector(`a[href="${component.imageData?.link}"]`)
      ).toBeTruthy();
    });
  });

  describe('when there is no link', () => {
    beforeEach(() => {
      // Given
      component.imageData = {
        imageUrl: 'https://picsum.com/image.jpg',
        imageAlt: 'a cat',
      };

      // When
      fixture.detectChanges();
    });

    it('should NOT have a link', () => {
      // Then
      expect(template.querySelector('a')).toBeFalsy();
    });

    it('should still render an image with correct src e alt', () => {
      // Then
      const img = template.querySelector('img');
      expect(img).toBeTruthy();
      expect(img?.src).toEqual(component.imageData?.imageUrl);
      expect(img?.alt).toEqual(component.imageData?.imageAlt);
    });
  });
});
