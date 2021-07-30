import { Component, Input } from '@angular/core';

export interface StoreLinksData {
  mobileStoreLink?: string;
  playStoreLink?: string;
  appStoreLink?: string;
}

@Component({
  selector: 'app-store-links',
  templateUrl: './store-links.component.html',
  styleUrls: ['./store-links.component.scss'],
})
export class StoreLinksComponent {
  @Input() data?: StoreLinksData;
  @Input() centerContent?: boolean;
  @Input() useBadges?: boolean;
}
