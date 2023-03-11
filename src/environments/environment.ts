// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	foodAppUrl: 'http://127.0.0.1:5000',
  // Auth0 configuration
	auth0: {
		domain: 'dev-jympx99y.eu.auth0.com',
		clientId: 'Iwlo3RH2UkIAD5f798I8wN6Rr29YnIBT',
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
