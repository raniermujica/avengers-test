import { Component, OnInit, output, NgModule, Input } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HeroesItemsComponent } from '../../components/heroes-items/heroes-items.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { HeroesService } from '../../core/services/heroes.service';
import { Heroes } from '../../interfaces/heroes';
import NavBarComponent from '../../components/nav-bar/nav-bar.component';
import HeroDetailsComponent from '../hero-details/hero-details.component';
import { PipesModule } from '../../pipes.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
  imports: [
    HeroesItemsComponent,
    AsyncPipe,
    ErrorMessageComponent,
    NavBarComponent,
    HeroDetailsComponent,
    PipesModule,
    RouterOutlet,
  ],
})
export default class HeroesListComponent implements OnInit {
  showHeroDetails: boolean = true;

  @Input() searchFilter: string = '';

  filterText: string = '';

  public heroesResults$!: Observable<Heroes>;
  public selectedHero$: BehaviorSubject<Heroes | null> =
    new BehaviorSubject<Heroes | null>(null);
  public errorMessage!: string;

  constructor(private service: HeroesService) {}

  ngOnInit(): void {
    this.heroesResults$ = this.service.getHeroesList().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        console.log('objects', this.heroesResults$);
        return EMPTY;
      })
    );
  }

  useFilter(filterText: string) {
    console.log('Search Text', filterText);
    this.filterText = filterText;
  }

  selectHero(hero: Heroes) {
    console.log('Heroe seleccionado:', hero);
    this.selectedHero$.next(hero);
  }
}
