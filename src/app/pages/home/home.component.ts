import { Component, OnInit } from '@angular/core';
import { StoreLinksData } from '@shared/components/store-links/store-links.component';
import {
  AsyncActionState,
  ComponentAsyncAction,
} from '@shared/models/component_async_action/component_async_action';
import { ListingCategory } from '@shared/models/listing-category/listing-category.model';
import { StoreLinksService } from 'src/app/core/services/business/store-links/store-links.service';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: ListingCategory[] = [];
  getCategoriesRequest = new ComponentAsyncAction();
  storeLinksData?: StoreLinksData;

  constructor(
    private homeService: HomeService,
    private storeLinksService: StoreLinksService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.storeLinksData = this.storeLinksService.getStoreLinks();
  }

  private loadCategories(): void {
    this.getCategoriesRequest.state = AsyncActionState.LOADING;

    this.homeService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
        this.getCategoriesRequest.state = AsyncActionState.SUCCESS;
      },
      (error) => {
        this.getCategoriesRequest.state = AsyncActionState.ERROR;
      }
    );
  }
}
