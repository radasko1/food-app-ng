import { Component, Input } from '@angular/core';
import translation from './translation.json';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
})
export class FoodCategoryHeaderPanelComponent {
  // set of texts used in template
  translation = translation;

  @Input() showRecordButton = true;
  @Input() showSubcategoryButton = true;
  @Input() title: string | null = null; // title value can have delay and may be changed more times
}
