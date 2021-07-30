import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreLinksComponent } from './store-links.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [StoreLinksComponent],
  imports: [CommonModule, MatButtonModule, TranslateModule],
  exports: [StoreLinksComponent],
})
export class StoreLinksModule {}
