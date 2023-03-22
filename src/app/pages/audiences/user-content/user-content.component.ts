import { IUser } from "../../../services/user/IUser";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent {
  @Input() user: IUser;

  constructor() {

  }

  get subtitle(): string {
    return `${new Date(this.user.created).toLocaleDateString('en-us', this.dateOptions)} - ${this.user.location}`
  }

  get boxesInfo(): Array<{title: string, subtitle: number}> {
    return [
      {title: 'Devices', subtitle: this.user.devices},
      {title: 'Sessions', subtitle: this.user.sessions.length},
      {title: 'Events', subtitle: this.user.events},
    ]
  }

  private dateOptions: Object = {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'}
}
