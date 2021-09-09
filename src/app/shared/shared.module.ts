import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from './components/alert/alert.module';
import { ImageDivModule } from './components/image-div/image-div.module';
import { ListTileModule } from './components/list-tile/list-tile.module';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { TermsLinksModule } from './components/terms-links/terms-links.module';
import { StoreLinksModule } from './components/store-links/store-links.module';
import { DownloadAppCtaModule } from './components/download-app-cta/download-app-cta.module';
import { UserInfoTileModule } from './components/user-info-tile/user-info-tile.module';
import { ImageGridModule } from './components/image-grid/image-grid.module';
import { LoadingSpinnerModule } from './components/loading-spinner/loading-spinner.module';
import { UserSupportLinkModule } from './components/user-support-link/user-support-link.module';

@NgModule({
  declarations: [],
  imports: [
    AlertModule,
    DownloadAppCtaModule,
    ImageDivModule,
    ImageGridModule,
    ListTileModule,
    StoreLinksModule,
    TermsLinksModule,
    UserInfoTileModule,
    UserSupportLinkModule,
    LoadingSpinnerModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  exports: [
    AlertModule,
    DownloadAppCtaModule,
    ImageDivModule,
    ImageGridModule,
    ListTileModule,
    StoreLinksModule,
    TermsLinksModule,
    UserInfoTileModule,
    UserSupportLinkModule,
    LoadingSpinnerModule,
    TranslateModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
})
export class SharedModule {}
