import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class RandomUser {
  randomUserApiUrl = 'https://randomuser.me/api';

  constructor(public http: Http) {}

  // loads random users from the randomuser.me api, returns an arry of Users
  load(): Observable<User[]> {
		return this.http.get(`${this.randomUserApiUrl}/?results=20`)
			.map(res => <User[]>(res.json().results));
	}
}


