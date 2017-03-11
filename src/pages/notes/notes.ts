import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  notes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth,
   public alertCtrl: AlertController) {
  }

	public logout () {
      this.auth.logout();
      this.navCtrl.setRoot(LoginPage);
  }

  addNote () {
    let prompt = this.alertCtrl.create({
      title: "Add Note",
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.notes.push(data);
          }
        }
      ]
    });

    prompt.present();
  }

  editNote(note) {
    let prompt = this.alertCtrl.create({
      title: "Edit Note",
      inputs: [{
        name: "title"
      }],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Save",
          handler: data => {
            let index = this.notes.indexOf(note);

            if(index > -1) {
              this.notes[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();
  }

  deleteNote(note) {

    let index = this.notes.indexOf(note);

    if(index > -1) {
      this.notes.splice(index, 1);
    }
  }


}
