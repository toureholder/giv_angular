import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { LandingPageFeaturesComponent } from './landing-page-features/landing-page-features.component';
import { LandingPageHeroComponent } from './landing-page-hero/landing-page-hero.component';
import { StoreLinksComponent } from '../../../../shared/components/store-links/store-links.component';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent,
        LandingPageHeroComponent,
        LandingPageFeaturesComponent,
        StoreLinksComponent,
      ],
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
