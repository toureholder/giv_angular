import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OS } from '../os-detection/os-detection.service';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  production: boolean = environment.production;
  baseApiUrl: string = environment.baseApiUrl;
  customerServiceNumber: string = environment.customerServiceNumber;
  storeLinks: { [key in keyof typeof OS]: string } = {
    Android: environment.storeLinks.android,
    iOS: environment.storeLinks.iOS,
  };

  public static example(): EnvironmentService {
    return {
      production: false,
      baseApiUrl: 'https://example.com',
      customerServiceNumber: '1234567890',
      storeLinks: {
        Android: 'https://play.google.com/store/apps/example',
        iOS: 'https://apps.apple.com/us/app/example/id1234567899?',
      },
    };
  }
}
