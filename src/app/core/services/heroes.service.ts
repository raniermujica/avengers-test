import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HeroesResults, HeroFeatures } from '../../interfaces/heroes';
import { environment } from '../../../envinroment';
import md5 from 'md5';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroesList(): Observable<HeroesResults> {

    const publicKey = environment.publicKey;
    const privateKey = environment.privateKey;

    const timestamp = 1;

    // const hashString = timestamp + privateKey + publicKey;
  
    // const hash = md5(hashString);
    const hash = "fe3d7b991c2f984ef6e3bdbe29d8edd4";
  
    // const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    const url = 'https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=e239327ed710df8af76740d70662b78e&hash=fe3d7b991c2f984ef6e3bdbe29d8edd4';

    // console.log('URL de solicitud', url);

    return this.http.get<HeroesResults>(url).pipe(catchError((error:HttpErrorResponse) => {
       let errorMessage = "";

       if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
       } else {
        errorMessage = `Error code: ${error.status}; message: ${error.message}`;
       }

       return throwError(() => errorMessage);
    }));
  }


  getHeroId(characterId: number): Observable<HeroFeatures> {
    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=e239327ed710df8af76740d70662b78e&hash=fe3d7b991c2f984ef6e3bdbe29d8edd4`;

    return this.http.get<HeroFeatures>(url).pipe(catchError((error:HttpErrorResponse) => {
      let errorMessage = "";

      if (error.error instanceof ErrorEvent) {
       errorMessage = `Error: ${error.error.message}`;
      } else {
       errorMessage = `Error code: ${error.status}; message: ${error.message}`;
      }

      return throwError(() => errorMessage);
   }));
  };
};

