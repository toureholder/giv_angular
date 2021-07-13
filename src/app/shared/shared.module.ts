import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from './components/alert/alert.module';
import { ImageDivModule } from './components/image-div/image-div.module';
import { ListTileModule } from './components/list-tile/list-tile.module';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { TermsLinksModule } from './components/terms-links/terms-links.module';

@NgModule({
  declarations: [],
  imports: [
    ImageDivModule,
    AlertModule,
    ListTileModule,
    TermsLinksModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  exports: [
    ImageDivModule,
    AlertModule,
    ListTileModule,
    TermsLinksModule,
    TranslateModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
})
export class SharedModule {}
