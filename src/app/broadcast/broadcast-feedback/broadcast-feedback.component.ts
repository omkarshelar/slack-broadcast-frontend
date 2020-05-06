import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-broadcast-feedback",
  templateUrl: "./broadcast-feedback.component.html",
  styleUrls: ["./broadcast-feedback.component.scss"],
})
export class BroadcastFeedbackComponent implements OnInit {
  /**
   * Get the response statuses from the parent.
   * Display message delivery feedback for each channel
   */
  @Input() slackResponses: Array<any>;
  constructor() {}

  ngOnInit() {}
}
