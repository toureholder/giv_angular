import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ImgageGridItem } from '@shared/components/image-grid/image-grid.component';
import { Listing } from '@shared/models/listing/listing.model';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { UserService } from 'src/app/core/services/business/user/user.service';
import { UserDetailHeaderComponent } from './components/user-detail-header/user-detail-header.component';

import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  const paramsId = 123;

  beforeEach(async () => {
    registerLocaleData(localePt);

    const activatedRouteProvider: UseValueProvider = {
      provide: ActivatedRoute,
      useValue: {
        params: of({
          id: paramsId,
        }),
      },
    };

    mockUserService = jasmine.createSpyObj('UserService', [
      'getListingsByUserId',
    ]);

    const userServiceProvider: UseValueProvider = {
      provide: UserService,
      useValue: mockUserService,
    };

    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent, UserDetailHeaderComponent],
      imports: [CoreModule, SharedModule],
      providers: [activatedRouteProvider, userServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOninit', () => {
    it('should fetch listings from listing service by id from route params', () => {
      // When
      component.ngOnInit();

      // Then
      expect(mockUserService.getListingsByUserId).toHaveBeenCalledOnceWith(
        paramsId
      );
    });

    it('should set listings and user', () => {
      // Given
      const listings: Listing[] = Listing.exampleList();
      mockUserService.getListingsByUserId.and.returnValue(of(listings));

      // When
      component.ngOnInit();

      // Then
      expect(component.listings).toEqual(listings);
      expect(component.user).toEqual(listings[0].user);
      expect(component.imageGridItems).toEqual(
        jasmine.arrayContaining<ImgageGridItem>([
          { image: listings[0].toImageData(), title: listings[0].title },
          { image: listings[1].toImageData(), title: listings[1].title },
          {
            image: listings[listings.length - 1].toImageData(),
            title: listings[listings.length - 1].title,
          },
        ])
      );
    });
  });
});
