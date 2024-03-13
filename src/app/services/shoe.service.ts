import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { api } from '../../../environment/environment';
import { Observable, map } from 'rxjs';
import { Shoe } from '../models/shoe.model';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ShoeService {
  _httpClient = inject(HttpClient);
  constructor() {}

  // Simulation requête qui récupère les 20 produits les plus appréciés
  getAll(): Observable<Response<Shoe[]>> {
    return this._httpClient.get<Response<Shoe[]>>(`${api.url}/product/top`);
  }
}
