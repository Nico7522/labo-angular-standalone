import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { api } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { AddCategoryToProductForm } from '../models/form.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _httpClient = inject(HttpClient);
  constructor() {}

  getAll(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${api.url}/category`);
  }
}
