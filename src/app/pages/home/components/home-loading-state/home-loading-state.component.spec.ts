import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoadingStateComponent } from './home-loading-state.component';

describe('HomeLoadingStateComponent', () => {
  let component: HomeLoadingStateComponent;
  let fixture: ComponentFixture<HomeLoadingStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLoadingStateComponent],
      imports: [CommonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoadingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
