import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Search } from '../search';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  newSearch = new Search('','','',0);
  public username ='';
  repos:Repos;
  user:User;


  submitUser(name){
    this.profileService.getProfileInfo(name.value);
    this.repositoryService.getProfileRepo(name.value);
  }
  constructor(private profileService:ProfileService,public repositoryService:ProfileService) { }

  ngOnInit()  {
    this.profileService.getProfileInfo(this.username);
    this.user = this.profileService.user;

    this.repositoryService.getProfileRepo(this.username);
    this.repos = this.repositoryService.repos;
  }

}
