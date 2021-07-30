import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { assert } from '@testing/helpers';
import { CoreModule } from 'src/app/core/core.module';
import { StoreLinksComponent } from './store-links.component';

describe('StoreLinksComponent', () => {
  let component: StoreLinksComponent;
  let fixture: ComponentFixture<StoreLinksComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreLinksComponent],
      imports: [CoreModule, TranslateModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLinksComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ui tests', () => {
    describe('#data.mobileStoreLink', () => {
      it('should have a link to mobile store', () => {
        // Given
        component.data = {
          mobileStoreLink: 'https://play.google.com/store/apps/example',
          playStoreLink: 'https://play.google.com/store/apps/example',
          appStoreLink: 'https://apps.apple.com/us/app/example/id1234567899?',
        };

        // When
        fixture.detectChanges();

        // Then
        const link = template.querySelector(
          `a[href="${component.data.mobileStoreLink}"]`
        );

        expect(link).toBeTruthy();
      });
    });

    describe('#data.playStoreLink', () => {
      it('should have a link to play store if set', () => {
        // Given
        component.data = {
          mobileStoreLink: 'https://play.google.com/store/apps/example',
          playStoreLink: 'https://play.google.com/store/apps/example',
        };

        // When
        fixture.detectChanges();

        // Then
        const link = template.querySelector(
          `a[data-test="play-store-link"]`
        ) as HTMLAnchorElement;

        expect(link).toBeTruthy();

        if (component.data?.playStoreLink) {
          expect(link.href).toEqual(component.data.playStoreLink);
          return;
        }

        assert(true);
      });

      it('should NOT have a link to play store if NOT set', () => {
        // Given
        component.data = {
          mobileStoreLink: 'https://play.google.com/store/apps/example',
          appStoreLink: 'https://apps.apple.com/us/app/example/id1234567899?',
        };

        // When
        fixture.detectChanges();

        // Then
        const link = template.querySelector(`a[data-test="play-store-link"]`);

        expect(link).not.toBeTruthy();
      });
    });

    describe('#data.appStoreLink', () => {
      it('should have a link to app store if set', () => {
        // Given
        component.data = {
          mobileStoreLink: 'https://play.google.com/store/apps/example',
          appStoreLink: 'https://apps.apple.com/us/app/example/id1234567899?',
        };

        // When
        fixture.detectChanges();

        // Then
        const link = template.querySelector(
          `a[data-test="app-store-link"]`
        ) as HTMLAnchorElement;

        expect(link).toBeTruthy();

        if (component.data?.appStoreLink) {
          expect(link.href).toEqual(component.data.appStoreLink);
          return;
        }

        assert(true);
      });

      it('should NOT have a link to app store if NOT set', () => {
        // Given
        component.data = {
          mobileStoreLink: 'https://play.google.com/store/apps/example',
          playStoreLink: 'https://play.google.com/store/apps/example',
        };

        // When
        fixture.detectChanges();

        // Then
        const link = template.querySelector(`a[data-test="app-store-link"]`);

        expect(link).not.toBeTruthy();
      });
    });

    describe('#centerContent', () => {
      it('should apply .center-content class', () => {
        // Given
        component.centerContent = true;

        // When
        fixture.detectChanges();

        // Then
        expect(template.querySelector('[data-test="desktop-view"')).toHaveClass(
          'center-content'
        );
      });
    });

    describe('#useBadges', () => {
      it('should display only badges when true', () => {
        // Given
        component.useBadges = true;

        component.data = {
          mobileStoreLink: 'https://play.google.com/store/apps/example',
          appStoreLink: 'https://apps.apple.com/us/app/example/id1234567899?',
          playStoreLink: 'https://apps.apple.com/us/app/example/id1234567899?',
        };

        // When
        fixture.detectChanges();

        // Then
        expect(
          template.querySelector(`a[data-test="play-store-link"]`)
        ).toBeFalsy();

        expect(
          template.querySelector(`a[data-test="app-store-link"]`)
        ).toBeFalsy();

        expect(
          template.querySelector(`a[data-test="play-store-badge"]`)
        ).toBeTruthy();

        expect(
          template.querySelector(`a[data-test="app-store-badge"]`)
        ).toBeTruthy();
      });

      it('should display only links when false', () => {
        // Given
        component.useBadges = false;

        component.data = {
          mobileStoreLink: 'https://play.google.com/store/apps/example',
          appStoreLink: 'https://apps.apple.com/us/app/example/id1234567899?',
          playStoreLink: 'https://apps.apple.com/us/app/example/id1234567899?',
        };

        // When
        fixture.detectChanges();

        // Then
        expect(
          template.querySelector(`a[data-test="play-store-link"]`)
        ).toBeTruthy();

        expect(
          template.querySelector(`a[data-test="app-store-link"]`)
        ).toBeTruthy();

        expect(
          template.querySelector(`a[data-test="play-store-badge"]`)
        ).toBeFalsy();

        expect(
          template.querySelector(`a[data-test="app-store-badge"]`)
        ).toBeFalsy();
      });
    });
  });
});
