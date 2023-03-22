import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-box',
  templateUrl: './user-info-box.component.html',
  styleUrls: ['./user-info-box.component.scss']
})
export class UserInfoBoxComponent {
  @Input() title: string;
  @Input() subtitle: number;
}
