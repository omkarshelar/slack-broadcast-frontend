import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  constructor(private http: HttpClient) { }
  
  broadcastMessage(channels: any, title: string, contents: string):Promise<HttpResponse<any>> {
    return this.http.post("https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api/broadcast", {
      channels,
      message: {
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `*${title}*`
            }
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": contents
            }
          }
        ]
      }
    }, {observe:"response"}).toPromise();
  }
}
