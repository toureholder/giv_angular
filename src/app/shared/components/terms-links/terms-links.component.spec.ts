import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';

import { TermsLinksComponent } from './terms-links.component';

describe('TermsLinksComponent', () => {
  let component: TermsLinksComponent;
  let fixture: ComponentFixture<TermsLinksComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsLinksComponent],
      imports: [CoreModule, TranslateModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsLinksComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
