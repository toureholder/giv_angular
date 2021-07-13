import { Injectable } from '@angular/core';
import { LocationFilter } from '@shared/models/location-filter/location-filter.model';
import { Location } from '@shared/models/location/location.model';
import { Observable } from 'rxjs';
import { LocationApiService } from './api/location-api.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private api: LocationApiService) {}

  getLocationDetails(filter: LocationFilter): Observable<Location> | undefined {
    return this.api.getLocationDetails(filter);
  }
}
