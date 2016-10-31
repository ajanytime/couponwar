import {Component} from "@angular/core";
import { FirebaseService } from './services/firebase.service';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    constructor(private firebaseService: FirebaseService){}

    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public login() {
        this.firebaseService.login();
    }
    
    public onTap() {
        this.counter--;
        console.log("about to set value using firebase service .....");
        this.firebaseService.setValue('/companies', {foo:'bar'});
    }
}
