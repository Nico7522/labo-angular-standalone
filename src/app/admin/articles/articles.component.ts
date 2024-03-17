import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ShoeService } from '../../services/shoe.service';
import { Shoe } from '../../models/shoe.model';
import { NgIconComponent } from '@ng-icons/core';
import { bootstrapPencilFill } from '@ng-icons/bootstrap-icons';
import { api } from '../../../../environment/environment';
@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    CardModule,
    NgIconComponent,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  _shoeService = inject(ShoeService);
  items: MenuItem[] | undefined;
  shoes: Shoe[] = [];
  editIcon = bootstrapPencilFill;
  img_url = api.img_url;
  error: boolean = false;
  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];

    this._shoeService.getAll().subscribe({
      next: (res) => {
        this.shoes = res.data;
        this.error = false;
      },
      error: () => (this.error = true),
    });
  }
}
