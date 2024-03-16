import { Injectable, WritableSignal, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private _$isDialogOpen: Subject<boolean> = new Subject<boolean>();
  data: WritableSignal<any | null> = signal(null);
  $isDialogOpen = this._$isDialogOpen.asObservable();

  private _$editStockDialog: Subject<boolean> = new Subject<boolean>();
  $editStockDialog = this._$editStockDialog.asObservable();

  constructor() {}
  showDialog(bool: boolean) {
    this._$isDialogOpen.next(bool);
  }

  showEditStockDialog<T>(bool: boolean, data: T) {
    this._$editStockDialog.next(bool);
    this.data.set(data);
  }
}
