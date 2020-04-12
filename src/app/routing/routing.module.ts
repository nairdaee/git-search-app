import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from '../app.component';
import { ReposComponent } from '../repos/repos.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';

const routes:Routes=[
{path:'my-profile',component:MyProfileComponent},
{path:'search-form',component:SearchFormComponent },
{path:'',redirectTo:'/my-profile',pathMatch:"full"}


]
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
