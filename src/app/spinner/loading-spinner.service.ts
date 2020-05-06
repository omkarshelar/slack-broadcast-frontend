import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class LoadingSpinnerService {
  loader = new Subject<boolean>();
  constructor() {}

  /**
   * Returns the subject reference for the component to subscribe to.
   * @returns Subject
   */
  getLoader(): Subject<boolean> {
    return this.loader;
  }

  showLoader() {
    this.loader.next(true);
  }

  hideLoader() {
    this.loader.next(false);
  }
}
