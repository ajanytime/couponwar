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

    login() {
          firebase.login({
      type: firebase.LoginType.ANONYMOUS
  }).then((user) => {
      console.log("User uid: " + user.uid);
  }, (error) => {
      console.log("Trouble in paradise: " + error);
  });
    }

}
