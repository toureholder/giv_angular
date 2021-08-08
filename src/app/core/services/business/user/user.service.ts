import { Injectable } from '@angular/core';
import { Listing } from '@shared/models/listing/listing.model';
import { Observable } from 'rxjs';
import { UserApiService } from './api/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: UserApiService) {}

  getListingsByUserId(id: number): Observable<Listing[]> {
    return this.api.getListingsByUserId(id);
  }
}
