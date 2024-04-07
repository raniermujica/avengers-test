import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../core/services/heroes.service';
import { Heroes } from '../../interfaces/heroes';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})

export default class HeroDetailsComponent implements OnInit {
  heroId: number | undefined;
  heroDetail: Heroes | undefined;


  
  constructor(private route: ActivatedRoute, private heroData: HeroesService) {
     this.route.params.subscribe(params => {
      const characterId = params['characterId'];
      this.heroData.getHeroId(characterId).subscribe((hero: Heroes) => {
        this.heroDetail = hero;
      })
     })
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
      (hero: Heroes) => {
        console.log("detalles de la api:", hero)
        this.heroDetail = hero;
      },
      (error: any) => {
        console.error('Error al cargar los detalles del héroe:', error);
      }
    );
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.heroId = params['id'] ? +params['id'] : undefined;
  //     if (this.heroId) {
  //       this.heroDetail.getHeroId(this.heroId).subscribe(
  //         (hero: Heroes) => {
  //           console.log("detalles de la api:", hero)
  //           this.heroDetail = hero;
  //         },
  //         (error: any) => {
  //           console.error('Error al cargar los detalles del héroe:', error);
  //         }
  //       );
  //     }
  //   });
  // }

  getImageUrl(thumbnail: any): string {
    if (thumbnail && thumbnail.path && thumbnail.extension) {
      return `${thumbnail.path}.${thumbnail.extension}`;
    } else {
      return 'Error'; 
    }
  }
};

