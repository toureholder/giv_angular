import { Injectable } from '@angular/core';

export enum OS {
  Android = 'Android',
  iOS = 'iOS',
}

@Injectable({
  providedIn: 'root',
})
export class OsDetectionService {
  constructor() {}

  getMobileOS(): OS {
    const userAgent = navigator.userAgent || navigator.vendor;

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return OS.iOS;
    }

    return OS.Android;
  }
}
