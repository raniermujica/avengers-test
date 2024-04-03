import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HeroesItemsComponent } from '../../components/heroes-items/heroes-items.component';
import { HeroesService } from '../../core/services/heroes.service';
import { HeroesResults } from '../../interfaces/heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [HeroesItemsComponent, AsyncPipe],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
})
export class HeroesListComponent implements OnInit {
  public heroesResults$!: Observable<HeroesResults>;
  constructor(private service: HeroesService) {}

  ngOnInit(): void {
    this.heroesResults$ = this.service.getHeroesList();
  }
}
