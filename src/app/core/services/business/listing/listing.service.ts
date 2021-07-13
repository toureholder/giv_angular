import { Injectable } from '@angular/core';
import { Listing } from '@shared/models/listing/listing.model';
import { Observable } from 'rxjs';
import { ListingApiService } from './api/listing-api.service';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private api: ListingApiService) {}

  getOne(id: number): Observable<Listing> | undefined {
    return this.api.getOne(id);
  }
}
