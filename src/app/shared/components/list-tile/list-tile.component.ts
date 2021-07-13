import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss'],
})
export class ListTileComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() isClickable?: boolean;
  @Output() clickEvent = new EventEmitter();

  onClick(): void {
    if (!this.isClickable) {
      return;
    }

    this.clickEvent.emit();
  }
}
