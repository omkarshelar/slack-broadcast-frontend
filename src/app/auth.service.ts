import { Injectable } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { Subject } from 'rxjs';
import { NgZone } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<any>();
  constructor(private ngZone: NgZone) {
    this.ngZone.run(() => this.getUser());
    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
          /*
          Run the code "this.getUser()" inside ngZone only. Not running will result in calling ref.detectChanges() in navbar.component.ts. Doing so breaks the routing of the application on the first load after login.
          When getUser runs inside ngZone, ref.detectChanges is also not required.
          Ref : https://stackoverflow.com/questions/53133544/angular-7-routerlink-directive-warning-navigation-triggered-outside-angular-zon
          */
          this.ngZone.run(() => this.getUser());
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
