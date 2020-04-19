import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { channel } from '../channels-interface';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelManagerService {
  
  channels;
  constructor(private http: HttpClient, private router: Router) {
  }
  
  async getChannels() {
    const response = await this.loadChannels();
    this.channels = response.body['channels'];
    return this.channels
  }
  
  loadChannels() {
    return this.http.get('https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api/channels', { observe: 'response' }).toPromise();
  }
  
  addChannel(channelName: string, channelWebhook: string) {
    const channelDetails = {
      channelName,
      channelWebhook
    }
    this.http.post('https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api/channels',channelDetails, { observe: 'response' }).subscribe((response) => {
      console.log("Logging POST response");
      console.log(response);
      if(response.status === 201) {
        this.router.navigate(['/channels']);
      }
      else {
        console.error(response)
      }
    })
  }
  
  deleteChannel(channelId: string) {
    const options = {
      body: {
        channelId
      }
    };
    
    this.http.request('delete', 'https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api/channels', options).subscribe((res) => {
      console.log(res)
    });
  }
  
  async editChannel(channelId) {
    let channels;
    if(!this.channels) {
      channels = await this.getChannels();
    }
    filteredChannels = channels.find((channel) => channel['channelId'] === channelId)
    console.log(filteredChannels);
  }
}
