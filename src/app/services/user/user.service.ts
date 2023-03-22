import { Injectable } from '@angular/core';
import { getMockUsers } from "./mock-users";
import { delay, Observable, of } from "rxjs";
import { IUser } from "./IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Observable<Array<IUser>>;

  constructor() {
    this.getUsers();
  }

  getUsers() {
    // Mocks a real http call with 1s delay, as if the http service is being used
    this.users = of(getMockUsers()).pipe(delay(1000));
  }
}
