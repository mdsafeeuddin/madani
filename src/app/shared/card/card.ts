import { Component, Input } from '@angular/core';

@Component({
  selector: 'mm-card',
  standalone: false,
  templateUrl: './card.html',
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() variant: 'default' | 'psych' = 'default';
}
