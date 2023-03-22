import { Injectable } from '@angular/core';
import { getMockUsers } from "./mock-users";
import { delay, Observable, of } from "rxjs";
import { IUser } from "./IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Observable<Array<IUser>>;
  selectedUserIndex: number = -1;

  constructor() {
    this.getUsers();
  }

  // Mocks a real http call with 1s delay.
  private getUsers() {
    this.users = of(getMockUsers()).pipe(delay(1000));
  }

  selectUser(index: number) {
    this.selectedUserIndex = index;
  }
}
