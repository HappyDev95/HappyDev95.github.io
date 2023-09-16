import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPost1Component } from './blog/blog-post1/blog-post1.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'post1', component: BlogPost1Component },
  { path: '', component: AboutMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
