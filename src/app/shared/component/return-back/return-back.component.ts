import { Attribute, Component, Input } from '@angular/core';
import translation from './translation.json';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-back',
  templateUrl: './return-back.component.html',
  styleUrls: ['./return-back.component.scss'],
})
export class ReturnBackComponent {
  translation = translation;

  /**
   * Text in button after arrow icon.
   */
  @Input() buttonText = '';
  /**
   * Hide text and shows only arrow button.
   */
  @Input() showOnlyIcon = false;

  constructor(
    @Attribute('urlPath') public urlPath: string,
    private location: Location,
    private router: Router
  ) {}

  /**
   * Go to page handler.
   * Return user back to the previous page or navigate to the written path.
   */
  goBack() {
    this.urlPath ? this.router.navigate([this.urlPath]) : this.location.back();
  }
}
