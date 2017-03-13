# ionicProject
# Description

This is a small web application built on ionic 2 to demo some features of ionic 2.
This application demonstrates
It includes the following pages:
  * Login Page
  * Register Page
  * Users Page
  * User Details Page
  * Notes Page
  * Login Details Page


This application features a login/register page that allows users to create a new account and log in with their account information.
Once a user is logged in, they will see a master list of random users/people returned from an api.
Users can search by name or filter by gender. If you scroll to the end of the list, it will add additional users to the list.
When a user is clicked, it will take you to the user details page.
There is also a Notes page where the user can add,edit, and delete notes that persist with the user.
On the Login Details page, the user can log out 


# Nav Bar
Once a user is logged in, they will see a side nav bar, which they can use to switch pages.
Clicking a link will the user to that specific link.

# Login Page

The Login Page asks for an email and password for login. This will validate the information against users added in ionic.io under my app_id and uses Auth provided by ionic/cloud-angular.
The page does some validation as well. The email input validates email format and the login button is only enabled when the password is not empty.
THere is also a link to create a new account which will take you to the Register Page.

# Register Page

The register page allows users to add new accounts. The accounts will be added to my app_id under ionic.io.
This will allow new accounts to created. The form also does some validation on the email format, and requires all fields to be filled.

# Users Page

Once logged in, this page displays a list of random users pulled from the RandomUsers api.
It shows the user's avatar and email address, and once clicked will take you to the user's detail page.
It also allows users to search by name and filter by gender.
Also, I handled the infiniteScroll event to add more users when you scroll to the bottom.

# User Detail Page

This page shows more details about the selected user.
It shows the random user's name, email, avatar, date of birth, phone, address, and email address.
I also added icons that I could link if the api also gave me social network information.


# Notes Page

The notes page allows the logged in user to add, edit, and delete notes that they can view when logged in.
The notes are persisted as custom data in ionic.io.
Once a note is added, the user can swipe or drag the mouse left to see the edit/delete icons.
The note is only visible to the user logged in.

# Login Details Page

This page provides additional details of the user that is logged in.
It allows the user to edit their names through this page.
The page will enable the "Save Change" button when the name is not empty and when
it is sees a change from the original name.


# Other
I change the font of the application and changed the colorscheme of the application.
There is also a log off icon on the top of the Users and Notes page that the user can use to log off the session.


# Installation

```
$ npm install
$ ionic serve
```

Or you can view a live demo at:
https://ionic-project-users.herokuapp.com/
