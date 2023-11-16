import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'fl-card',
  templateUrl: './fl-card.component.html',
  styleUrls: ['./fl-card.component.scss'],
})
export class FlCardComponent {
  @Input()
  imgLink: string = '';

  @Input()
  title: string = '';

  @Input()
  link: string = '';

  @Input()
  paragraph: string = '';
}
