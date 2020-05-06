import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ChannelManagerService } from "../services/channel-manager.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { channel } from "../channels-interface";
import { from } from "rxjs";

@Component({
  selector: "app-channel-details",
  templateUrl: "./channel-details.component.html",
  styleUrls: ["./channel-details.component.scss"],
})
export class ChannelDetailsComponent implements OnInit {
  channelForm: FormGroup;

  buttonName: string = "Add";
  logoName: string = "add";
  channelId: string;
  channel: channel;

  constructor(
    private channelManager: ChannelManagerService,
    private router: Router,
    private location: Location,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params) => {
      this.channelId = params.get("channelId");
    });
    if (this.channelId && this.router.url.includes("/edit/")) {
      this.buttonName = "Edit";
      this.logoName = "edit";
      from(this.channelManager.getChannelsArray()).subscribe((channels) => {
        this.channel = channels.find(
          (channel: channel) => channel.channelId === this.channelId
        );
        this.channelForm.setValue({
          channelName: this.channel.channelName,
          channelWebhook: this.channel.channelWebhook,
        });
      });
    }
    this.channelForm = new FormGroup({
      channelName: new FormControl("", Validators.required),
      channelWebhook: new FormControl("", Validators.required),
    });
  }

  /**
   * Decide if use operation is to edit or add and perform the relevant operation.
   * It is used because this component is reused for edit and add operation due to similarities in the interface.
   */
  onSubmit() {
    if (!this.channelId && !this.router.url.includes("/edit/")) {
      this.addChannel();
    } else {
      this.editChannel();
    }
  }
  /**
   * Wrapper to invoke ChannelManagerService.addChannel().
   * Gets the form value to call the function.
   */
  addChannel() {
    this.channelManager.addChannel(
      this.channelForm.value.channelName,
      this.channelForm.value.channelWebhook
    );
  }

  /**
   * Wrapper to invoke ChannelManagerService.editChannel()
   */
  editChannel() {
    const channel = {
      channelId: this.channelId,
      channelWebhook: this.channelForm.value.channelWebhook,
      channelName: this.channelForm.value.channelName,
    };
    this.channelManager.editChannel(channel);
  }

  /**
   * If back exists, go back. Else go to /channels route.
   */
  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(["/channels"]);
    }
  }
}
