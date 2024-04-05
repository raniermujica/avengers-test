import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../core/services/heroes.service';
import { HeroFeatures } from '../../interfaces/heroes';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})

export default class HeroDetailsComponent implements OnInit {
  heroId: number | undefined;
  heroDetail: HeroFeatures | undefined
  
  constructor(private route: ActivatedRoute, private heroData: HeroesService) {
    //  this.route.params.subscribe(params => {
    //   const characterId = params['characterId'];
    //   this.heroData.getHeroId(characterId).subscribe((hero: HeroFeatures) => {
    //     this.heroDetail = hero;
    //   })
    //  })
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.heroId = params['id'] ? +params['id'] : undefined;
      if (this.heroId) {
        this.loadHeroDetails(this.heroId);
      }
    });
  }

  loadHeroDetails(characterId: number): void {
    this.heroData.getHeroId(characterId).subscribe(
      (hero: HeroFeatures) => {
        console.log("detalles de la api:", hero)
        this.heroDetail = hero;
      },
      (error: any) => {
        console.error('Error al cargar los detalles del héroe:', error);
      }
    );
  }
  getImageUrl(thumbnail: any): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }
};
