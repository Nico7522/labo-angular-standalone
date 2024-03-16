import { Route } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { DetailsComponent } from './details/details.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { exitGuard } from '../../guards/exit.guard';

export const articles_routes: Route[] = [
  { path: '', component: ArticlesComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  {
    path: 'details/:id/edit',
    canDeactivate: [exitGuard],
    component: EditArticleComponent,
  },
];
