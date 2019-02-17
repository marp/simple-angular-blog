import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnePostComponent } from './one-post/one-post.component';
import { LatestComponent } from './latest/latest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
  { path: 'post', redirectTo: '/latest', pathMatch: 'full'  },
  { path: 'post/:id', component: OnePostComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
