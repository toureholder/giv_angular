import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a role of "alert"', () => {
    expect(template.querySelector('div[role="alert"]')).toBeTruthy();
  });

  it('should have a class that corresponds to its type', () => {
    // Given
    component.type = 'success';

    // When
    fixture.detectChanges();

    // Then
    expect(template.querySelector('div[role="alert"]')).toHaveClass(
      component.type
    );
  });
});
