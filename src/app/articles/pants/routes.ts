import { Route } from '@angular/router';
import { ShoesComponent } from '../shoes/shoes.component';
import { PantsComponent } from './pants.component';
import { PantDetailsComponent } from './pant-details/pant-details.component';

export const pants_routes: Route[] = [
  { path: '', component: PantsComponent },
  { path: 'details/:id', component: PantDetailsComponent },
];
