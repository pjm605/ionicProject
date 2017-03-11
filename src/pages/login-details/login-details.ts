import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Auth, User } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';

/*
  Generated class for the LoginDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-details',
  templateUrl: 'login-details.html'
})
export class LoginDetailsPage {
  name = "";
  email = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth, public user: User) {
  	this.name = this.user.details.name;
  	this.email = this.user.details.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginDetailsPage');
  }

  logOff() {
  	this.auth.logout();
  	this.navCtrl.setRoot(LoginPage);
  }

}
