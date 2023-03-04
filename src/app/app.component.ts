import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	constructor(protected authService: AuthService) {}

	/** Login user in application */
	protected login() {
		this.authService.loginWithRedirect();
	}

  /** Logout user */
	protected logout() {
		this.authService.logout();
	}
}
