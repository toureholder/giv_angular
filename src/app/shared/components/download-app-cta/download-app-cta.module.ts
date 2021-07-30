import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadAppCtaComponent } from './download-app-cta.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { StoreLinksModule } from '../store-links/store-links.module';

@NgModule({
  declarations: [DownloadAppCtaComponent],
  imports: [CommonModule, TranslateModule, MatButtonModule, StoreLinksModule],
  exports: [DownloadAppCtaComponent],
})
export class DownloadAppCtaModule {}
