import { Component, Input } from '@angular/core';

export interface TermsLink {
  text: string;
  link: string;
}

@Component({
  selector: 'app-terms-links',
  templateUrl: './terms-links.component.html',
  styleUrls: ['./terms-links.component.scss'],
})
export class TermsLinksComponent {
  @Input() textBeforePrivacyLink?: string;
  @Input() privacyLink?: TermsLink;
  @Input() textBetweenPrivacyAndTermsLinks?: string;
  @Input() termsLink?: TermsLink;
  @Input() textAfterTermsLink?: string;
}
