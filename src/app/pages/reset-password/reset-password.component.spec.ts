import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AsyncActionState } from '@shared/models/component_async_action/component_async_action';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { of, throwError } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { ResetPasswordComponent } from './reset-password.component';
import {
  ResetPasswordRequest,
  ResetPasswordService,
} from './services/reset-password.service';

describe('ResetPasswordComponent', () => {
  describe('when route has expected params', () => {
    let component: ResetPasswordComponent;
    let fixture: ComponentFixture<ResetPasswordComponent>;
    let template: HTMLElement;
    let mockResetPasswordService: jasmine.SpyObj<ResetPasswordService>;

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
      mockResetPasswordService = jasmine.createSpyObj('ResetPasswordService', [
        'requestReset',
      ]);

      const resetPasswordServiceProvider: UseValueProvider = {
        provide: ResetPasswordService,
        useValue: mockResetPasswordService,
      };

      await TestBed.configureTestingModule({
        declarations: [ResetPasswordComponent],
        imports: [
          CoreModule,
          SharedModule,
          FormsModule,
          RouterTestingModule,
          MatFormFieldModule,
          MatIconModule,
          MatInputModule,
          MatProgressSpinnerModule,
          NoopAnimationsModule,
        ],
        providers: [resetPasswordServiceProvider, activatedRouteProvider],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ResetPasswordComponent);
      component = fixture.componentInstance;
      template = fixture.nativeElement;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('ui tests', () => {
      let button: HTMLButtonElement | null;

      beforeEach(() => {
        button = template.querySelector('[type="submit"]');
      });

      describe('when state is success', () => {
        beforeEach(() => {
          component.resetPasswordAction.state = AsyncActionState.SUCCESS;
        });

        it('should display success alert when state is success', () => {
          // When
          fixture.detectChanges();

          // Then
          expect(
            template.querySelector('[data-test="success-alert"]')
          ).toBeTruthy();

          expect(
            template.querySelector('[data-test="submit-button-text"]')
          ).toBeTruthy();

          expect(
            template.querySelector('[data-test="submit-button-spinner"]')
          ).toBeFalsy();
        });

        it('should NOT display user support link ', () => {
          // When
          fixture.detectChanges();

          // Then
          expect(template.querySelector('app-user-support-link')).toBeFalsy();
        });
      });

      describe('when state is error', () => {
        beforeEach(() => {
          component.resetPasswordAction.state = AsyncActionState.ERROR;
        });

        it('button should not be disabled', () => {
          // Given
          component.newPassword = '123456';

          // When
          fixture.detectChanges();

          // Then
          expect(button?.disabled).toBeFalse();
        });

        it('should display error alert ', () => {
          // When
          fixture.detectChanges();

          // Then
          expect(
            template.querySelector('[data-test="error-alert"]')
          ).toBeTruthy();

          expect(
            template.querySelector('[data-test="submit-button-text"]')
          ).toBeTruthy();

          expect(
            template.querySelector('[data-test="submit-button-spinner"]')
          ).toBeFalsy();
        });

        it('should display user support link ', () => {
          // When
          fixture.detectChanges();

          // Then
          expect(template.querySelector('app-user-support-link')).toBeTruthy();
        });
      });

      describe('submit button', () => {
        it('should be there', () => {
          expect(button).toBeTruthy();
        });

        it('should start out disabled', () => {
          expect(button?.disabled).toBeTrue();
        });

        describe('when password is under 6 characters', () => {
          beforeEach(() => {
            component.newPassword = '123';
            fixture.detectChanges();
          });

          it('should be disabled', () => {
            expect(button?.disabled).toBeTrue();
          });
        });

        describe('when password is valid', () => {
          const password = '123456';

          beforeEach(() => {
            component.newPassword = password;
            fixture.detectChanges();
          });

          it('should not be disabled', () => {
            expect(button?.disabled).toBeFalse();
          });
        });

        it('should display text when not submitting', () => {
          expect(
            template.querySelector('[data-test="submit-button-spinner"]')
          ).toBeFalsy();

          expect(
            template.querySelector('[data-test="submit-button-text"]')
          ).toBeTruthy();
        });

        it('should display spinner when submitting', () => {
          // Given
          component.resetPasswordAction.state = AsyncActionState.LOADING;

          // When
          fixture.detectChanges();

          // Then
          expect(
            template.querySelector('[data-test="submit-button-spinner"]')
          ).toBeTruthy();

          expect(
            template.querySelector('[data-test="submit-button-text"]')
          ).toBeFalsy();
        });

        it('should be disabled when state is success', () => {
          // Given
          component.newPassword = '123456';
          component.resetPasswordAction.state = AsyncActionState.SUCCESS;

          // When
          fixture.detectChanges();

          // Then
          expect(button?.disabled).toBeTrue();
        });
      });
    });

    describe('#requestPasswordReset', () => {
      it('should call ResetPasswordRequest.requestReset when password is defined', () => {
        // Given
        component.newPassword = '123456';

        // When
        component.requestPasswordReset();

        // Then
        expect(mockResetPasswordService.requestReset).toHaveBeenCalledWith(
          jasmine.objectContaining<ResetPasswordRequest>({
            email: queryParams.email,
            token: queryParams.token,
            newPassword: component.newPassword,
          })
        );
      });

      it('should NOT call ResetPasswordRequest.requestReset when password is undefined', () => {
        // When
        component.requestPasswordReset();

        // Then
        expect(mockResetPasswordService.requestReset).not.toHaveBeenCalled();
      });

      it('should NOT call ResetPasswordRequest.requestReset when password is invalid', () => {
        // Given
        component.newPassword = '123';

        // When
        component.requestPasswordReset();

        // Then
        expect(mockResetPasswordService.requestReset).not.toHaveBeenCalled();
      });

      describe('when ResetPasswordRequest.requestReset succeeds', () => {
        beforeEach(() => {
          // Given
          component.newPassword = '123456';

          mockResetPasswordService.requestReset.and.returnValue(of('any'));
        });

        it('component resetPasswordAction should be in success state', () => {
          // When
          component.requestPasswordReset();

          // Then
          expect(component.resetPasswordAction.isSuccess).toBeTrue();
        });
      });

      describe('when ResetPasswordRequest.requestReset fails', () => {
        beforeEach(() => {
          // Given
          component.newPassword = '123456';

          mockResetPasswordService.requestReset.and.returnValue(
            throwError('any error')
          );
        });

        it('component resetPasswordAction should be in success state', () => {
          // When
          component.requestPasswordReset();

          // Then
          expect(component.resetPasswordAction.isError).toBeTrue();
        });
      });
    });
  });
});
