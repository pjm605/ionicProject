import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Auth, User } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';


@Component({
    selector: 'page-login-details',
    templateUrl: 'login-details.html'
})

/* This class shows the logged in user's profile.
The page allows users to log off, and edit and save Name changes
It prevents users from editing their email address
*/
export class LoginDetailsPage {
    name = "";
    email = "";
    originalName = "";
    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth, public user: User, private toastCtrl: ToastController) {
        this.name = this.user.details.name;
        this.email = this.user.details.email;
        this.originalName = this.name;
    }

    //logs off user and goes to LoginPage
    logOff() {
        this.auth.logout();
        this.navCtrl.setRoot(LoginPage);
    }

    //detect changes in Name and save to ionic.io
    save() {
        if(!this.name) {
            this.name = this.originalName;
            return;
        }
        this.user.details.name = this.name;
        this.user.save();
        this.originalName = this.name;
        this.presentToast();
    }

    //shows toast notification for saved name
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'New name saved',
            duration: 2000,
            position: 'bottom',
            cssClass: "toast-saved"
        });

        toast.present();
    }

}
