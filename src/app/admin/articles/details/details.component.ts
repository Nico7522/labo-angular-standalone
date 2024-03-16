import { Component, Input, inject } from '@angular/core';
import { ShoeService } from '../../../services/shoe.service';
import { Shoe } from '../../../models/shoe.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { api } from '../../../../../environment/environment';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { CurrencyPipe } from '@angular/common';
import {
  FileSelectEvent,
  FileUploadEvent,
  FileUploadHandlerEvent,
  FileUploadModule,
  UploadEvent,
} from 'primeng/fileupload';
import { EditStockComponent } from '../edit-stock/edit-stock.component';
import { DialogService } from '../../../services/dialog.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    SplitButtonModule,
    DividerModule,
    AccordionModule,
    CurrencyPipe,
    FileUploadModule,
    EditStockComponent,
    InputNumberModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class DetailsComponent {
  private _shoeService = inject(ShoeService);
  private _confirmationService = inject(ConfirmationService);
  private _messageService = inject(MessageService);
  edit: boolean = false;
  sizeStock: FormControl = new FormControl('');
  sizeId: number = 0;
  shoe: Shoe | undefined;
  img_url = api.img_url;
  items = [
    {
      label: 'Stock',
      icon: 'pi pi-align-justify',
    },
    {
      label: 'Catégories',
      icon: 'pi pi-align-justify',
    },
  ];
  @Input()
  set id(id: number) {
    this._shoeService.getById(id).subscribe({
      next: (res) => {
        this.shoe = res.data;
      },
    });
  }

  checkDiscount(price: number, discount: number): string {
    console.log((price - price * discount).toString());

    return (price - price * discount).toFixed(2).toString();
  }

  onChange(event: FileUploadHandlerEvent) {
    // À envoyer en DB
    console.log(event.files[0]);
  }

  signalEdit() {
    this._shoeService.signalShoeToEdit(this.shoe as Shoe);
  }

  onEdit(show: boolean, sizeStock: number, sizeId: number) {
    this.edit = show;
    console.log(sizeStock);

    this.sizeStock.patchValue(sizeStock);
    this.sizeId = sizeId;
  }

  handleEditStock() {
    this.edit = false;
    this._shoeService
      .editStock(this.sizeId, this.shoe?.productId!, this.sizeStock.value)
      .subscribe({
        next: () => {
          this._messageService.add({
            key: 'confirmUpdated',
            detail: 'Stock mis à jour !',
            severity: 'success',
          });
        },
      });
  }

  confirmDelete(event: Event) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voulez-vous vraiment supprimer cette donnée ?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      // TODO: Ajouter la requête de suppression.
      accept: () => {
        this._messageService.add({
          severity: 'success',
          detail: 'La donnée à bien été suprimée',
          key: 'confirmUpdated',
        });
        console.log('cc');
      },
      reject: () => {
        this._messageService.add({
          severity: 'error',
          detail: 'Édition du produit annulée',
          key: 'confirmUpdated',
        });
      },
    });
  }
}
