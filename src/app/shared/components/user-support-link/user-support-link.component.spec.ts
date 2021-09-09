import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UseValueProvider } from '@testing/helpers';
import { EnvironmentService } from 'src/app/core/services/environment/environment.service';
import { TextMessagingService } from 'src/app/core/services/text-messaging/text-messaging.service';

import { UserSupportLinkComponent } from './user-support-link.component';

describe('UserSupportLinkComponent', () => {
  let component: UserSupportLinkComponent;
  let fixture: ComponentFixture<UserSupportLinkComponent>;
  let template: HTMLElement;
  let mockTextMessagingService: jasmine.SpyObj<TextMessagingService>;
  let mockEnvironment: EnvironmentService;

  beforeEach(async () => {
    mockTextMessagingService = jasmine.createSpyObj('TextMessagingService', [
      'send',
    ]);

    mockEnvironment = EnvironmentService.example();

    const textServiceProvider: UseValueProvider = {
      provide: TextMessagingService,
      useValue: mockTextMessagingService,
    };

    const environmentProvider: UseValueProvider = {
      provide: EnvironmentService,
      useValue: mockEnvironment,
    };

    await TestBed.configureTestingModule({
      declarations: [UserSupportLinkComponent],
      providers: [textServiceProvider, environmentProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSupportLinkComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ui tests', () => {
    it('should have an anchor tag', () => {
      expect(template.querySelector('a')).toBeTruthy();
    });

    it('should call requestSupport with anchor is clicked', () => {
      // Given
      const a = template.querySelector('a');
      spyOn(component, 'requestSupport');

      // When
      a?.click();

      // Then
      expect(component.requestSupport).toHaveBeenCalled();
    });
  });

  describe('#requestSupport', () => {
    it('should call TextMessagingService.send', () => {
      // Given
      component.supportMessageText =
        "God has created your wings not to be dormant. As long as you are alive you must try more and more to use your wings to show you're alive.";

      // When
      component.requestSupport();

      // Then
      expect(mockTextMessagingService.send).toHaveBeenCalledWith(
        mockEnvironment.customerServiceNumber,
        component.supportMessageText
      );
    });

    it('should not call TextMessagingService.send when supportMessageText is undefined', () => {
      // Given
      component.supportMessageText = undefined;

      // When
      component.requestSupport();

      // Then
      expect(mockTextMessagingService.send).not.toHaveBeenCalled();
    });
  });
});
