import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { AuthService } from "../../auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = null;
  constructor(private auth: AuthService) {
    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

  loginRedirect() {
    const URL = `${environment.oauth_uri}/login?response_type=code&client_id=${environment.client_id}&redirect_uri=${environment.redirect_uri}`;
    window.location.assign(URL);
  }

}
