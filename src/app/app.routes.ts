import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
  },
  // Charge la partie articles dans la partie admin
  {
    path: 'admin/articles',
    loadChildren: () =>
      import('./admin/articles/routes').then((mod) => mod.articles_routes),
  },
  {
    path: 'admin/users',
    loadChildren: () =>
      import('./admin/users/routes').then((mod) => mod.users_routes),
  },
  {
    path: 'admin/orders',
    loadChildren: () =>
      import('./admin/orders/routes').then((mod) => mod.orders_routes),
  },
  {
    path: 'pants',
    loadChildren: () =>
      import('./articles/pants/routes').then((mod) => mod.pants_routes),
  },
  {
    path: 'shoes',
    loadChildren: () =>
      import('./articles/shoes/routes').then((mod) => mod.shoes_routes),
  },
  {
    path: 'shirts',
    loadChildren: () =>
      import('./articles/shirts/routes').then((mod) => mod.shirts_routes),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (mod) => mod.RegisterComponent
      ),
  },
];
