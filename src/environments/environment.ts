// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUrl: 'https://giv-api.herokuapp.com',
  customerServiceNumber: '5561999454459',
  storeLinks: {
    android:
      'https://play.google.com/store/apps/details?id=com.greenballoon.givflutter',
    iOS: 'https://apps.apple.com/us/app/algu%C3%A9m-quer/id1457386822?l=pt&ls=1',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
