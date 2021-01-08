import { Component, NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ArticlesComponent } from './articles/articles.component';
import { WritearticleComponent } from './writearticle/writearticle.component';
import { PagesComponent } from './pages/pages.component';
import { AuthorreqComponent } from './authorreq/authorreq.component';
import { EditorreqComponent } from './editorreq/editorreq.component';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'profile/:uid',
    component: ProfileComponent,
  },

  {
    path: 'editprofile',
    component: EditprofileComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'writearticle',
    component: WritearticleComponent,
  },
  {
    path: 'pages',
    component: PagesComponent,
  },
  {
    path: 'Become-An-Author',
    component: AuthorreqComponent,
  },
  {
    path: 'Become-An-Editor',
    component: EditorreqComponent,
  },
  {
    path: 'View-Article/:aid',
    component: ViewarticleComponent,
  },
  {
    path: 'search/:sid',
    component: ArticlelistComponent,
  },
  { path: ':aid', component: ViewarticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
