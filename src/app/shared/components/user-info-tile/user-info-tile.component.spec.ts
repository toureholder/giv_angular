import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '@shared/models/user/user.model';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { UserInfoTileComponent } from './user-info-tile.component';

describe('UserInfoTileComponent', () => {
  let component: UserInfoTileComponent;
  let fixture: ComponentFixture<UserInfoTileComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoTileComponent],
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoTileComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when user is falsy', () => {
    it('should display loading state when user is falsy', () => {
      expect(
        template.querySelector('app-user-info-tile-loading-state')
      ).toBeTruthy();
    });

    it('should NOT display tile when user is falsy', () => {
      expect(template.querySelector('app-list-tile')).toBeFalsy();
    });
  });

  describe('when there is a user', () => {
    beforeEach(() => {
      component.user = User.example();

      fixture.detectChanges();
    });

    it('should NOT display loading state', () => {
      expect(
        template.querySelector('app-user-info-tile-loading-state')
      ).toBeFalsy();
    });

    it('should display tile', () => {
      expect(template.querySelector('app-list-tile')).toBeTruthy();
    });
  });
});
