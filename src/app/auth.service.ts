import { Injectable } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<any>();
  constructor() {
    this.getUser();
    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
          this.getUser();
          break;
      }
    }
    Hub.listen('auth', listener);
  }

  async getUser() {
    const user = await Auth.currentUserInfo();
    return this.user.next(user);
  }
}
