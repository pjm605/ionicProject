import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import { AuthService } from '../../providers/auth-service';
import { RandomUser } from '../../providers/random-user';

import { UserDetailsPage } from '../user-details/user-details';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
	users: User[]
  originalUsers: User[];

  username = "";
  email = "";

  constructor(public navCtrl: NavController, private randomUsers: RandomUser, private auth: AuthService) {
    let info = this.auth.getUserInfo();

    randomUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
    })
  }

    public logout () {
      this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
      })
    }
    
   goToDetails(selectedUser: any) {
      this.navCtrl.push(UserDetailsPage, {selectedUser});
   }

}
