import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Shoe } from '../../models/shoe.model';
import { ShoeService } from '../../services/shoe.service';
import { api } from '../../../../environment/environment';
@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss',
})
export class ShoesComponent {
  shoes: Shoe[] = [];
  responsiveOptions: any[] | undefined;
  _shoeService = inject(ShoeService);
  img_url = api.img_url;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this._shoeService.getAll().subscribe((res) => (this.shoes = res.data));
  }
}
