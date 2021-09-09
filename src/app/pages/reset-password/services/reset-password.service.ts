import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';

export interface ResetPasswordRequest {
  email: string;
  token: string;
  newPassword: string;
}

@Injectable()
export class ResetPasswordService {
  constructor(private http: HttpService) {}

  requestReset(request: ResetPasswordRequest): Observable<any> {
    return this.http.post(
      ResetPasswordService.PASSWORD_RESETS_PATH,
      this.resetPasswordRequestToApi(request)
    );
  }

  private resetPasswordRequestToApi(request: ResetPasswordRequest): {
    [key: string]: string;
  } {
    return {
      email: request.email,
      token: request.token,
      new_password: request.newPassword,
    };
  }

  static PASSWORD_RESETS_PATH = '/password_resets';
}
