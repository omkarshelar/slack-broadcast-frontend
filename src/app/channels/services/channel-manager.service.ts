import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { channel } from "../channels-interface";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ChannelManagerService {
  channels;
  constructor(private http: HttpClient, private router: Router) {}

  async getChannelsArray() {
    const response = await this.getChannels();
    this.channels = response.body["channels"];
    return this.channels;
  }

  getChannels(): Promise<any> {
    return this.http
      .get(`${environment.api_uri}/channels`, { observe: "response" })
      .toPromise();
  }

  addChannel(channelName: string, channelWebhook: string) {
    const channelDetails = {
      channelName,
      channelWebhook,
    };
    this.http
      .post(`${environment.api_uri}/channels`, channelDetails, {
        observe: "response",
      })
      .subscribe((response) => {
        if (response.status === 201) {
          this.router.navigate(["/channels"]);
        } else {
          console.error(response);
        }
      });
  }

  deleteChannel(channelId: string): Promise<any> {
    const options = {
      body: {
        channelId,
      },
      observe: "response" as "response",
    };

    return this.http
      .request("delete", `${environment.api_uri}/channels`, options)
      .toPromise();
  }

  editChannel(newChannel) {
    this.http
      .put(`${environment.api_uri}/channels`, newChannel, {
        observe: "response",
      })
      .subscribe((response) => {
        if (response.status === 200) {
          this.router.navigate(["/channels"]);
        } else {
          console.error(response);
        }
      });
  }
}
