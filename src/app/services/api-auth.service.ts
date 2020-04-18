import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class ApiAuthService implements HttpInterceptor {

//   constructor() { }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const modifiedRequest = req.clone()
//     return
//   }
// }

export class ApiAuthService { }
