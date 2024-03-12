import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private _$isDialogOpen: Subject<boolean> = new Subject<boolean>();
  $isDialogOpen = this._$isDialogOpen.asObservable();

  constructor() {}

  showDialog(bool: boolean) {
    this._$isDialogOpen.next(bool);
  }
}
