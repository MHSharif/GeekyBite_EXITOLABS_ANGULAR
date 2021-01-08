import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavtopComponent } from './navtop/navtop.component';
import { NavbottomComponent } from './navbottom/navbottom.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ArticlesComponent } from './articles/articles.component';
import { WritearticleComponent } from './writearticle/writearticle.component';
import { PagesComponent } from './pages/pages.component';
import{QuillModule} from 'ngx-quill';

import { AuthorreqComponent } from './authorreq/authorreq.component';
import { EditorreqComponent } from './editorreq/editorreq.component';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { ArticlelistComponent } from './articlelist/articlelist.component'

@NgModule({
  declarations: [
    AppComponent,
    NavtopComponent,
    NavbottomComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    EditprofileComponent,
    ArticlesComponent,
    WritearticleComponent,
    PagesComponent,
    AuthorreqComponent,
    EditorreqComponent,
    ViewarticleComponent,
    ArticlelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
