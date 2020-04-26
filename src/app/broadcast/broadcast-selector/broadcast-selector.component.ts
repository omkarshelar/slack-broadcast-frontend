import { Component, OnInit } from '@angular/core';
import { ChannelManagerService } from 'src/app/channels/services/channel-manager.service';
import { FormGroup, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { BroadcastService } from '../broadcast.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-broadcast-selector',
  templateUrl: './broadcast-selector.component.html',
  styleUrls: ['./broadcast-selector.component.scss']
})
export class BroadcastSelectorComponent implements OnInit {
  allChannels;
  noChannels = false;
  messageForm: FormGroup;
  channels = [];
  slackResponses = null;
  constructor(private channelManager: ChannelManagerService, private formBuilder: FormBuilder, private broadcastService: BroadcastService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      channels: new FormArray([], Validators.required),
      msgTitle: new FormControl('', Validators.required),
      msgContents: new FormControl('', Validators.required)
    });
    this.channelManager.getChannels().then((response) => {
      if (response.status === 200) {
        this.allChannels = response.body['channels'];
      }
      // else if (response.status === 404) {
      //   this.allChannels = null;
      //   this.noChannels = true;
      // }
    }).catch(err => {
      console.error(err);
      this.allChannels = null;
      this.noChannels = true;
    });
  }

  onCheckChange(event) {
    const formArray: FormArray = this.messageForm.get('channels') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  private addCheckboxes() {
    this.allChannels.forEach((o, i) => {
      const control = new FormControl();
      (this.messageForm.controls.orders as FormArray).push(control);
    });
  }

  sendMessage() {
    this.slackResponses = null;
    this.broadcastService.broadcastMessage(this.messageForm.value.channels, this.messageForm.value.msgTitle, this.messageForm.value.msgContents).then((response: HttpResponse<any>) => {
      // if(response.status === 207 || response.status === 200) {
      //   this.slackResponses = response.body['slackResponses'];
      // }
      // else {
      //     this.slackResponses = null;
      // }
      if (response.body['slackResponses']) {
        this.slackResponses = response.body['slackResponses'];
      }
      else {
        this.slackResponses = null;
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}
