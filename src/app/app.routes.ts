import { Routes } from '@angular/router';
import NavBarComponent from './components/nav-bar/nav-bar.component';
import HeroesListComponent from './pages/heroes-list/heroes-list.component';
import HeroDetailsComponent from '../app/pages/hero-details/hero-details.component';
import { HeroesItemsComponent } from './components/heroes-items/heroes-items.component';

export const routes: Routes = [

      {
        path: 'home',
        component: HeroesListComponent,
        children: [
          { path: 'home', component: HeroesItemsComponent },
          { path: 'home', component: NavBarComponent },
          { path: 'details/:id', component: HeroDetailsComponent }
        ],
      },
];
