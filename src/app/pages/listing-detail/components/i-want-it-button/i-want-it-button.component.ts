import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactOwnerModalComponent } from '../contact-owner-modal/contact-owner-modal.component';

@Component({
  selector: 'app-i-want-it-button',
  templateUrl: './i-want-it-button.component.html',
  styleUrls: ['./i-want-it-button.component.scss'],
})
export class IWantItButtonComponent {
  @Input() listingTitle?: string;
  @Input() phoneNumber?: string;

  constructor(private modal: MatBottomSheet) {}

  onClick() {
    if (!this.phoneNumber || !this.listingTitle) {
      return;
    }

    this.modal.open(ContactOwnerModalComponent, {
      data: {
        listingTitle: this.listingTitle,
        phoneNumber: this.phoneNumber,
      },
    });
  }
}
