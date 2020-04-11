import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { Repos } from '../repos';
import { HttpClient} from '@angular/common/http';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],

  providers: [ProfileService]
})
export class MyProfileComponent implements OnInit {


  public username = 'nairdaee';
  repos: Repos;
  user: User;


  constructor(private profileService:ProfileService,public repositoryService:ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileInfo(this.username);
      this.user = this.profileService.user;

      this.repositoryService.getProfileRepo(this.username);
      this.repos = this.repositoryService.repos;
  }

}
