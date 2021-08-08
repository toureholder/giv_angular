import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { assert } from '@testing/helpers';
import { CoreModule } from 'src/app/core/core.module';

import { ImageGridComponent } from './image-grid.component';

describe('ImageGridComponent', () => {
  let component: ImageGridComponent;
  let fixture: ComponentFixture<ImageGridComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageGridComponent],
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGridComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loading state if images list is falsy', () => {
    expect(template.querySelector('app-image-grid-loading-state')).toBeTruthy();
  });

  describe('when component has images', () => {
    beforeEach(() => {
      // Given
      component.images = [
        {
          image: {},
          title: 'title',
        },
        {
          image: {},
          title: 'title',
        },
      ];

      // When
      fixture.detectChanges();
    });

    it('should NOT display loading state', () => {
      // Then
      expect(
        template.querySelector('app-image-grid-loading-state')
      ).toBeFalsy();
    });

    it('should display each image', () => {
      // Then
      if (component.images) {
        expect(
          template.querySelectorAll('[data-test="image-grid-item"]').length
        ).toEqual(component.images.length);

        return;
      }

      assert(true);
    });
  });
});
