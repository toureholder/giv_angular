import { Injectable } from '@angular/core';
import { LocationFilter } from '@shared/models/location-filter/location-filter.model';
import { Location } from '@shared/models/location/location.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class LocationApiService {
  constructor(private http: HttpService) {}

  getLocationDetails(filter: LocationFilter): Observable<Location> {
    return this.http
      .get(
        LocationApiService.LOCATIONS_PATH + LocationApiService.DETAILS_PATH,
        filter.serialize()
      )
      .pipe(map(Location.fromJson));
  }

  static LOCATIONS_PATH = '/locations';
  static DETAILS_PATH = '/details';
}
