// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: "1mj8ho879f5nm4go2r27240h7r",
  // redirect_uri: "https://b60bb113c5104bcc8b8aca2f9ba595d3.vfs.cloud9.ap-south-1.amazonaws.com/",
  redirect_uri: "http://localhost:4200/",
  oauth_uri: "https://omkarshelar-sso.auth.ap-south-1.amazoncognito.com",
  api_uri: "https://o3g6bp4a3b.execute-api.ap-south-1.amazonaws.com/api"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
