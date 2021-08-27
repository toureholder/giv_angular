import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailConfirmationRoutingModule } from './email-confirmation-routing.module';
import { EmailConfirmationComponent } from './email-confirmation.component';
import { SharedModule } from '@shared/shared.module';
import { EmailConfirmationService } from './services/email-confirmation.service';

@NgModule({
  declarations: [EmailConfirmationComponent],
  imports: [CommonModule, EmailConfirmationRoutingModule, SharedModule],
  providers: [EmailConfirmationService],
})
export class EmailConfirmationModule {}
