"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {
            username: '',
            password: ''
        };
        this.active = '';
        this.browseList = [];
        this.hover = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.activeHover = function (index) {
        this.hover = index;
        console.log(index);
    };
    LoginComponent.prototype.changeNav = function (val) {
        // this.active = val
        this.router.navigate([val]);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        var user = this.user;
        if (user.username && user.password) {
            this.userService.doLogin(this.user)
                .then(function (res) {
                if (res.code === 200) {
                    _this.router.navigate(['repositories']);
                    sessionStorage.setItem("username", user.username);
                }
                else {
                    alert(res.message);
                }
            }, function (error) { return _this.errorMsg = error; });
        }
        else if (!user.username) {
            alert('please input username');
        }
        else if (!user.password) {
            alert('please input password');
        }
        // this.router.navigate(['repositories']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: '../templates/common/login.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
