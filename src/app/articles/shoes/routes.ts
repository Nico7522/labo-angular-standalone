import { Route } from '@angular/router';
import { ShoesComponent } from './shoes.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';

export const shoes_routes: Route[] = [
  { path: '', component: ShoesComponent },
  { path: 'details/:id', component: ShoeDetailsComponent },
];
