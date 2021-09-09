import { Component, Input } from '@angular/core';
import { EnvironmentService } from 'src/app/core/services/environment/environment.service';
import { TextMessagingService } from 'src/app/core/services/text-messaging/text-messaging.service';

@Component({
  selector: 'app-user-support-link',
  templateUrl: './user-support-link.component.html',
  styleUrls: ['./user-support-link.component.scss'],
})
export class UserSupportLinkComponent {
  @Input() questionText?: string;
  @Input() linkText?: string;
  @Input() supportMessageText?: string;

  constructor(
    private textMessaging: TextMessagingService,
    private environment: EnvironmentService
  ) {}

  requestSupport() {
    if (!this.supportMessageText) {
      return;
    }

    this.textMessaging.send(
      this.environment.customerServiceNumber,
      this.supportMessageText
    );
  }
}
