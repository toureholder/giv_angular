import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@shared/models/user/user.model';

@Component({
  selector: 'app-user-info-tile',
  templateUrl: './user-info-tile.component.html',
  styleUrls: ['./user-info-tile.component.scss'],
})
export class UserInfoTileComponent {
  @Input() user?: User;
  @Input() isClickable?: boolean;

  constructor(public translateService: TranslateService) {}
}
