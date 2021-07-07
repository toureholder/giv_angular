import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ListingCategory } from 'src/app/shared/models/listing-category/listing-category.model';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
  constructor(private http: HttpService) {}

  getCategories(): Observable<ListingCategory[]> {
    return this.http
      .get(HomeService.HOME_PATH + HomeService.FEATURED_CATEGORIES_PATH)
      .pipe(map(ListingCategory.fromJsonListToList));
  }

  static HOME_PATH = '/home';
  static FEATURED_CATEGORIES_PATH = '/categories/featured';
}
