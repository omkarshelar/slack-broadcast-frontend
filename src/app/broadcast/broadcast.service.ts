import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class BroadcastService {
  constructor(private http: HttpClient) {}

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
