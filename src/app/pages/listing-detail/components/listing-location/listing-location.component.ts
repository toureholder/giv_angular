import { Component, Input } from '@angular/core';
import { Location } from '@shared/models/location/location.model';

@Component({
  selector: 'app-listing-location',
  templateUrl: './listing-location.component.html',
  styleUrls: ['./listing-location.component.scss'],
})
export class ListingLocationComponent {
  @Input() location?: Location;
}
