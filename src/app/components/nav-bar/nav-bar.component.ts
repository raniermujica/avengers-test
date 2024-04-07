import { Component, HostListener, Input, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../core/services/heroes.service';
// import { HeroFilterPipe } from '../../pipes/name-filter.pipe';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})

export default class NavBarComponent {

  // @NgModule({
  //   declarations: [
  //     HeroFilterPipe
  //   ],
  //   exports: [
  //     HeroFilterPipe
  //   ]
  // })

  @Input() searchFilter: string = '';

  searchQuery: string = '';
  router: any;
  HeroesService: any;

  constructor(private route: ActivatedRoute, private service: HeroesService) {}

  scrolled: boolean = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.scrolled = true;
      console.log(this.searchFilter)
    } else {
      this.scrolled = false;
    }
  }

  // onSearchKeydown(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.searchHeroes();
  //   }
  // }

  // searchHeroes(): void {
  //   if (this.searchQuery.trim()) {
  //     this.HeroesService.searchHeroByName(this.searchQuery.trim()).subscribe(
  //       (heroId: number | undefined) => {
  //         if (heroId !== undefined) {
  //           this.router.navigate(['/details', heroId]); // Redirige al componente de detalles con el ID del héroe
  //         } else {
  //           // Manejar el caso cuando el héroe no se encuentra
  //         }
  //       },
  //     )
  //     } else {
  //       // Manejar caso cuando el campo de búsqueda está vacío
  //     }
  //   }
  };

