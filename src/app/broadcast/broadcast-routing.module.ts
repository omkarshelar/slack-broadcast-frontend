import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BroadcastSelectorComponent } from './broadcast-selector/broadcast-selector.component';


const routes: Routes = [
  {
    path:'',
    component: BroadcastSelectorComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroadcastRoutingModule { }
