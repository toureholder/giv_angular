import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageHeroComponent } from './landing-page-hero.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LandingPageHeroComponent],
  imports: [CommonModule, MatButtonModule, SharedModule],
  exports: [LandingPageHeroComponent],
})
export class LandingPageHeroModule {}
