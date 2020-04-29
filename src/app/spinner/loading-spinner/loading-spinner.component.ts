import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from "../loading-spinner.service";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  showLoader = false;

  constructor(private loaderService: LoadingSpinnerService) {
    this.loaderService.getLoader().subscribe(
      value => this.showLoader = value
    )
  }

  ngOnInit() {
  }

}
