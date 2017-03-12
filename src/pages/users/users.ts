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

/* This page is the master user list. It provides a list of random users
returned by the random-user provider. It supports returning more users when the list
is scrolled to the bottom.
You can also search by the name of the user and filter by gender
*/
export class UsersPage {
    //list that contains currently filtered users
	users: User[];
    //master list that contains all users
    masterUsers: User[];

    gender = "";
    filteredUsers: any;

    constructor(public navCtrl: NavController, private randomUsers: RandomUser, public auth: Auth) {
        this.gender = "all";

        randomUsers.load().subscribe(users => {
            this.masterUsers = users;
            this.users = this.masterUsers;
        });
    }

    public logout () {
        this.auth.logout();
        this.navCtrl.setRoot(LoginPage);
    }
    
    //goto the user details page when user is selected
    goToDetails(selectedUser: any) {
        this.navCtrl.push(UserDetailsPage, {selectedUser});
    }

    //supports searching by the users name
    search(ev: any) {
        this.users = this.masterUsers;

        let term = ev.target.value;

        if(term && term.trim() != '') {
            this.users = this.users.filter((user) => {
                return (user.email.toLowerCase().indexOf(term.toLowerCase()) > -1);
            })
        } else {
            this.filterByGender(this.gender);
        }
    }

    //add more users on the scroll event
    onInfiniteScroll(infiniteScroll) {
        setTimeout(() => {
            this.randomUsers.load().subscribe(users => {
                for (let i = 0; i < users.length; i++) {
                    this.masterUsers.push(users[i]);
                }
            });

            infiniteScroll.complete();
            this.filterByGender(this.gender);
        }, 500);
    }

    //filter the users by gender
    filterByGender(gender) {
        // reset to the master list and then filter
        this.users = this.masterUsers;
        if(gender === "male" || gender === "female") {
            this.users = this.users.filter((user) => {
                return (user.gender.toLowerCase() === gender);
            });
        }
    }

}
