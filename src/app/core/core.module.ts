import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import { RouterModule } from '@angular/router';
import { NavModule } from './layout/nav/nav.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

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
