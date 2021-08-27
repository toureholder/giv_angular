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
  private email?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailConfirmationService: EmailConfirmationService,
    private textMessaging: TextMessagingService,
    private environment: EnvironmentService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.queryParams;
    this.email = params.email;
    this.getEmailConfirmation(params);
  }

  requestAssistance() {
    this.getMessage().subscribe((message: string) => {
      this.textMessaging.send(this.environment.customerServiceNumber, message);
    });
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

  private getMessage(): Observable<any> {
    return this.translate.get(
      'email_confirmation_error_reques_assistance_message',
      {
        value: this.email,
      }
    );
  }
}
