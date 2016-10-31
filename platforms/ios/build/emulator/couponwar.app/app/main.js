"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var firebase_service_1 = require('./services/firebase.service');
// import firebase = require("nativescript-plugin-firebase");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule],
            providers: [firebase_service_1.FirebaseService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
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
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map