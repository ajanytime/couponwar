// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FirebaseService } from './services/firebase.service';
// import firebase = require("nativescript-plugin-firebase");


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [FirebaseService]
})
class AppComponentModule {}

// firebase.init({
//   // Optionally pass in properties for database, authentication and cloud messaging,
//   // see their respective docs.
//   persist: true
// }).then(
//   (instance) => {
//     console.log("firebase.init done");
//   },
//   (error) => {
//     console.log("firebase.init error: " + error);
//   }
// );  

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);