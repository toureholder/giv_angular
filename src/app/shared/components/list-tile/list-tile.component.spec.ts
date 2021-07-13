import { ComponentFixture, TestBed } from '@angular/core/testing';
import { assert } from '@testing/helpers';

import { ListTileComponent } from './list-tile.component';

describe('ListTileComponent', () => {
  let component: ListTileComponent;
  let fixture: ComponentFixture<ListTileComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTileComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when it is clickable', () => {
    let element: Element | HTMLButtonElement | null;

    beforeEach(() => {
      // Given
      element = template.querySelector('[data-test="app-list-tile"]');
      component.isClickable = true;

      // When
      fixture.detectChanges();
    });

    it('should have a "clickable" css class', () => {
      // Then
      expect(element).toHaveClass('clickable');
    });

    it('should have a role of "button"', () => {
      expect(element?.getAttribute('role')).toEqual('button');
    });

    it('should emit an event when clicked', () => {
      // Given
      spyOn(component.clickEvent, 'emit');

      // When
      const elementAsButton = element as HTMLButtonElement;
      elementAsButton?.click();

      // Then
      expect(component.clickEvent.emit).toHaveBeenCalled();
    });
  });

  describe('when it is NOT clickable', () => {
    let element: Element | null;

    beforeEach(() => {
      // Given
      element = template.querySelector('[data-test="app-list-tile"]');
      component.isClickable = false;

      // When
      fixture.detectChanges();
    });

    it('should NOT have a "clickable" css class', () => {
      // Then
      expect(element).not.toHaveClass('clickable');
    });

    it('should NOT have a role of "button"', () => {
      const roleAtt = element?.getAttribute('role');

      if (roleAtt) {
        expect(element?.getAttribute('role')).not.toEqual('button');
        return;
      }

      assert(true);
    });

    it('should NOT emit an event when clicked', () => {
      // Given
      spyOn(component.clickEvent, 'emit');

      // When
      const elementAsButton = element as HTMLButtonElement;
      elementAsButton?.click();

      // Then
      expect(component.clickEvent.emit).not.toHaveBeenCalled();
    });
  });
});
