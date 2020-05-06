import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppGuard } from "./app.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./home/home.module#HomeModule",
  },
  {
    path: "channels",
    loadChildren: "./channels/channels.module#ChannelsModule",
    canLoad: [AppGuard],
    canActivate: [AppGuard],
  },
  {
    path: "broadcast",
    loadChildren: "./broadcast/broadcast.module#BroadcastModule",
    canLoad: [AppGuard],
    canActivate: [AppGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
