import { Component, OnInit } from '@angular/core';
import { StoreLinksService } from 'src/app/core/services/business/store-links/store-links.service';
import { StoreLinksData } from '../../../../../shared/components/store-links/store-links.component';

@Component({
  selector: 'app-landing-page-hero',
  templateUrl: './landing-page-hero.component.html',
  styleUrls: ['./landing-page-hero.component.scss'],
})
export class LandingPageHeroComponent implements OnInit {
  storeLinksData?: StoreLinksData;

  constructor(private storeLinksService: StoreLinksService) {}

  ngOnInit(): void {
    this.storeLinksData = this.storeLinksService.getStoreLinks();
  }
}
