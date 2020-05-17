import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
declare var gtag: Function;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "slack-broadcast";
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag("config", "UA-114652654-3", {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
