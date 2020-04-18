import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiAuthService } from './services/api-auth.service';
@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiAuthService, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
