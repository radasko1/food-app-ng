import { Attribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-return-back',
  templateUrl: './return-back.component.html',
  styleUrls: ['./return-back.component.scss'],
})
export class ReturnBackComponent {
  // @Input() urlPath = '';
  // @Input() buttonText = '';
  constructor(
    @Attribute('urlPath') public urlPath: string,
    @Attribute('buttonText') public buttonText: string
  ) {}
}
