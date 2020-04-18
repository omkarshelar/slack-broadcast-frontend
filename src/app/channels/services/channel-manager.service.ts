import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelManagerService {

  constructor(private http: HttpClient) { }
  
  async getChannels() {
    let channels = await this.http.get('https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api/channels').toPromise();
    return channels;
  }
  
  async addChannel(channelName: string, channelWebhook: string) {
    const channelDetails = {
      channelName,
      channelWebhook
    }
    const newChannel = await this.http.post('https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api/channels',channelDetails).toPromise();
    return newChannel;
  }
}
