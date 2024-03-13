import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './users/users.component';

export const admin_routes: Route[] = [
  { path: '', component: AdminComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'users', component: UsersComponent },
];
