import { TestBed } from '@angular/core/testing';

import { TextMessagingService } from './text-messaging.service';

describe('TextMessagingService', () => {
  let service: TextMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextMessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#send', () => {
    it('should open whatsapp click to chat link', () => {
      // Given
      const number = '+1234567890';
      const message = 'Lorem ipsum dolor sit amet';
      const encoded = encodeURIComponent(message);
      spyOn(window, 'open');

      // When
      service.send(number, message);

      // Then
      expect(window.open).toHaveBeenCalledWith(
        `https://wa.me/${number}?text=${encoded}`,
        '_blank'
      );
    });
  });
});
