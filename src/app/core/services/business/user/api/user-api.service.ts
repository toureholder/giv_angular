import { Injectable } from '@angular/core';
import { Listing } from '@shared/models/listing/listing.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../../http/http.service';
import { ListingApiService } from '../../listing/api/listing-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpService) {}

  getListingsByUserId(id: number): Observable<Listing[]> {
    return this.http
      .get(
        UserApiService.USERS_PATH + '/' + id + ListingApiService.LISTINGS_PATH
      )
      ?.pipe(map(Listing.fromJsonListtoList));
  }

  static USERS_PATH = '/users';
}
