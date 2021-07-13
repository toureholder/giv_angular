import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { EnvironmentService } from 'src/app/core/services/environment/environment.service';
import { TextMessagingService } from 'src/app/core/services/text-messaging/text-messaging.service';

import { ReportListingTileComponent } from './report-listing-tile.component';

describe('ReportListingTileComponent', () => {
  let component: ReportListingTileComponent;
  let fixture: ComponentFixture<ReportListingTileComponent>;
  let mockTranslate: jasmine.SpyObj<TranslateService>;
  let mockEnvironment: EnvironmentService;
  let mockTextMessagingService: jasmine.SpyObj<TextMessagingService>;

  beforeEach(async () => {
    mockTranslate = jasmine.createSpyObj('TranslateService', ['get']);

    mockEnvironment = {
      production: false,
      baseApiUrl: 'https://example.com',
      customerServiceNumber: '1234567890',
    };

    mockTextMessagingService = jasmine.createSpyObj('TextMessagingService', [
      'send',
    ]);

    const translateProvider: UseValueProvider = {
      provide: TranslateService,
      useValue: mockTranslate,
    };

    const environmentProvider: UseValueProvider = {
      provide: EnvironmentService,
      useValue: mockEnvironment,
    };

    const textMessaginProvicer: UseValueProvider = {
      provide: TextMessagingService,
      useValue: mockTextMessagingService,
    };

    await TestBed.configureTestingModule({
      declarations: [ReportListingTileComponent],
      imports: [CoreModule, SharedModule],
      providers: [translateProvider, environmentProvider, textMessaginProvicer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListingTileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onClick', () => {
    it('should get message from translation service', () => {
      // Given
      component.listingTitle = 'Something nice';
      mockTranslate.get.and.returnValue(
        of(
          'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        )
      );

      // When
      component.onClick();

      // Then
      expect(mockTranslate.get).toHaveBeenCalledWith(
        'listing_detail_report_listing_message',
        { value: component.listingTitle }
      );
    });

    it('should delegate sening to text messaging service', () => {
      // Given
      const message = 'Lorem ipsum dolor sit amet';

      mockTranslate.get.and.returnValue(of(message));

      // When
      component.onClick();

      // Then
      expect(mockTextMessagingService.send).toHaveBeenCalledWith(
        mockEnvironment.customerServiceNumber,
        message
      );
    });
  });
});
