import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@shared/models/location/location.model';

import { ListingLocationComponent } from './listing-location.component';

describe('ListingLocationComponent', () => {
  let component: ListingLocationComponent;
  let fixture: ComponentFixture<ListingLocationComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingLocationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingLocationComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display only skeleton if imageDataList is falsy', () => {
    // Given
    component.location = undefined;

    // When
    fixture.detectChanges();

    // Then
    expect(
      template.querySelector('[data-test="listing-location-skeleton"]')
    ).toBeTruthy();

    expect(
      template.querySelector('[data-test="listing-location"]')
    ).toBeFalsy();
  });

  it('should display onlymcarousel if imageDataList is defined', () => {
    // Given
    component.location = Location.example();

    // When
    fixture.detectChanges();

    // Then
    expect(
      template.querySelector('[data-test="listing-location-skeleton"]')
    ).toBeFalsy();

    expect(
      template.querySelector('[data-test="listing-location"]')
    ).toBeTruthy();
  });
});
