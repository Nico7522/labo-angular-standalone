import { Component, effect, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from '../../../services/dialog.service';
import { SizeStock } from '../../../models/shoe.model';

@Component({
  selector: 'app-edit-stock',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './edit-stock.component.html',
  styleUrl: './edit-stock.component.scss',
})
export class EditStockComponent {
  _dialogService = inject(DialogService);
  visible: boolean = false;
  data: SizeStock[] | undefined;

  constructor() {
    effect(() => {
      this.data = this._dialogService.data();
    });
  }
  ngOnInit() {
    this._dialogService.$editStockDialog.subscribe((modalState) => {
      this.visible = modalState;
    });
  }
}
