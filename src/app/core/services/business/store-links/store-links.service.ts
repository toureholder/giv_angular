import { Injectable } from '@angular/core';
import { StoreLinksData } from '@shared/components/store-links/store-links.component';
import { EnvironmentService } from '../../environment/environment.service';
import { OsDetectionService } from '../../os-detection/os-detection.service';

@Injectable({
  providedIn: 'root',
})
export class StoreLinksService {
  constructor(
    private osDetection: OsDetectionService,
    private environment: EnvironmentService
  ) {}

  getStoreLinks(): StoreLinksData {
    const os = this.osDetection.getMobileOS();

    return {
      mobileStoreLink: this.environment.storeLinks[os],
      playStoreLink: this.environment.storeLinks.Android,
      appStoreLink: this.environment.storeLinks.iOS,
    };
  }
}
