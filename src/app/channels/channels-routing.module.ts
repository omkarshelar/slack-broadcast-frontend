import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListChannelsComponent } from "./list-channels/list-channels.component";

const routes: Routes = [
  {
    path: '',
    component: ListChannelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
