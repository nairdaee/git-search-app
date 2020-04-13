import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { Repos } from '../repos';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],

  providers:[ProfileService]
})


export class ReposComponent implements OnInit {

  public username ='Nairdaee';
  repos:Repos;
  user:User;
  constructor(private profileService:ProfileService,public repositoryService:ProfileService) { }

  ngOnInit()  {
    this.profileService.getProfileInfo(this.username);
      this.user = this.profileService.user;

      this.repositoryService.getProfileRepo(this.username);
      this.repos = this.repositoryService.repos;

  }

}
