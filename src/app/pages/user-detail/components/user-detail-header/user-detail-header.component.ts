import { Component, Input } from '@angular/core';
import { User } from '@shared/models/user/user.model';

@Component({
  selector: 'app-user-detail-header',
  templateUrl: './user-detail-header.component.html',
  styleUrls: ['./user-detail-header.component.scss'],
})
export class UserDetailHeaderComponent {
  @Input() user?: User;
}
