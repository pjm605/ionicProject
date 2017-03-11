import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth, UserDetails } from '@ionic/cloud-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
	createSuccess = false;
	registerCredentials = { email: '', password: ''};

  constructor(private navCtrl: NavController, public navParams: NavParams,
    public auth: Auth, private alertCtrl: AlertController) {}

  public register () {
    let userDetails: UserDetails = {
      'email': this.registerCredentials.email,
      'password': this.registerCredentials.password};

    this.auth.signup(userDetails).then(() => {
      this.createSuccess = true;
      this.showPopup("Success", "Account created.");
      this.auth.login('basic', {
        'email': userDetails.email,
        'password': userDetails.password
      });
    }, (err) => {
      this.showPopup("Error", err);
    });
  }

  showPopup (title, text) {
  	let alert = this.alertCtrl.create({
  		title: title,
  		subTitle: text,
  		buttons: [
	  		{
	  			text: 'OK',
	  			handler: data => {
	  				if(this.createSuccess) {
	  					this.navCtrl.popToRoot();
	  				}
	  			}	
	  		}
  		]
  	});
  	alert.present();
  }

}
