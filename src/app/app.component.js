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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Which is the best car???';
        this.object = {
            link: "http://www.cs.odu.edu/~sshankar/image.png"
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['./app.component.css'],
        template: "\n     <div class=\"image\" [ngStyle]=\"{'background-image':'url(' + object.link + ')'}\">\n     <h1>{{title}}</h1>\n     <nav>\n     \t<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n     \t<a routerLink=\"/cars\" routerLinkActive=\"active\">Cars</a>\n      <a routerLink=\"/aboutme\" routerLinkActive=\"active\">About Me</a>\n     </nav>\n     <router-outlet></router-outlet>\n     </div>\n   "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map