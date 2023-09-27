import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPost1Component } from './blog/blog-post1/blog-post1.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogPost2Component } from './blog/blog-post2/blog-post2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BlogComponent,
    BlogPost1Component,
    BlogPost2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
