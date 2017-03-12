import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth, UserDetails } from '@ionic/cloud-angular';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})

/* This page allows users to create a new account with a new email and password
Accounts are registered to ionic.io under this application's app_id.
Auth prevents users from creating accounts with the same email
*/
export class RegisterPage {
	createSuccess = false;
	registerCredentials = { name: '', email: '', password: ''};

    constructor(private navCtrl: NavController, public navParams: NavParams,
        public auth: Auth, private alertCtrl: AlertController) {}

    //trys to create a new account. Email will be validated against
    //existing accounts
    public register () {
        let userDetails: UserDetails = {
            'name': this.registerCredentials.name,
            'email': this.registerCredentials.email,
            'password': this.registerCredentials.password};

            this.auth.signup(userDetails).then(() => {
                this.createSuccess = true;
                this.showPopup("Success", "Account created.");
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
