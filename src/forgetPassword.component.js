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
var ForgetPwdComponent = (function () {
    function ForgetPwdComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {
            username: '',
            email: '',
            password: '',
            're-password': ''
        };
        this.active = '';
        this.browseList = [];
        this.hover = '';
    }
    ForgetPwdComponent.prototype.ngOnInit = function () { };
    ForgetPwdComponent.prototype.activeHover = function (index) {
        this.hover = index;
        console.log(index);
    };
    ForgetPwdComponent.prototype.changeNav = function (val) {
        // this.active = val
        this.router.navigate([val]);
    };
    ForgetPwdComponent.prototype.sendEmail = function () {
        console.log(this.user);
        // this.userService.sendEmail(this.user)
        //     .then(res => { if(res.code === 200){this.router.navigate(['repositories'])}},
        //           error => this.errorMsg = <any>error);
        this.router.navigate(['repositories']);
    };
    ForgetPwdComponent = __decorate([
        core_1.Component({
            selector: 'forget-password',
            templateUrl: '../templates/common/forgetPassword.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], ForgetPwdComponent);
    return ForgetPwdComponent;
}());
exports.ForgetPwdComponent = ForgetPwdComponent;