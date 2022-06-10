import { Component, Input } from '@angular/core';
import translation from './translation.json';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
})
export class ProductHeaderPanelComponent {
  // set of texts used in template
  translation = translation;

  @Input() showRecordButton = false;
  @Input() showProductButton = false;
  @Input() title: string | null = null; // title value can have delay and may be changed more times
  /**
   * Identifier of product used in new record form.
   * Fill product identifier form control in new record form if user navigate from product detail page.
   */
  @Input() productId: string | null = null;
}
