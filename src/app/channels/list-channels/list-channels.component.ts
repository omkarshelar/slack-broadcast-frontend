import { Component, OnInit } from '@angular/core';
import { channel } from '../channels-interface'
import { ChannelManagerService } from '../services/channel-manager.service';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.scss']
})
export class ListChannelsComponent implements OnInit {
  
  channels:channel[];
  constructor(private channelManager: ChannelManagerService) {
  }

  ngOnInit() {
    this.getChannels();
  }
  
  getChannels() {
    this.channelManager.getChannels().then((data) => {
      this.channels = data['channels'];
      console.log(data);
    });
  }
  
}
