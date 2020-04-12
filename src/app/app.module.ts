import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DateCountPipe } from './date-count.pipe';
import { ProfileService } from './services/profile.service';
import { ReposComponent } from './repos/repos.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    DateCountPipe,
    ReposComponent,
    SearchFormComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
