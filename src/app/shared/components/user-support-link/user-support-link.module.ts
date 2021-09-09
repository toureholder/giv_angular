import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSupportLinkComponent } from './user-support-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserSupportLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserSupportLinkComponent],
})
export class UserSupportLinkModule {}
