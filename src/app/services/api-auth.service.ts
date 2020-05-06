import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Auth } from "aws-amplify";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/mergeMap";

@Injectable({
  providedIn: "root",
})
export class ApiAuthService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.getIDToken().mergeMap((data) => {
      let newHeaders = req.headers;
      newHeaders = newHeaders.append(
        "Authorization",
        "Bearer " + data["idToken"]["jwtToken"]
      );
      const authReq = req.clone({ headers: newHeaders });
      return next.handle(authReq);
    });
  }

  getIDToken() {
    return Observable.fromPromise(Auth.currentSession());
  }
}
