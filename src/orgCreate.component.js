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
var org_service_1 = require('./org.service');
var OrgCreateComponent = (function () {
    function OrgCreateComponent(orgService) {
        this.orgService = orgService;
        this.step = 1;
        this.org = {};
        this.repo = {};
        this.team = {};
    }
    OrgCreateComponent.prototype.changeStep = function (step) {
        this.step = step;
    };
    OrgCreateComponent.prototype.saveOrgInfo = function (step) {
        console.log(this.org);
        // this.orgService.orgCreate(this.org)
        //     .then(res => {if(res.code === 201){this.changeStep(step)}},
        //           error => this.errorMsg = <any>error);
        this.changeStep(step);
    };
    OrgCreateComponent.prototype.saveTeamInfo = function () {
        console.log(this.team);
    };
    OrgCreateComponent = __decorate([
        core_1.Component({
            selector: 'org-create',
            templateUrl: '../templates/organization/orgCreate.html'
        }), 
        __metadata('design:paramtypes', [org_service_1.OrgService])
    ], OrgCreateComponent);
    return OrgCreateComponent;
}());
exports.OrgCreateComponent = OrgCreateComponent;
