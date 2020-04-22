import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/broadcast'
  },
  {
    path: 'channels',
    loadChildren: './channels/channels.module#ChannelsModule'
  },
  {
    path:'broadcast',
    loadChildren: './broadcast/broadcast.module#BroadcastModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
