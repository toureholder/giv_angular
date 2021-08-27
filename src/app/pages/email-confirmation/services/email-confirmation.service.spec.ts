import { TestBed } from '@angular/core/testing';
import { EmailConfirmation } from '@shared/models/email-confirmation/email-confirmation.model';
import { User } from '@shared/models/user/user.model';
import postEmailConfirmationJson from '@testing/fake-api-responses/email-confirmations/post.json';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { EmailConfirmationService } from './email-confirmation.service';

describe('EmailConfirmationService', () => {
  let service: EmailConfirmationService;
  let mockHttp: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpService', ['post']);

    const httpProvider: UseValueProvider = {
      provide: HttpService,
      useValue: mockHttp,
    };

    TestBed.configureTestingModule({ providers: [httpProvider] });
    service = TestBed.inject(EmailConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#confirm', () => {
    it('should send correct http request', () => {
      // Given
      const email = 'email@example.com';
      const token = 'any';
      const json = postEmailConfirmationJson;
      mockHttp.post.and.returnValue(of(json));

      // When
      service.confirm({ email, token });

      // Then
      expect(mockHttp.post).toHaveBeenCalledOnceWith(
        EmailConfirmationService.EMAIL_CONFIMRATION_PATH,
        { email, token }
      );
    });

    it('should return EmailConfirmationResponse observable', () => {
      // Given
      const json = postEmailConfirmationJson;
      mockHttp.post.and.returnValue(of(json));

      // When
      service
        .confirm({ email: 'any', token: 'any' })
        .subscribe((val: EmailConfirmation) => {
          expect(val).toEqual(
            jasmine.objectContaining<EmailConfirmation>({
              message: 'Account successfully activated',
              user: jasmine.objectContaining<User>({
                name: 'Touré Holder',
              }),
            })
          );
        });
    });
  });
});
