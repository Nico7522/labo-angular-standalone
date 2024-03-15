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
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  private _shoeService = inject(ShoeService);
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
}
