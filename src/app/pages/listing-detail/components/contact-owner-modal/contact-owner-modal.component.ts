import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TextMessagingService } from 'src/app/core/services/text-messaging/text-messaging.service';

export interface ContactOwnerModalData {
  listingTitle: string;
  phoneNumber: string;
}

@Component({
  templateUrl: './contact-owner-modal.component.html',
  styleUrls: ['./contact-owner-modal.component.scss'],
})
export class ContactOwnerModalComponent {
  constructor(
    private textMessaging: TextMessagingService,
    private translate: TranslateService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: ContactOwnerModalData
  ) {}

  onWhatsAppButtonClick() {
    this.getMessage().subscribe((message: string) => {
      this.textMessaging.send(this.data.phoneNumber, message);
    });
  }

  private getMessage(): Observable<any> {
    return this.translate.get('whatsapp_message_interested', {
      value: this.data.listingTitle,
    });
  }
}
