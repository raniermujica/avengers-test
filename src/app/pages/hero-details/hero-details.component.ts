import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../core/services/heroes.service';
import { Heroes } from '../../interfaces/heroes';
import { BehaviorSubject, EMPTY } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css',
})
export default class HeroDetailsComponent implements OnInit {
  heroId: number | undefined;
  heroDetail: Heroes | undefined;

  @Input() heroData: BehaviorSubject<Heroes | null> | undefined;
  selectedHero$: any;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.heroId = params['id'] ? +params['id'] : undefined;
      if (this.heroId) {
        this.loadHeroDetails(this.heroId);
      }
    });
  }

  loadHeroDetails(heroId: number): void {
    this.heroesService.getHeroId(heroId).subscribe(
      (hero: Heroes) => {
        console.log('detalles de la api:', hero);
        this.heroDetail = hero;
      },
      (error: any) => {
        console.error('Error al cargar los detalles del héroe:', error);
      }
    );
  }

  getImageUrl(thumbnail: any): string {
    if (thumbnail && thumbnail.path && thumbnail.extension) {
      return `${thumbnail.path}.${thumbnail.extension}`;
    } else {
      return 'Error';
    }
  }
}
