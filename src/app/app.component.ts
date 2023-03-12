import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AppRoutes } from "./shared/app.routes";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
  protected AppRoutes = AppRoutes;

	constructor(protected authService: AuthService) {}
}
