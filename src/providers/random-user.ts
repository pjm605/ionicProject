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
		return this.http.get(`${this.randomUserApiUrl}/?results=20`)
			.map(res => <User[]>(res.json().results));
	}
}


