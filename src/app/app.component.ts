import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import  NavBarComponent  from './components/nav-bar/nav-bar.component';
import  HeroesListComponent  from './pages/heroes-list/heroes-list.component';
import  HeroDetailsComponent  from './pages/hero-details/hero-details.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NavBarComponent, HeroesListComponent, HeroDetailsComponent, RouterLink, RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'avengers-test';
}
