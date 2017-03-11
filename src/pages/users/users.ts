import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import { RandomUser } from '../../providers/random-user';

import { UserDetailsPage } from '../user-details/user-details';
import { LoginPage } from '../login/login';

import { Auth } from '@ionic/cloud-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
	users: User[]
  originalUsers: User[];

  username = "";
  email = "";

  constructor(public navCtrl: NavController, private randomUsers: RandomUser,
    public auth: Auth
  ) {
    randomUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
    });
  }

    public logout () {
      this.auth.logout();
      this.navCtrl.setRoot(LoginPage);
    }
    
   goToDetails(selectedUser: any) {
      this.navCtrl.push(UserDetailsPage, {selectedUser});
   }

   search(ev: any) {
    this.users = this.originalUsers;

    let term = ev.target.value;

    if(term && term.trim() != '') {
      this.users = this.users.filter((user) => {
        return (user.email.toLowerCase().indexOf(term.toLowerCase()) > -1);
      })
     }
   }

   onInfiniteScroll(infiniteScroll) {
     setTimeout(() => {
       this.randomUsers.load().subscribe(users => {
         for (let i = 0; i < users.length; i++) {
          this.users.push(users[i]);
         }
       });

       infiniteScroll.complete();
     }, 500);
   }

}
