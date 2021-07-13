import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '@shared/models/user/user.model';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { UserInfoTileComponent } from './user-info-tile.component';

describe('UserInfoTileComponent', () => {
  let component: UserInfoTileComponent;
  let fixture: ComponentFixture<UserInfoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoTileComponent],
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
