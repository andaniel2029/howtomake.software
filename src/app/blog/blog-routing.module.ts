import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: ':slug',
    component: PostComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
}

