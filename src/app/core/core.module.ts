import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoader } from './i18n/custom_translate_loader';
import { MainComponent } from './layout/main/main.component';
import { NavModule } from './layout/nav/nav.module';
import { FooterComponent } from './layout/footer/footer.component';
import { DownloadAppCtaModule } from '@shared/components/download-app-cta/download-app-cta.module';
import { TermsLinksModule } from '@shared/components/terms-links/terms-links.module';

@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
      },
    }),

    // app
    NavModule,
    DownloadAppCtaModule,
    TermsLinksModule,
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
