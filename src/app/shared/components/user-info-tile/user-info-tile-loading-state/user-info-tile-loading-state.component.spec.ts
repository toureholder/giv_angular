import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoTileLoadingStateComponent } from './user-info-tile-loading-state.component';

describe('UserInfoTileLoadingStateComponent', () => {
  let component: UserInfoTileLoadingStateComponent;
  let fixture: ComponentFixture<UserInfoTileLoadingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoTileLoadingStateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoTileLoadingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
