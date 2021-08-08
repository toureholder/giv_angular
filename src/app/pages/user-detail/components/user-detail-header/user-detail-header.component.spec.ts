import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { UserDetailHeaderComponent } from './user-detail-header.component';

describe('UserDetailHeaderComponent', () => {
  let component: UserDetailHeaderComponent;
  let fixture: ComponentFixture<UserDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailHeaderComponent],
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
