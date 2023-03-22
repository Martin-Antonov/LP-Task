import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent {
  @Input() name: string;
  @Input() devices: number;
  @Input() sessions: number;
  @Input() location: string;
  @Input() selected: boolean;

  get info(): string {
    return `${this.devices} Devices - ${this.sessions} Sessions - ${this.location}`
  }

  @HostBinding('class.selected') get isSelected() { return this.selected; }
}
