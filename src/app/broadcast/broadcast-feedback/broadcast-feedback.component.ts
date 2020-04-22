import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-broadcast-feedback',
  templateUrl: './broadcast-feedback.component.html',
  styleUrls: ['./broadcast-feedback.component.scss']
})
export class BroadcastFeedbackComponent implements OnInit {

  @Input() slackResponses: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
