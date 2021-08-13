import { Component, OnInit } from '@angular/core';
import { StoreLinksData } from '@shared/components/store-links/store-links.component';
import { StoreLinksService } from '../../services/business/store-links/store-links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  storeLinksData?: StoreLinksData;

  constructor(private storeLinksService: StoreLinksService) {}

  ngOnInit(): void {
    this.storeLinksData = this.storeLinksService.getStoreLinks();
  }
}
