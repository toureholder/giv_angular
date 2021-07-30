import { TestBed } from '@angular/core/testing';

import { OS, OsDetectionService } from './os-detection.service';

describe('OsDetectionService', () => {
  let service: OsDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getMobileOS', () => {
    it('should return iOS for Chrome UA on iPhone', () => {
      spyOnProperty(window.navigator, 'userAgent').and.returnValue(
        `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) 
        AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75
        Mobile/14E5239e Safari/602.1`
      );

      expect(service.getMobileOS()).toEqual(OS.iOS);
    });

    it('should return iOS for Mobile Safari UA', () => {
      spyOnProperty(window.navigator, 'userAgent').and.returnValue(
        `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)
        AppleWebKit/603.1.23 (KHTML, like Gecko)
        Version/10.0 Mobile/14E5239e Safari/602.1`
      );

      expect(service.getMobileOS()).toEqual(OS.iOS);
    });

    it('should return iOS forDesktop Safari UA', () => {
      spyOnProperty(window.navigator, 'userAgent').and.returnValue(
        `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)
        AppleWebKit/603.1.23 (KHTML, like Gecko)
        Version/10.0 Mobile/14E5239e Safari/602.1`
      );

      expect(service.getMobileOS()).toEqual(OS.iOS);
    });

    it('should return Android for Chrome for Android UA', () => {
      spyOnProperty(window.navigator, 'userAgent').and.returnValue(
        `Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) 
        AppleWebKit/{WebKit Rev} (KHTML, like Gecko)
        Chrome/{Chrome Rev} Mobile Safari/{WebKit Rev}`
      );

      expect(service.getMobileOS()).toEqual(OS.Android);
    });

    it('should return Android for any other UA', () => {
      spyOnProperty(window.navigator, 'userAgent').and.returnValue(
        `any other UA`
      );

      expect(service.getMobileOS()).toEqual(OS.Android);
    });

    it('should use navigator.vendor if navigator.userAgent is not defined', () => {
      spyOnProperty(window.navigator, 'userAgent').and.returnValue(undefined);

      spyOnProperty(window.navigator, 'vendor').and.returnValue(
        `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) 
        AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75
        Mobile/14E5239e Safari/602.1`
      );

      expect(service.getMobileOS()).toEqual(OS.iOS);
    });
  });
});
