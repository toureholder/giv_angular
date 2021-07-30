import { Component, Input, OnInit } from '@angular/core';
import { StoreLinksData } from '../store-links/store-links.component';

@Component({
  selector: 'app-download-app-cta',
  templateUrl: './download-app-cta.component.html',
  styleUrls: ['./download-app-cta.component.scss'],
})
export class DownloadAppCtaComponent {
  @Input() storeLinks?: StoreLinksData;
  @Input() centerStoreLinks?: boolean;
  @Input() useStoreBadges?: boolean;
}
