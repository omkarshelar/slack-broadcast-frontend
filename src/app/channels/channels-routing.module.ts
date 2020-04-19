import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListChannelsComponent } from "./list-channels/list-channels.component";
import { ChannelDetailsComponent } from './channel-details/channel-details.component';

const routes: Routes = [
  {
    path: '',
    component: ListChannelsComponent
  },
  {
    path:'new',
    component: ChannelDetailsComponent
  },
  {
    path: 'edit/:channelId',
    component: ChannelDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
