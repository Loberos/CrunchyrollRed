import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./Crunchyroll/components/login-form/login-form.component";
import {HomeComponent} from "./Crunchyroll/pages/home/home.component";

import {SingupComponent} from "./Crunchyroll/components/singup/singup.component";
import {AmigoListComponent} from "./Crunchyroll/components/amigo-list/amigo-list.component";
import {NotificationComponent} from "./Crunchyroll/components/notification/notification.component";
import {ProfileComponent} from "./Crunchyroll/components/profile/profile.component";



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginFormComponent },
  {path:'singup', component:SingupComponent },
  {path:'home', component:HomeComponent },
  {path:'notification', component:NotificationComponent },
  {path:'profile', component:ProfileComponent },
  {path:'friends', component:AmigoListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[]
