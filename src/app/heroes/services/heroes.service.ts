import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../interfaces/herores.interfas';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`);
  }

  addHero(heroe: Heroes): Observable<Heroes> {
    return this.http.post<Heroes>(`${this.baseUrl}/heroes`, heroe);
  }

  updateHeroe(heroe: Heroes): Observable<Heroes> {
    return this.http.put<Heroes>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  deleteHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }

  updatePoints(point: any): Observable<any> {
    return this.http.put<Heroes>(
      `http://localhost:3000/points/${point.id}`,
      point
    );
  }

  getPointById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/points/${id}`);
  }

  addPonits(point: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/points`, point);
  }

  getPoint(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/points`);
  }
}
