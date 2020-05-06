import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Auth } from "aws-amplify";
import { environment } from "../../environments/environment";

declare var $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  user = null;

  constructor(private auth: AuthService) {
    this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  /**
   * This is a materilize css dependency.
   */
  ngOnInit() {
    $(document).ready(function () {
      $(".sidenav").sidenav();
    });
  }

  /**
   * Dependecy of materilize for the navbar to work on mobile devices.
   */
  openNav() {
    $(".sidenav").open();
  }

  /**
   * Redirect user to SSo login with appropriate methods.
   */
  loginRedirect() {
    const URL = `${environment.oauth_uri}/login?response_type=code&client_id=${environment.client_id}&redirect_uri=${environment.redirect_uri}`;
    window.location.assign(URL);
  }

  /**
   * Invokes the AMplify logout method to log out the user.
   */
  logout() {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
