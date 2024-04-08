import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Heroes } from '../../interfaces/heroes';
import { environment } from '../../../envinroment';
import md5 from 'md5';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroesList(): Observable<Heroes> {
    const publicKey = environment.publicKey;
    const privateKey = environment.privateKey;

    const timestamp = 1;

    const hash = 'fe3d7b991c2f984ef6e3bdbe29d8edd4';

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    return this.http.get<Heroes>(url);
  }

  getHeroId(characterId: number): Observable<Heroes> {
    const publicKey = environment.publicKey;
    const privateKey = environment.privateKey;

    const timestamp = 1;

    const hash = 'fe3d7b991c2f984ef6e3bdbe29d8edd4';

    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    return this.http.get<Heroes>(url);
  }
}
