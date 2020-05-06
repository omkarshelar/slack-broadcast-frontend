import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BroadcastRoutingModule } from "./broadcast-routing.module";
import { BroadcastSelectorComponent } from "./broadcast-selector/broadcast-selector.component";

import { ReactiveFormsModule } from "@angular/forms";
import { BroadcastFeedbackComponent } from "./broadcast-feedback/broadcast-feedback.component";

@NgModule({
  declarations: [BroadcastSelectorComponent, BroadcastFeedbackComponent],
  imports: [CommonModule, BroadcastRoutingModule, ReactiveFormsModule],
})
export class BroadcastModule {}
