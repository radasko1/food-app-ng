import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-nav-profile',
	templateUrl: './nav-profile.component.html',
	styleUrls: ['./nav-profile.component.scss'],
})
export class NavProfileComponent {
  protected showUserOverlay = false;

	constructor(protected authService: AuthService) {}

  protected logout() {
    this.authService.logout();
  }
}
