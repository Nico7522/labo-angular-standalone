import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/routes').then((mod) => mod.admin_routes),
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
