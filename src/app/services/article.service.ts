import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { api } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { Shoe } from '../models/shoe.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  _httpClient = inject(HttpClient);

  getAll(): Observable<Response<Shoe[]>> {
    return this._httpClient.get<Response<Shoe[]>>(`${api.url}/product`);
  }
}
