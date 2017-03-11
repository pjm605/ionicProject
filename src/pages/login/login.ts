import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UsersPage } from '../users/users';

import { Auth } from '@ionic/cloud-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	loading: Loading;
	registerCredentials = { email: '', password: ''};

  constructor(private navCtrl: NavController, public navParams: NavParams,
    private auth: Auth, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {}

  public createAccount () {
  	this.navCtrl.push(RegisterPage);
  }

  public login() {
  	this.showLoading();

    this.auth.login('basic', {
      'email': this.registerCredentials.email,
      'password': this.registerCredentials.password}).then(() => {
        console.log("login good");
          setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.setRoot(UsersPage)
        });
      }, (err) => {
        console.log(err.message);
        this.showError("Access Denied");
      });
  }

  showLoading() {
  	this.loading = this.loadingCtrl.create({
  		content: 'Please wait....'
  	});
  	this.loading.present();
  }

  showError(text) {
  	setTimeout(() => {
  		this.loading.dismiss();
  	});

  	let alert = this.alertCtrl.create({
  		title: 'Fail',
  		subTitle: text,
  		buttons: ['OK']
  	});
  	alert.present(prompt);
  }

}







