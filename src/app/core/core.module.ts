import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import { RouterModule } from '@angular/router';
import { NavModule } from './layout/nav/nav.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    // app
    NavModule,
  ],
  exports: [
    // modules
    BrowserModule,
    BrowserAnimationsModule,

    // components
    MainComponent,
  ],
})
export class CoreModule {}
