import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { TextMessagingService } from 'src/app/core/services/text-messaging/text-messaging.service';

import { ContactOwnerModalComponent } from './contact-owner-modal.component';

describe('ContactOwnerModalComponent', () => {
  let component: ContactOwnerModalComponent;
  let fixture: ComponentFixture<ContactOwnerModalComponent>;
  let template: HTMLElement;
  let mockTextMessaging: jasmine.SpyObj<TextMessagingService>;
  let mockTranslate: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    mockTextMessaging = jasmine.createSpyObj('TextMessagingService', ['send']);
    mockTranslate = jasmine.createSpyObj('TranslateService', ['get']);

    const textMessagingProvider: UseValueProvider = {
      provide: TextMessagingService,
      useValue: mockTextMessaging,
    };

    const translateProvider: UseValueProvider = {
      provide: TranslateService,
      useValue: mockTranslate,
    };

    const modalDataProvider: UseValueProvider = {
      provide: MAT_BOTTOM_SHEET_DATA,
      useValue: {},
    };

    await TestBed.configureTestingModule({
      declarations: [ContactOwnerModalComponent],
      imports: [CoreModule, SharedModule],
      providers: [textMessagingProvider, translateProvider, modalDataProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOwnerModalComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onWhatsAppButtonClick', () => {
    const message = 'Lorem ipsum dolor sit amet';

    beforeEach(() => {
      mockTranslate.get.and.returnValue(of(message));
    });

    it('should get message from translation service', () => {
      // Given
      component.data = {
        listingTitle: 'Something nice',
        phoneNumber: '1234567890',
      };

      // When
      component.onWhatsAppButtonClick();

      // Then
      expect(mockTranslate.get).toHaveBeenCalledWith(
        'whatsapp_message_interested',
        { value: component.data.listingTitle }
      );
    });

    it('should send message', () => {
      // Given
      component.data = {
        listingTitle: 'Something nice',
        phoneNumber: '1234567890',
      };

      // When
      component.onWhatsAppButtonClick();

      // Then
      expect(mockTextMessaging.send).toHaveBeenCalledWith(
        component.data.phoneNumber,
        message
      );
    });
  });

  describe('ui integration tests', () => {
    it('should call onClick when button is clicked', () => {
      // Given
      const button = template.querySelector(
        'button[data-test="whatsapp-button"]'
      ) as HTMLButtonElement;

      spyOn(component, 'onWhatsAppButtonClick');

      // When
      button?.click();

      // Then
      expect(component.onWhatsAppButtonClick).toHaveBeenCalled();
    });
  });
});
