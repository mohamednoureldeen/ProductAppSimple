import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true}) productItem: Iproduct = {} as Iproduct

}
