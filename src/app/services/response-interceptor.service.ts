import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class ResponseInterceptorService {
  constructor(public toasterService: ToastrService) {}

  /**
   * HTTP interceptor to intercept response.
   * This function taps the intercepted observable and shows toaster messages received from the API.
   * Returns the observable to the app for further biz login implementation.
   * @param  {HttpRequest<any>} req
   * @param  {HttpHandler} next
   * @returns Observable
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (response) => {
          if (
            response instanceof HttpResponse &&
            response.ok &&
            response.body.message
          ) {
            this.toasterService.success(response.body.message, "Success", {
              positionClass: "toast-bottom-center",
            });
          }
        },
        (errorResponse) => {
          if (
            errorResponse.status === 404 &&
            errorResponse.url.endsWith("/channels")
          ) {
            return;
          }
          if (
            errorResponse instanceof HttpErrorResponse &&
            !errorResponse.ok &&
            errorResponse.error.message
          ) {
            this.toasterService.error(errorResponse.error.message, "Error", {
              positionClass: "toast-bottom-center",
            });
          }
        }
      )
    );
  }
}
