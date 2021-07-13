import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EnvironmentService } from 'src/app/core/services/environment/environment.service';
import { TextMessagingService } from 'src/app/core/services/text-messaging/text-messaging.service';

@Component({
  selector: 'app-report-listing-tile',
  templateUrl: './report-listing-tile.component.html',
  styleUrls: ['./report-listing-tile.component.scss'],
})
export class ReportListingTileComponent {
  @Input() listingTitle?: string;

  constructor(
    private environment: EnvironmentService,
    private translate: TranslateService,
    private textMessaging: TextMessagingService
  ) {}

  onClick(): void {
    this.getMessage().subscribe((message: string) => {
      this.textMessaging.send(this.environment.customerServiceNumber, message);
    });
  }

  private getMessage(): Observable<any> {
    return this.translate.get('listing_detail_report_listing_message', {
      value: this.listingTitle,
    });
  }
}
