import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FirebaseService {
    constructor(){
        firebase.init({
            persist: true
        }).then(
        (instance) => {
            console.log("firebase.init done");
        },
        (error) => {
            console.log("firebase.init error: " + error);
        }
        );
    }

    setValue(path: string, value: any) {
        firebase.setValue(path, value);
    }

    push(path: string, value: any) {
        firebase.push(path, value).then(res => {
            console.log(res.key);
        });
    }

    update(path: string, value: any) {
        firebase.update(path, value);
    }

    remove(path: string){
        firebase.remove(path);
    }

    keepInSync(path: string) {
        firebase.keepInSync(path, true).then(res => {
            console.log('firebase sync is on for ' + path);
        }, error=> {
            console.log('there are errors keeping ' + path + ' in sync');
            console.log(error);
        });
    }

    loginAnonymous() {
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then((user) => {
            console.log("User logged in anonymously with uid " + user.uid);
        }, (error) => {
            console.log("there is trouble logging in anonymously: " + error);
        });
    }

    loginWithEmail(email: string, password: string) {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: email,
            password: password
        }).then( res => {
            console.log("printing login result");
            console.log(JSON.stringify(res));
        }, error => {
            console.log("there are errors logging in with password");
            console.log();
        });
    }

    createEmailAccount(email: string, password: string) {
        firebase.createUser({
            email: email,
            password: password
        }).then(res => {
            console.log('user created');
            console.log({
                title: "User created",
                message: "userid: " + res.key,
                okButtonText: "Nice!"
            });
        }, error => {
            console.log('had error creating user');
            console.log(error);
        });
    }

    resetPassword(email: string) {
        firebase.resetPassword({
            email: email
        }).then(res => {
            // called when password reset was successful
            // you can now prompt the user to check the email
            console.log('resetPassword successful');
            console.log(res);
        }, error => {
            console.log('there are errors reseting password for user: '+ email);
            console.log(error);
        });
    }

    changePassword(email: string, oldPassword: string, newPassword: string) {
        firebase.changePassword({
            email: email,
            oldPassword: oldPassword,
            newPassword: newPassword
        }).then(res => {
            console.log('password change successful');
        }, error => {
            console.log('there are errors changing the password');
            console.log(error);
        });
    }


    facebookLogin() {
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            scope: ['public_profile', 'email']
        }).then(res => {
            console.log('facebook login successful');
            console.log(JSON.stringify(res));
        }, error => {
            console.log('there are erros logging in using facebook');
            console.log(error);
        });
    }

    googleLogin() {
        firebase.login({
            type: firebase.LoginType.GOOGLE
        }).then(res => {
            console.log('google login successful');
            console.log(res);
        }, error => {
            console.log('there are errors logging in using google');
            console.log(error);
        });
    }

    logout() {
        firebase.logout();
    }

}
