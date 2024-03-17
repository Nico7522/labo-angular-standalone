import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { api } from '../../../environment/environment';
import { Observable, map } from 'rxjs';
import { Shoe } from '../models/shoe.model';
import { Response } from '../models/response.model';
import { SizeStockForm } from '../models/form.model';

@Injectable({
  providedIn: 'root',
})
export class ShoeService {
  _httpClient = inject(HttpClient);
  shoeToEdit: WritableSignal<Shoe | null> = signal(null);
  constructor() {}

  signalShoeToEdit(shoe: Shoe) {
    this.shoeToEdit.set(shoe);
  }

  getAll(): Observable<Response<Shoe[]>> {
    return this._httpClient.get<Response<Shoe[]>>(`${api.url}/product`);
  }

  getById(id: number): Observable<Response<Shoe>> {
    return this._httpClient.get<Response<Shoe>>(`${api.url}/product/${id}`);
  }

  editStock(
    sizeId: number,
    shoeId: number,
    stock: number
  ): Observable<Response<Shoe>> {
    return this._httpClient.patch<Response<Shoe>>(
      `${api.url}/product/stock/${sizeId}/${shoeId}`,
      { stock }
    );
  }

  deleteStock(productId: number, sizeId: number): Observable<boolean> {
    return this._httpClient.delete<boolean>(
      `${api.url}/product/${productId}/size/${sizeId}`
    );
  }

  createNewStock(sizeStockForm: SizeStockForm) : Observable<Response<Shoe>> {
    return this._httpClient.post<Response<Shoe>>( `${api.url}/product/${sizeStockForm.productId}/size/${sizeStockForm.stock}`, sizeStockForm.stock)

  }
}
