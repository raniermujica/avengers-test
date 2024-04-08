import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../core/services/heroes.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export default class NavBarComponent {
  @Input() searchFilter: string = '';
  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();

  searchQuery: any = '';

  router: any;
  HeroesService: any;

  constructor(private route: ActivatedRoute, private service: HeroesService) {}

  scrolled: boolean = false;

  sendQueryText(event: any) {
    console.log('Search text', event.target.value);
    this.searchQuery = event.target.value;
    this.searchEvent.emit(this.searchQuery);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.scrolled = true;
      console.log(this.searchFilter);
    } else {
      this.scrolled = false;
    }
  }
}
