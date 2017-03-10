import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  selectedUser: any;
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedUser = navParams.get('selectedUser');
    this.user = this.selectedUser;

  }

}
