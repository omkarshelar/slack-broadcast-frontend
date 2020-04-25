import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChannelManagerService } from '../services/channel-manager.service';
import * as M from "materialize-css/dist/js/materialize";
declare var $;
@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.scss']
})
export class ListChannelsComponent implements OnInit, AfterViewInit {

  channels;
  errorMessage = null;
  constructor(private channelManager: ChannelManagerService) {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('.fixed-action-btn').floatingActionButton();
    });

  }

  ngOnInit() {
    this.getChannels();
  }

  getChannels() {
    this.channelManager.getChannels()
      .then((response) => {
        if (response.status === 200) {
          this.channels = response.body['channels'];
          return true;
        }
      })
      .catch((err) => {
        if (err.error['message']) {
          this.errorMessage = `🤷  ${err.error['message']}`;
        }
        this.channels = null;
        return false;
      });
  }

  deleteChannel(channelId) {
    if (confirm("Are you sure you want to delete this channel?")) {
      this.channelManager.deleteChannel(channelId);
      this.getChannels();
    }
  }

  refreshChannels() {
    this.getChannels();
    M.toast({ html: 'Your channels reloaded successfully!' })
  }
}
