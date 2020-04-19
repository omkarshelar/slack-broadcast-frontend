import { Component, OnInit } from '@angular/core';
import { ChannelManagerService } from '../services/channel-manager.service';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.scss']
})
export class ListChannelsComponent implements OnInit {
  
  channels;
  constructor(private channelManager: ChannelManagerService) {
  }

  ngOnInit() {
    this.getChannels();
  }
  
  async getChannels() {
    this.channels = await this.channelManager.getChannels();
    // .then((response) => {
    //   this.channels = response.body['channels'];
    //   console.log(this.channels);
    // });
  }
  
  deleteChannel(channelId) {
    console.log(channelId);
    this.channelManager.deleteChannel(channelId);
    this.getChannels();
  }
  
}
