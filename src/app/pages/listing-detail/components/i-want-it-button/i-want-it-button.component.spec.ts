import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SharedModule } from '@shared/shared.module';
import { UseValueProvider } from '@testing/helpers';
import { CoreModule } from 'src/app/core/core.module';
import { IWantItButtonComponent } from './i-want-it-button.component';

describe('IWantItButtonComponent', () => {
  let component: IWantItButtonComponent;
  let fixture: ComponentFixture<IWantItButtonComponent>;
  let template: HTMLElement;
  let mockModal: jasmine.SpyObj<MatBottomSheet>;

  beforeEach(async () => {
    mockModal = jasmine.createSpyObj('MatBottomSheet', ['open']);

    const bottomSheetProvider: UseValueProvider = {
      provide: MatBottomSheet,
      useValue: mockModal,
    };

    await TestBed.configureTestingModule({
      declarations: [IWantItButtonComponent],
      imports: [CoreModule, SharedModule],
      providers: [bottomSheetProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IWantItButtonComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onClick', () => {
    it('should open dialog when phone number and listing title are defined', () => {
      // Given
      component.listingTitle = 'Something nice';
      component.phoneNumber = '1234567890';

      // When
      component.onClick();

      // Then
      expect(mockModal.open).toHaveBeenCalledWith(jasmine.any(Function), {
        data: {
          listingTitle: component.listingTitle,
          phoneNumber: component.phoneNumber,
        },
      });
    });

    it('should NOT open dialog when phone number is undefined', () => {
      // Given
      component.listingTitle = 'Something nice';

      // When
      component.onClick();

      // Then
      expect(mockModal.open).not.toHaveBeenCalled();
    });

    it('should NOT open dialog when listing title is undefined', () => {
      // Given
      component.phoneNumber = '1234567890';

      // When
      component.onClick();

      // Then
      expect(mockModal.open).not.toHaveBeenCalled();
    });
  });

  describe('ui integration tests', () => {
    it('should call onClick when button is clicked', () => {
      // Given
      const button = template.querySelector('button');
      spyOn(component, 'onClick');

      // When
      button?.click();

      // Then
      expect(component.onClick).toHaveBeenCalled();
    });
  });
});
