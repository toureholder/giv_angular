import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmailConfirmation } from '@shared/models/email-confirmation/email-confirmation.model';
import { Observable } from 'rxjs';
import { EnvironmentService } from 'src/app/core/services/environment/environment.service';
import { TextMessagingService } from 'src/app/core/services/text-messaging/text-messaging.service';
import { EmailConfirmationService } from './services/email-confirmation.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss'],
})
export class EmailConfirmationComponent implements OnInit {
  emailConfirmation?: EmailConfirmation;
  emailConfirmationError?: any;
  email?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailConfirmationService: EmailConfirmationService
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.queryParams;
    this.email = params.email;
    this.getEmailConfirmation(params);
  }

  private getEmailConfirmation(params: Params) {
    if (!params.email || !params.token) {
      return;
    }

    this.emailConfirmationService
      .confirm({
        email: params.email,
        token: params.token,
      })
      .subscribe(
        (val) => {
          this.emailConfirmation = val;
        },
        (error) => {
          this.emailConfirmationError = error;
        }
      );
  }
}
