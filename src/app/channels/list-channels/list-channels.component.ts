import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChannelManagerService } from '../services/channel-manager.service';
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
    // Floating Button initialization
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.fixed-action-btn');
    //   var instance = M.FloatingActionButton.init(elems);
    // });
    
    $(document).ready(function(){
      $('.fixed-action-btn').floatingActionButton();
    }); 
    
  }

  ngOnInit() {
    this.getChannels();
  }
  
  getChannels() {
    this.channelManager.getChannels()
    .then((response) => {
      if(response.status === 200) {
        this.channels = response.body['channels'];
        console.log(this.channels);
        return true;
      }
    })
    .catch((err) => {
      if(err.error['message']) {
        this.errorMessage = `🤷  ${err.error['message']}`;
      }
      this.channels = null;
      return false;
    });
  }
  
  deleteChannel(channelId) {
    if(confirm("Are you sure you want to delete this channel?")) {
      this.channelManager.deleteChannel(channelId);
      this.getChannels();
    }
  }
}
