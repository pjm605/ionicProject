import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';

@Component({
    selector: 'page-notes',
    templateUrl: 'notes.html'
})

/* This page allows users to add,edit,and delete notes that are persisted to 
ionic.io for the logged in user. Once a note is added, swipe left to find the edit and delete
options
*/
export class NotesPage {
    notes: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Auth,
        public alertCtrl: AlertController, public user: User) {
        this.loadNotes();
    }

    public logout () {
        this.auth.logout();
        this.navCtrl.setRoot(LoginPage);
    }

    //creates a new note and persists
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
                    this.saveNotes();
                }
            }
            ]
        });

        prompt.present();
    }

    //edits an existing note
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
                        this.saveNotes();
                    }
                }
            }
            ]
        });

        prompt.present();
    }

    //removes a note
    deleteNote(note) {
        let index = this.notes.indexOf(note);

        if(index > -1) {
            this.notes.splice(index, 1);
            this.saveNotes();
        }
    }

    //loads saved notes for the user from ionic.io Notes are saved 
    //as a json string, this converts to the notes array object
    loadNotes() {
        let savedNotesJson = this.user.get("notes", "");
        if(savedNotesJson === null) {
            return;
        }

        let savedNotes = JSON.parse(savedNotesJson);
        for (let i = 0; i < savedNotes.length; i++) {
            this.notes.push(savedNotes[i]);
        }
    }

    saveNotes() {
        let notesJson = JSON.stringify(this.notes);
        this.user.set("notes", notesJson);
        this.user.save();
    }


}
