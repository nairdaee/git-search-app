import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DateCountPipe } from './date-count.pipe';
import { ProfileService } from './services/profile.service';
import { ReposComponent } from './repos/repos.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    DateCountPipe,
    ReposComponent,
    SearchFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
