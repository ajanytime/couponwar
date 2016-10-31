"use strict";
var core_1 = require("@angular/core");
var firebase_service_1 = require('./services/firebase.service');
var AppComponent = (function () {
    function AppComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.login = function () {
        this.firebaseService.login();
    };
    AppComponent.prototype.onTap = function () {
        this.counter--;
        console.log("about to set value using firebase service .....");
        this.firebaseService.setValue('/companies', { foo: 'bar' });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map