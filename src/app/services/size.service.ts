import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { api } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Size } from '../models/size.model';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  _httpClient = inject(HttpClient);

  constructor() {}

  getAll(): Observable<Size[]> {
    return this._httpClient.get<Size[]>(`${api.url}/size`);
  }
}
