"use strict";
var core_1 = require('@angular/core');
var firebase = require("nativescript-plugin-firebase");
var FirebaseService = (function () {
    function FirebaseService() {
        firebase.init({
            persist: true
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    }
    FirebaseService.prototype.setValue = function (path, value) {
        firebase.setValue(path, value);
    };
    FirebaseService.prototype.login = function () {
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then(function (user) {
            console.log("User uid: " + user.uid);
        }, function (error) {
            console.log("Trouble in paradise: " + error);
        });
    };
    FirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map