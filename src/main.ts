import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";


Amplify.configure(awsconfig);
const oauth = {
  domain: 'omkarshelar-sso.auth.ap-south-1.amazoncognito.com',
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  redirectSignIn: 'https://b60bb113c5104bcc8b8aca2f9ba595d3.vfs.cloud9.ap-south-1.amazonaws.com/',
  redirectSignOut: 'https://b60bb113c5104bcc8b8aca2f9ba595d3.vfs.cloud9.ap-south-1.amazonaws.com/',
  responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
}

Auth.configure({
  oauth: oauth
})

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
