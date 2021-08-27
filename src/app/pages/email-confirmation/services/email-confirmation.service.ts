import { Injectable } from '@angular/core';
import { EmailConfirmation } from '@shared/models/email-confirmation/email-confirmation.model';
import { User } from '@shared/models/user/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http/http.service';

export interface EmailConfirmationRequest {
  email: string;
  token: string;
}

@Injectable()
export class EmailConfirmationService {
  constructor(private httpService: HttpService) {}

  confirm(data: EmailConfirmationRequest): Observable<EmailConfirmation> {
    return this.httpService
      .post(EmailConfirmationService.EMAIL_CONFIMRATION_PATH, data)
      .pipe(map(EmailConfirmation.fromJson));
  }

  static EMAIL_CONFIMRATION_PATH = '/email_confirmations';
}
