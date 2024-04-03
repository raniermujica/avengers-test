import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesResults } from '../../interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroesList(): Observable<HeroesResults> {
    return this.http.get<HeroesResults>(`https://gateway.marvel.com/v1/public/characters`)
  }
}
