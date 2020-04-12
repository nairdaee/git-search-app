import { Component } from '@angular/core';
import { MyProfileComponent } from './my-profile/my-profile.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootPage:any = 'MyProfileComponent';
}
