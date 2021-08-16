import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { UseValueProvider } from '@testing/helpers';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

let mockTranslate: jasmine.SpyObj<TranslateService>;

describe('AppComponent', () => {
  mockTranslate = jasmine.createSpyObj('TranslateService', [
    'addLangs',
    'getBrowserLang',
    'setDefaultLang',
    'use',
  ]);

  const translateProvider: UseValueProvider = {
    provide: TranslateService,
    useValue: mockTranslate,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      declarations: [AppComponent],
      providers: [translateProvider],
    }).compileComponents();
  });

  describe('#translate', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    describe('when browser language is english', () => {
      const language = 'en';

      beforeEach(() => {
        mockTranslate.getBrowserLang.and.returnValue(language);
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
      });

      it('should create the app', () => {
        expect(app).toBeTruthy();
      });

      it('should use english', () => {
        expect(mockTranslate.use).toHaveBeenCalledWith(language);
      });
    });

    describe('when browser language is portuguese', () => {
      const language = 'pt';

      beforeEach(() => {
        mockTranslate.getBrowserLang.and.returnValue(language);
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
      });

      it('should create the app', () => {
        expect(app).toBeTruthy();
      });

      it('should use portuguese', () => {
        expect(mockTranslate.use).toHaveBeenCalledWith(language);
      });
    });

    describe('when browser language is not suuported', () => {
      const language = 'fr';
      const defaultLanguage = 'en';

      beforeEach(() => {
        mockTranslate.getBrowserLang.and.returnValue(language);
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
      });

      it('should create the app', () => {
        expect(app).toBeTruthy();
      });

      it('should use default language', () => {
        expect(mockTranslate.use).toHaveBeenCalledWith(defaultLanguage);
      });
    });
  });
});
