import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HeroeModel } from '../models/heroe.model';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'https://login-app-angular-udemy.firebaseio.com';
  constructor(private http: HttpClient) {}

  createHeroe(heroe: HeroeModel): Observable<HeroeModel> {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

  updateHeroe(heroe: HeroeModel): Observable<any> {
    const heroeTemp = {
      ...heroe,
    };
    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  deleteHeroe(id: string): Observable<any> {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  getHeroeByID(id: string): Observable<any> {
    return this.http
      .get(`${this.url}/heroes/${id}.json`)
      .pipe(map((res) => ({ ...res, id })));
  }

  getHeroes(): Observable<any> {
    return this.http
      .get(`${this.url}/heroes.json`)
      .pipe(map(this.mapHeroesArray), delay(1000));
  }

  private mapHeroesArray(heroesObj: object): HeroeModel[] {
    const heroes: HeroeModel[] = [];
    if (heroesObj === null) {
      return [];
    }

    Object.keys(heroesObj).forEach((key) => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }
}
