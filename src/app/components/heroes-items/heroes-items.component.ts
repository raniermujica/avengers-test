import { Component, Input } from '@angular/core';
import { Heroes } from '../../interfaces/heroes';

@Component({
  selector: 'app-heroes-items',
  standalone: true,
  imports: [],
  templateUrl: './heroes-items.component.html',
  styleUrl: './heroes-items.component.css',
})
export class HeroesItemsComponent {
  @Input() heroeData!: Heroes;
}
