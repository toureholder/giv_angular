import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { PhotoCarouselComponent } from './photo-carousel.component';

describe('PhotoCarouselComponent', () => {
  let component: PhotoCarouselComponent;
  let fixture: ComponentFixture<PhotoCarouselComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoCarouselComponent],
      imports: [SharedModule, SwiperModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCarouselComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display only skeleton if imageDataList is falsy', () => {
    // Given
    component.imageDataList = undefined;

    // When
    fixture.detectChanges();

    // Then
    expect(
      template.querySelector('[data-test="photo-carousel-skeleton"]')
    ).toBeTruthy();

    expect(template.querySelector('[data-test="photo-carousel"]')).toBeFalsy();
  });

  it('should display onlymcarousel if imageDataList is defined', () => {
    // Given
    component.imageDataList = [
      {
        imageUrl: 'https://example.com/1.jpg',
      },
    ];

    // When
    fixture.detectChanges();

    // Then
    expect(
      template.querySelector('[data-test="photo-carousel-skeleton"]')
    ).toBeFalsy();

    expect(template.querySelector('[data-test="photo-carousel"]')).toBeTruthy();
  });
});
