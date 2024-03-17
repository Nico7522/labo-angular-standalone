import {
  Component,
  Input,
  ViewEncapsulation,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
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
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { SizeService } from '../../../services/size.service';
import { Size } from '../../../models/size.model';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  AddCategoryToProductForm,
  SizeStockForm,
} from '../../../models/form.model';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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
    InputTextModule,
    ListboxModule,
    DropdownModule,
    FloatLabelModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  providers: [MessageService, ConfirmationService],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponent {
  private _shoeService = inject(ShoeService);
  private _confirmationService = inject(ConfirmationService);
  private _messageService = inject(MessageService);
  private _sizeService = inject(SizeService);
  private _categoryService = inject(CategoryService);

  private _formBuilder = inject(FormBuilder);
  sizes: WritableSignal<Size[]> = signal([]);
  categories: WritableSignal<Category[]> = signal([]);

  edit: boolean = false;
  sizeStock: FormControl = new FormControl('');
  newCategory: FormControl = new FormControl('');
  newSize: FormControl = new FormControl('');
  newStock: FormControl = new FormControl('');
  sizeStockForm: FormGroup | null = null;
  categoryForm: FormGroup | null = null;

  sizeId: number = 0;
  shoe: Shoe | undefined;
  img_url = api.img_url;
  newCategoryFieldOpen: boolean = false;
  newSizeFieldOpen: boolean = false;
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

  ngOnInit() {
    this.sizeStockForm = this._formBuilder.group({
      sizeId: [''],
      stock: [''],
    });

    this.categoryForm = this._formBuilder.group({
      categoryId: [''],
    });
  }

  getSizes() {
    this._sizeService.getAll().subscribe({
      next: (sizes) => this.sizes.set(sizes),
    });
  }

  handleSizeStock() {
    if (this.sizeStockForm?.valid) {
      let sizeStockForm: SizeStockForm = {
        productId: this.shoe?.productId as number,
        sizeId: this.sizeStockForm.get('sizeId')?.value,
        stock: this.sizeStockForm.get('stock')?.value,
      };

      this._shoeService.createNewStock(sizeStockForm).subscribe({
        next: () => {
          this._messageService.add({
            key: 'confirmUpdated',
            detail: 'Taille et stock ajoutés !',
            severity: 'success',
          });
        },
        error: () => {
          this._messageService.add({
            severity: 'error',
            detail: 'Une erreur est survenue.',
            key: 'confirmUpdated',
          });
        },
      });
    }
  }

  getCategories() {
    this._categoryService.getAll().subscribe({
      next: (categories) => this.categories.set(categories),
    });
  }

  // TODO: à refaire
  handleCategory() {
    if (this.categoryForm?.valid) {
      this._shoeService
        .addCategoryToProduct(
          this.shoe?.productId!,
          this.categoryForm.get('categoryId')?.value
        )
        .subscribe({
          next: () => {
            this._messageService.add({
              key: 'confirmUpdated',
              detail: 'Catégorie ajoutée !',
              severity: 'success',
            });
          },
          error: () => {
            this._messageService.add({
              severity: 'error',
              detail: 'Une erreur est survenue.',
              key: 'confirmUpdated',
            });
          },
        });
    }
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

  confirmDelete(event: Event, sizeId: number) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voulez-vous vraiment supprimer cette donnée ?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this._shoeService
          .deleteStock(this.shoe?.productId as number, sizeId)
          .subscribe({
            next: () => {
              this._messageService.add({
                severity: 'success',
                detail: 'La donnée à bien été suprimée',
                key: 'confirmUpdated',
              });
            },
          });
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

  openNewCategoryField() {
    this.getCategories();
    this.newCategoryFieldOpen = true;
  }

  openNewSizeField() {
    this.getSizes();
    this.newSizeFieldOpen = true;
  }
}
