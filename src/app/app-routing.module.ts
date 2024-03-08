import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPost1Component } from './blog/blog-post1/blog-post1.component';
import { BlogPost2Component } from './blog/blog-post2/blog-post2.component';
import { BlogPost3Component } from './blog/blog-post3/blog-post3.component';

const routes: Routes = [
  { path: 'post1', component: BlogPost1Component },
  { path: 'post2', component: BlogPost2Component },
  { path: 'post3', component: BlogPost3Component },
  { path: '', component: AboutMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
