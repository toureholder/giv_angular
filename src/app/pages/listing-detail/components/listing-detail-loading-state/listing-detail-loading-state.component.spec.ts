import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailLoadingStateComponent } from './listing-detail-loading-state.component';

describe('ListingDetailLoadingStateComponent', () => {
  let component: ListingDetailLoadingStateComponent;
  let fixture: ComponentFixture<ListingDetailLoadingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingDetailLoadingStateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailLoadingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
