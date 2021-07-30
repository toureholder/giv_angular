import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageHeroModule } from './landing-page-hero/landing-page-hero.module';
import { LandingPageFeaturesComponent } from './landing-page-features/landing-page-features.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent, LandingPageFeaturesComponent],
  imports: [CommonModule, LandingPageHeroModule, SharedModule],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
