import { Component, OnInit } from '@angular/core';
import { ChannelManagerService } from '../services/channel-manager.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {
  channelForm: FormGroup;
  
  buttonName: string = "Add";
  channelId:string = null;
  channelName = '';
  channelWebhook = '';

  constructor(private channelManager: ChannelManagerService, private router: Router, private location: Location, private activateRoute: ActivatedRoute) {
    console.log(this.router.url);
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.channelId = params.get("channelId");
    });
    if(typeof this.channelId !== undefined && this.router.url.includes("/edit/")) {
      console.log("Edit Mode");
      this.buttonName = "Edit";
      this.channelName = "";
      this.channelWebhook = "";
    }
    this.channelForm = new FormGroup({
      channelName: new FormControl('', Validators.required),
      channelWebhook: new FormControl('', Validators.required),
    });
  }
  
  addChannel() {
    this.channelManager.addChannel(this.channelForm.value.channelName, this.channelForm.value.channelWebhook);
  }
  
  goBack() {
    if (window.history.length > 1) {
      this.location.back()
    } else {
      this.router.navigate(['/channels'])
    }
  }
}
