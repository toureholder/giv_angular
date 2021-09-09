import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailConfirmation } from '@shared/models/email-confirmation/email-confirmation.model';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { of, throwError } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { EmailConfirmationComponent } from './email-confirmation.component';
import { EmailConfirmationService } from './services/email-confirmation.service';

describe('EmailConfirmationComponent', () => {
  describe('when route has expected params', () => {
    let component: EmailConfirmationComponent;
    let fixture: ComponentFixture<EmailConfirmationComponent>;

    const mockEmailConfirmationService: jasmine.SpyObj<EmailConfirmationService> =
      jasmine.createSpyObj('EmailConfirmationService', ['confirm']);

    const emailConfirmationServiceProvider: UseValueProvider = {
      provide: EmailConfirmationService,
      useValue: mockEmailConfirmationService,
    };

    const queryParams: { [key: string]: string } = {
      email: 'email@example.com',
      token: 'any',
    };

    const activatedRouteProvider: UseValueProvider = {
      provide: ActivatedRoute,
      useValue: {
        snapshot: {
          queryParams,
        },
      },
    };

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [EmailConfirmationComponent],
        imports: [RouterTestingModule, CoreModule, SharedModule],
        providers: [activatedRouteProvider, emailConfirmationServiceProvider],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(EmailConfirmationComponent);
      component = fixture.componentInstance;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('#ngOnInit', () => {
      it('should call EmailConfirmationService.confirm with data from route', () => {
        // Given
        mockEmailConfirmationService.confirm.and.returnValue(
          of(EmailConfirmation.example())
        );

        // When
        component.ngOnInit();

        // Then
        expect(mockEmailConfirmationService.confirm).toHaveBeenCalledWith({
          email: queryParams.email,
          token: queryParams.token,
        });
      });

      describe('when EmailConfirmationService returns EmailConfirmation', () => {
        const confirmation = EmailConfirmation.example();

        beforeEach(() => {
          // Given
          mockEmailConfirmationService.confirm.and.returnValue(
            of(confirmation)
          );
        });

        it('should set component emailConfirmation', () => {
          // When
          component.ngOnInit();

          // Then
          expect(component.emailConfirmation).toEqual(confirmation);
        });
      });

      describe('when EmailConfirmationService throws an error', () => {
        beforeEach(() => {
          // Given
          mockEmailConfirmationService.confirm.and.returnValue(
            throwError('fake error')
          );
        });

        it('should set define confirmation error', () => {
          // When
          component.ngOnInit();

          // Then
          expect(component.emailConfirmationError).toBeDefined();
        });
      });
    });
  });

  describe('when route does not have token param', () => {
    let component: EmailConfirmationComponent;
    let fixture: ComponentFixture<EmailConfirmationComponent>;

    const mockEmailConfirmationService = jasmine.createSpyObj(
      'EmailConfirmationService',
      ['confirm']
    );

    const emailConfirmationServiceProvider: UseValueProvider = {
      provide: EmailConfirmationService,
      useValue: mockEmailConfirmationService,
    };

    const queryParams: { [key: string]: string } = {
      email: 'test@test.com',
    };

    const activatedRouteProvider: UseValueProvider = {
      provide: ActivatedRoute,
      useValue: {
        snapshot: {
          queryParams,
        },
      },
    };

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [EmailConfirmationComponent],
        imports: [RouterTestingModule, CoreModule, SharedModule],
        providers: [activatedRouteProvider, emailConfirmationServiceProvider],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(EmailConfirmationComponent);
      component = fixture.componentInstance;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('#ngOnInit', () => {
      it('should not call EmailConfirmationService.confirm', () => {
        // Given
        mockEmailConfirmationService.confirm.and.returnValue(
          of(EmailConfirmation.example())
        );

        // When
        component.ngOnInit();

        // Then
        expect(mockEmailConfirmationService.confirm).not.toHaveBeenCalled();
      });
    });
  });

  describe('when route does not have email param', () => {
    let component: EmailConfirmationComponent;
    let fixture: ComponentFixture<EmailConfirmationComponent>;

    const mockEmailConfirmationService = jasmine.createSpyObj(
      'EmailConfirmationService',
      ['confirm']
    );

    const emailConfirmationServiceProvider: UseValueProvider = {
      provide: EmailConfirmationService,
      useValue: mockEmailConfirmationService,
    };

    const queryParams: { [key: string]: string } = {
      token: 'test@test.com',
    };

    const activatedRouteProvider: UseValueProvider = {
      provide: ActivatedRoute,
      useValue: {
        snapshot: {
          queryParams,
        },
      },
    };

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [EmailConfirmationComponent],
        imports: [RouterTestingModule, CoreModule, SharedModule],
        providers: [activatedRouteProvider, emailConfirmationServiceProvider],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(EmailConfirmationComponent);
      component = fixture.componentInstance;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('#ngOnInit', () => {
      it('should not call EmailConfirmationService.confirm', () => {
        // Given
        mockEmailConfirmationService.confirm.and.returnValue(
          of(EmailConfirmation.example())
        );

        // When
        component.ngOnInit();

        // Then
        expect(mockEmailConfirmationService.confirm).not.toHaveBeenCalled();
      });
    });
  });
});
