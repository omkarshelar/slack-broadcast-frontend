import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, from } from "rxjs";
import { Auth } from "aws-amplify";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppGuard implements CanActivate, CanLoad {
  /**
   * Authenticate the user using Amplify.
   * Returns true if user is authenticated.
   * If user is not authenticated, go to SSO login.
   * @param  {ActivatedRouteSnapshot} next
   * @param  {RouterStateSnapshot} state
   * @returns Boolean
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userInfo = from(Auth.currentUserInfo());
    return userInfo.pipe(
      map((auth) => {
        if (auth) {
          return true;
        }
        const URL = `${environment.oauth_uri}/login?response_type=code&client_id=${environment.client_id}&redirect_uri=${environment.redirect_uri}`;
        window.location.assign(URL);
        return false;
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userInfo = from(Auth.currentUserInfo());
    return userInfo.pipe(
      map((auth) => {
        if (auth) {
          return true;
        }
        const URL = `${environment.oauth_uri}/login?response_type=code&client_id=${environment.client_id}&redirect_uri=${environment.redirect_uri}`;
        window.location.assign(URL);
        return false;
      })
    );
  }
}
