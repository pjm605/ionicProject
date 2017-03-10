import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class RandomUser {
  randomUserApiUrl = 'https://randomuser.me/api';

  constructor(public http: Http) {}

   load(): Observable<User[]> {
		return this.http.get(`${this.randomUserApiUrl}/?results=10`)
			.map(res => <User[]>(res.json().results));
	}
}




  // loadDetails(login: string): Observable<User> {
  // 	return this.http.get(`${this.githubApiUrl}/users/${login}`)
  // 		.map(res => <User>(res.json()));
  // }

  // searchUsers(searchParam: string): Observable<User[]> {
  //   return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`) 
  //     .map(res => <User[]>(res.json().items))
  // }
