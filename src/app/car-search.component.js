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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var car_search_service_1 = require("./car-search.service");
var CarSearchComponent = (function () {
    function CarSearchComponent(carSearchService, router) {
        this.carSearchService = carSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    CarSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CarSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cars = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.carSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CarSearchComponent.prototype.gotoDetail = function (car) {
        var link = ['/detail', car.id];
        this.router.navigate(link);
    };
    return CarSearchComponent;
}());
CarSearchComponent = __decorate([
    core_1.Component({
        selector: 'car-search',
        templateUrl: './car-search.component.html',
        styleUrls: ['./car-search.component.css'],
        providers: [car_search_service_1.CarSearchService]
    }),
    __metadata("design:paramtypes", [car_search_service_1.CarSearchService,
        router_1.Router])
], CarSearchComponent);
exports.CarSearchComponent = CarSearchComponent;
//# sourceMappingURL=car-search.component.js.map