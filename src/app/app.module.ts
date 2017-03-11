import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RandomUser } from '../providers/random-user';
import { AuthService } from '../providers/auth-service';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { NotesPage } from '../pages/notes/notes';


@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    UserDetailsPage,
    LoginPage,
    RegisterPage,
    NotesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    UserDetailsPage,
    LoginPage,
    RegisterPage,
    NotesPage
  ],
  providers: [AuthService, RandomUser, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
