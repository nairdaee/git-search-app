import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { User } from '../user';
import { Repos } from '../repos';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   repos: Repos;
   user: User;
   repo;


  constructor(private http:HttpClient) { 
    this.user = new User('','','',0,'','','','','','',new Date());
    this.repos = new Repos('','','',new Date(),new Date(),'');
  }
}
