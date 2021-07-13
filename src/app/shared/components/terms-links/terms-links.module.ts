import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsLinksComponent } from './terms-links.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TermsLinksComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TermsLinksComponent],
})
export class TermsLinksModule {}
