import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoTileComponent } from './user-info-tile.component';
import { ListTileModule } from '../list-tile/list-tile.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserInfoTileLoadingStateComponent } from './user-info-tile-loading-state/user-info-tile-loading-state.component';

@NgModule({
  declarations: [UserInfoTileComponent, UserInfoTileLoadingStateComponent],
  imports: [CommonModule, ListTileModule, TranslateModule],
  exports: [UserInfoTileComponent],
})
export class UserInfoTileModule {}
