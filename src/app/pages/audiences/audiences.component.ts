import { Component } from '@angular/core';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-audiences',
  templateUrl: './audiences.component.html',
  styleUrls: ['./audiences.component.scss']
})
export class AudiencesComponent {
  constructor(public us: UserService) {

  }
}
