import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() image: string = '';
  @Input() title: string = 'Default Title';
  @Input() description: string = 'Default Description';
  @Input() price: number = 0;
  @Input() weight: string = 'Default Weight';
}
