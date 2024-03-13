import { Route } from '@angular/router';
import { ShirtsComponent } from './shirts.component';
import { ShirtDetailsComponent } from './shirt-details/shirt-details.component';

export const shirts_routes: Route[] = [
  {
    path: '',
    component: ShirtsComponent,
  },
  {
    path: 'details/:id',
    component: ShirtDetailsComponent,
  },
];
