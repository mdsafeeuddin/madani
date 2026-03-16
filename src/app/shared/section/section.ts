import { Component, Input } from '@angular/core';

@Component({
  selector: 'mm-section',
  standalone: false,
  templateUrl: './section.html',
})
export class SectionComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() muted = false;
}
