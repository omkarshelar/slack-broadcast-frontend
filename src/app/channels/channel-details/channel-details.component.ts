import { Component, OnInit } from '@angular/core';
import { ChannelManagerService } from '../services/channel-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {
  channelForm: FormGroup;

  constructor(private channelManager: ChannelManagerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.channelForm = this.formBuilder.group({
      channelName: ['', Validators.required],
      channelWebhook: ['', Validators.required],
    });
  }
  
  addChannel() {
    console.log(this.channelForm.value.channelName);
    console.log(this.channelForm.value.channelName);
  }

}
