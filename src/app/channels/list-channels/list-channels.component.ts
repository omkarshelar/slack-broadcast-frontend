import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChannelManagerService } from '../services/channel-manager.service';
import * as M from 'materialize-css'

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.scss']
})
export class ListChannelsComponent implements OnInit, AfterViewInit {
  
  channels;
  constructor(private channelManager: ChannelManagerService) {
  }
  
  ngAfterViewInit(): void {
    // Floating Button initialization
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems);
    });
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
    if(confirm("Are you sure you want to delete this channel?")) {
      this.channelManager.deleteChannel(channelId);
      this.getChannels();
    }
    
  }
  
}
