import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetChannelsService {

  constructor(private http: HttpClient) {
  }

  async getChannels() {
    const idToken = await this.getIDToken();
    var headers = new HttpHeaders().set("Authorization", "Bearer " + idToken);
    const httpOptions = {
      headers
    };
    this.http.get('https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api/channels', httpOptions).subscribe((data) => {
      console.log(data);
    })
  }

  async getIDToken() {
    let idToken;
    await Auth.currentSession()
      .then(data => idToken = data['idToken']['jwtToken'])
      .catch(err => console.log(err));
    return idToken;
  }
}
