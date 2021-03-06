import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RandomUser } from '../providers/random-user';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { LoginDetailsPage } from '../pages/login-details/login-details';
import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { NotesPage } from '../pages/notes/notes';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

//set the ionic.io app_id to use Auth
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e11c0b6e'
  }
};

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    UserDetailsPage,
    LoginPage,
    RegisterPage,
    NotesPage,
    LoginDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    UserDetailsPage,
    LoginPage,
    RegisterPage,
    NotesPage,
    LoginDetailsPage
  ],
  providers: [RandomUser, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
