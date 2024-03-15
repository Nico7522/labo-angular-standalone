import { Route } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { DetailsComponent } from './details/details.component';

export const articles_routes: Route[] = [
  { path: '', component: ArticlesComponent },
  { path: 'details/:id', component: DetailsComponent },
];
