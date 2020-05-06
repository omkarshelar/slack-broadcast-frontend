import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ChannelManagerService } from "../services/channel-manager.service";
import { LoadingSpinnerService } from "../../spinner/loading-spinner.service";
import * as M from "materialize-css/dist/js/materialize";
import { HttpResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

declare var $;
@Component({
  selector: "app-list-channels",
  templateUrl: "./list-channels.component.html",
  styleUrls: ["./list-channels.component.scss"],
})
export class ListChannelsComponent implements OnInit, AfterViewInit {
  channels;
  errorMessage = null;
  constructor(
    private channelManager: ChannelManagerService,
    private spinner: LoadingSpinnerService,
    public toasterService: ToastrService
  ) {}

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $(".fixed-action-btn").floatingActionButton();
    });
  }

  ngOnInit() {
    this.spinner.showLoader();
    this.getChannels();
  }

  getChannels() {
    this.channelManager
      .getChannels()
      .then((response) => {
        if (response.status === 200) {
          this.channels = response.body["channels"];
        }
      })
      .catch((err: HttpResponse<any>) => {
        this.channels = null;
        if (err["error"]["message"]) {
          this.errorMessage = err["error"]["message"];
        } else {
          this.errorMessage =
            "An error occured in the app. We are working on it. Please try again later.";
        }
      })
      .finally(() => this.spinner.hideLoader());
  }

  deleteChannel(channelId) {
    if (confirm("Are you sure you want to delete this channel?")) {
      this.channelManager
        .deleteChannel(channelId)
        .then((response) => {
          if (response.status === 200) {
            this.getChannels();
          }
        })
        .catch((err) => {
          this.toasterService.error(
            "An error occured. Could not delete channel.",
            "Error"
          );
          console.error(err);
        });
    }
  }

  refreshChannels() {
    this.getChannels();
    M.toast({ html: "Your channels reloaded successfully!" });
  }
}
