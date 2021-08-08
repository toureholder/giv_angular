import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGridLoadingStateComponent } from './image-grid-loading-state.component';

describe('ImageGridLoadingStateComponent', () => {
  let component: ImageGridLoadingStateComponent;
  let fixture: ComponentFixture<ImageGridLoadingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageGridLoadingStateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGridLoadingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
