import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HeroesItemsComponent } from '../../components/heroes-items/heroes-items.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component'
import { HeroesService } from '../../core/services/heroes.service';
import { HeroesResults } from '../../interfaces/heroes';

@Component({
    selector: 'app-heroes-list',
    standalone: true,
    templateUrl: './heroes-list.component.html',
    styleUrl: './heroes-list.component.css',
    imports: [HeroesItemsComponent, AsyncPipe, ErrorMessageComponent]
})
export default class HeroesListComponent implements OnInit {
  public heroesResults$!: Observable<HeroesResults>;
  public errorMessage!: string;
  constructor(private service: HeroesService) {}

  ngOnInit(): void {
    this.heroesResults$ = this.service.getHeroesList().pipe(catchError((error:string) => {
      this.errorMessage = error;
      return EMPTY
    }))
  }
}
