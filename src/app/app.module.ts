import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { LoginFormComponent } from './Crunchyroll/components/login-form/login-form.component';

import { FooterComponent } from './public/pages/footer/footer.component';
import { HeaderComponent } from './public/pages/header/header.component';

import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './Crunchyroll/pages/home/home.component';
import { AmigoListComponent } from './Crunchyroll/components/amigo-list/amigo-list.component';
import { PostComponent } from './Crunchyroll/components/post/post.component';
import { SingupComponent } from './Crunchyroll/components/singup/singup.component';
import { ProfileComponent } from './Crunchyroll/components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AmigoListComponent,
    PostComponent,
    SingupComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
