import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  notes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  	let info = this.auth.getUserInfo();
    this.notes = [
      'Hello',
      'World'
    ];
 
  }

  	public logout () {
      this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
      })
    }


}
