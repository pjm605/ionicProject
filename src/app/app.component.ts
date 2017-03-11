import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';
import { NotesPage } from '../pages/notes/notes';
import { LoginDetailsPage } from '../pages/login-details/login-details';


import { Auth } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;


  constructor(
    public platform: Platform,
    public menu: MenuController,
    public auth: Auth
  ) {
    this.initializeApp();


    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Notes', component: NotesPage },
      { title: 'Login Details', component: LoginDetailsPage },
    ];

    if (auth.isAuthenticated())
    {
      this.rootPage = UsersPage;
    }


  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

}
