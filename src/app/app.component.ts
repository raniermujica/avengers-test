import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule, NavigationEnd, Router } from '@angular/router';
import  NavBarComponent  from './components/nav-bar/nav-bar.component';
import  HeroesListComponent   from './pages/heroes-list/heroes-list.component';
import  HeroDetailsComponent from './pages/hero-details/hero-details.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NavBarComponent, HeroesListComponent, HeroDetailsComponent, RouterLink, RouterOutlet, RouterModule]
})
export class AppComponent {


  @Input() searchFilter: string = '';

  filterText: string = '';
  
  title = 'avengers-test';

  showHeroDetails: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeroDetails = event.url.includes('/details/:id');
      }

    });
  }

  useFilter(filterText:string) {
    console.log("Search Text", filterText)
     this.filterText = filterText;
  }

}
