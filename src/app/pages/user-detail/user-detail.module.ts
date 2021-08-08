import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailHeaderComponent } from './components/user-detail-header/user-detail-header.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [UserDetailComponent, UserDetailHeaderComponent],
  imports: [CommonModule, SharedModule, UserDetailRoutingModule],
})
export class UserDetailModule {}
