import { Component, OnInit, output, NgModule } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HeroesItemsComponent } from '../../components/heroes-items/heroes-items.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component'
import { HeroesService } from '../../core/services/heroes.service';
import { Heroes } from '../../interfaces/heroes';
import NavBarComponent from '../../components/nav-bar/nav-bar.component';
import HeroDetailsComponent from '../hero-details/hero-details.component';
// import { HeroFilterPipe } from '../../pipes/name-filter.pipe';


@Component({
    selector: 'app-heroes-list',
    standalone: true,
    templateUrl: './heroes-list.component.html',
    styleUrl: './heroes-list.component.css',
    imports: [HeroesItemsComponent, AsyncPipe, ErrorMessageComponent, NavBarComponent, HeroDetailsComponent]
})
export default class HeroesListComponent implements OnInit {
  // @NgModule({
  //   declarations: [
  //     HeroFilterPipe
  //   ],
  //   exports: [
  //     HeroFilterPipe
  //   ]
  // })
  filterText: string = 'Test';
  public heroesResults$!: Observable<Heroes>;
  public errorMessage!: string;

  constructor(private service: HeroesService) {}

  ngOnInit(): void {
    this.heroesResults$ = this.service.getHeroesList().pipe(catchError((error:string) => {
      this.errorMessage = error;
      console.log(this.heroesResults$)
      return EMPTY
    }))
  }
}
