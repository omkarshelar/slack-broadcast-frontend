import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class BroadcastService {
  constructor(private http: HttpClient) {}

  /**
   * Send the channel object, title, contents.
   * This will call API to broadcast messages to Slack channels.
   * @param  {any} channels
   * @param  {string} title
   * @param  {string} contents
   * @returns Promise
   */
  broadcastMessage(
    channels: any,
    title: string,
    contents: string
  ): Promise<HttpResponse<any>> {
    return this.http
      .post(
        `${environment.api_uri}/broadcast`,
        {
          channels,
          message: {
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*${title}*`,
                },
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: contents,
                },
              },
            ],
          },
        },
        { observe: "response" }
      )
      .toPromise();
  }
}
