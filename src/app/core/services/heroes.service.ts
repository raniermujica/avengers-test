import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Heroes } from '../../interfaces/heroes';
import { environment } from '../../../envinroment';
import md5 from 'md5';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroesList(): Observable<Heroes> {

    const publicKey = environment.publicKey;
    const privateKey = environment.privateKey;

    const timestamp = 1;

    // const hashString = timestamp + privateKey + publicKey;
  
    // const hash = md5(hashString);
    const hash = "fe3d7b991c2f984ef6e3bdbe29d8edd4";
  
    // const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    const url = 'https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=e239327ed710df8af76740d70662b78e&hash=fe3d7b991c2f984ef6e3bdbe29d8edd4';

    // console.log('URL de solicitud', url);

    return this.http.get<Heroes>(url)
  }


  getHeroId(characterId: number): Observable<Heroes> {
    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=e239327ed710df8af76740d70662b78e&hash=fe3d7b991c2f984ef6e3bdbe29d8edd4`;

    return this.http.get<Heroes>(url)
  };

  searchHeroByName(searchQuery: string): Observable<Heroes> {
    const url = `https://gateway.marvel.com/v1/public/characters/${searchQuery}?ts=1&apikey=e239327ed710df8af76740d70662b78e&hash=fe3d7b991c2f984ef6e3bdbe29d8edd4`;

    return this.http.get<Heroes>(url)
  };
};

