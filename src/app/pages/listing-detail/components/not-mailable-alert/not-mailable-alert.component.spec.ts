import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { NotMailableAlertComponent } from './not-mailable-alert.component';

describe('NotMailableAlertComponent', () => {
  let component: NotMailableAlertComponent;
  let fixture: ComponentFixture<NotMailableAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotMailableAlertComponent],
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMailableAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
