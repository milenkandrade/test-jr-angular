import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Breed } from '../models/breed';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  private http = inject(HttpClient);
  baseAPI = "http://api.thecatapi.com/v1/breeds"


  getAllBreeds(): Observable<Breed[]>{
    return this.http.get<Breed[]>(this.baseAPI)
  }

  getPageableBreeds({page = 0, limit = 10}:Page): Observable<Breed[]>{
    return this.http.get<Breed[]>(this.baseAPI, {
      params: {page, limit}
    })
  }
}
