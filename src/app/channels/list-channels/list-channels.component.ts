import { Component, OnInit } from '@angular/core';
import { GetChannelsService } from '../services/get-channels.service';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.scss']
})
export class ListChannelsComponent implements OnInit {

  constructor(private getChannels: GetChannelsService) {
    this.getChannels.getChannels()
  }

  ngOnInit() {
  }

}
