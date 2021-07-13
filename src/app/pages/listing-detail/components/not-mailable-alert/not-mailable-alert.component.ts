import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-mailable-alert',
  templateUrl: './not-mailable-alert.component.html',
  styleUrls: ['./not-mailable-alert.component.scss'],
})
export class NotMailableAlertComponent {
  @Input() address?: string;
}
