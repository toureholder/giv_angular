import { Injectable } from '@angular/core';
import { Listing } from '@shared/models/listing/listing.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ListingApiService {
  constructor(private http: HttpService) {}

  getOne(id: number): Observable<Listing> {
    return this.http
      .get(ListingApiService.LISTINGS_PATH + '/' + id)
      .pipe(map(Listing.fromJson));
  }

  static LISTINGS_PATH = '/listings';
}
