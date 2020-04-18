import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ListChannelsComponent } from './list-channels/list-channels.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';

@NgModule({
  declarations: [ListChannelsComponent, ChannelDetailsComponent],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule { }
