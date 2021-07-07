import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCategorySectionComponent } from './components/home-category-section/home-category-section.component';
import { HomeLoadingStateComponent } from './components/home-loading-state/home-loading-state.component';
import { RandomProductGridModule } from './components/random-product-grid/random-product-grid.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCategorySectionComponent,
    HomeLoadingStateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RandomProductGridModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
