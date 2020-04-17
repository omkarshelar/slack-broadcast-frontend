import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service"
import { Auth } from "aws-amplify";
import { ChangeDetectorRef } from '@angular/core'
import { environment } from "../../environments/environment";

declare var $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user = null;

  constructor(private auth: AuthService, private ref: ChangeDetectorRef) {
    this.auth.user.subscribe(user => {
      this.user = user;
      this.ref.detectChanges();
    });
  }

  ngOnInit() {
    $(document).ready(function () {
      $(".sidenav").sidenav();
    });
  }
  openNav() {
    $(".sidenav").open();
  }
  loginRedirect() {
    const URL = `${environment.oauth_uri}/login?response_type=code&client_id=${environment.client_id}&redirect_uri=${environment.redirect_uri}`;
    window.location.assign(URL);
  }

  logout() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
