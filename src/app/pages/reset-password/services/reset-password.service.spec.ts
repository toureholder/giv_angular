import { TestBed } from '@angular/core/testing';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';

import {
  ResetPasswordRequest,
  ResetPasswordService,
} from './reset-password.service';

describe('ResetPasswordService', () => {
  let service: ResetPasswordService;
  let mockHttpService: jasmine.SpyObj<HttpService>;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj('HttpService', ['post']);

    const httpProvider: UseValueProvider = {
      provide: HttpService,
      useValue: mockHttpService,
    };

    TestBed.configureTestingModule({
      providers: [ResetPasswordService, httpProvider],
    });
    service = TestBed.inject(ResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#requestReset', () => {
    it('should send correct http request', () => {
      // Given
      const request: ResetPasswordRequest = {
        email: 'any@any.com',
        token: 'any',
        newPassword: 'any',
      };

      // When
      service.requestReset(request);

      // Then
      expect(mockHttpService.post).toHaveBeenCalledOnceWith(
        ResetPasswordService.PASSWORD_RESETS_PATH,
        {
          email: 'any@any.com',
          token: 'any',
          new_password: 'any',
        }
      );
    });

    it('should return any observable from http service', () => {
      // Given
      const any = 'any';
      mockHttpService.post.and.returnValue(of(any));

      // When
      service
        .requestReset({
          email: 'any@any.com',
          token: 'any',
          newPassword: 'any',
        })
        .subscribe((val) => {
          expect(val).toEqual(any);
        });
    });
  });
});
