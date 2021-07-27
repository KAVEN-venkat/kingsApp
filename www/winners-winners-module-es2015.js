(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["winners-winners-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/winners/winners.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/winners/winners.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\" (click)=\"newwinnerModal()\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"add-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row class=\"header-section\">\n\t\t\t<ion-col class=\"ion-text-left\">Date</ion-col>\n\t\t\t<ion-col class=\"ion-text-center\">Time</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">Winner</ion-col>\n\t\t</ion-row>\n\t\t<div *ngIf=\"winners\">\n\t\t\t<ion-row class=\"winner-list\" *ngFor=\"let winner of winners\">\n\t\t\t\t<ion-col class=\"ion-text-left\">{{winner.winner_date | date:'dd-MM-yyyy'}}</ion-col>\n\t\t\t\t<ion-col class=\"ion-text-center\">{{winner.result_time}}</ion-col>\n\t\t\t\t<ion-col class=\"ion-text-right\">{{winner.winner_d}}{{winner.winner_e}}{{winner.winner_a}}{{winner.winner_b}}{{winner.winner_c}}</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/winners/winners-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/winners/winners-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WinnersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersPageRoutingModule", function() { return WinnersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _winners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winners.page */ "./src/app/winners/winners.page.ts");




const routes = [
    {
        path: '',
        component: _winners_page__WEBPACK_IMPORTED_MODULE_3__["WinnersPage"]
    }
];
let WinnersPageRoutingModule = class WinnersPageRoutingModule {
};
WinnersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WinnersPageRoutingModule);



/***/ }),

/***/ "./src/app/winners/winners.module.ts":
/*!*******************************************!*\
  !*** ./src/app/winners/winners.module.ts ***!
  \*******************************************/
/*! exports provided: WinnersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersPageModule", function() { return WinnersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _winners_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winners-routing.module */ "./src/app/winners/winners-routing.module.ts");
/* harmony import */ var _winners_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./winners.page */ "./src/app/winners/winners.page.ts");







let WinnersPageModule = class WinnersPageModule {
};
WinnersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _winners_routing_module__WEBPACK_IMPORTED_MODULE_5__["WinnersPageRoutingModule"]
        ],
        declarations: [_winners_page__WEBPACK_IMPORTED_MODULE_6__["WinnersPage"]]
    })
], WinnersPageModule);



/***/ }),

/***/ "./src/app/winners/winners.page.scss":
/*!*******************************************!*\
  !*** ./src/app/winners/winners.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .logoutbtn {\n  font-size: 24px;\n}\n:host .header-section .hydrated {\n  font-size: 12px !important;\n  font-weight: bold !important;\n}\n:host .winner-list .hydrated {\n  font-size: 14px !important;\n}\n:host .winner-list:nth-child(even) {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lubmVycy93aW5uZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFZLGVBQUE7QUFDaEI7QUFBSTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7QUFFUjtBQUFJO0VBQ0ksMEJBQUE7QUFFUjtBQUFJO0VBQ0ksc0JBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL3dpbm5lcnMvd2lubmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmxvZ291dGJ0bnsgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgLmhlYWRlci1zZWN0aW9uIC5oeWRyYXRlZHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC53aW5uZXItbGlzdCAuaHlkcmF0ZWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAud2lubmVyLWxpc3Q6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/winners/winners.page.ts":
/*!*****************************************!*\
  !*** ./src/app/winners/winners.page.ts ***!
  \*****************************************/
/*! exports provided: WinnersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersPage", function() { return WinnersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var src_app_services_winner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/winner.service */ "./src/app/services/winner.service.ts");
/* harmony import */ var _modals_winner_winner_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/winner/winner.page */ "./src/app/modals/winner/winner.page.ts");









let WinnersPage = class WinnersPage {
    constructor(modalController, navCtrl, menu, itemService, alertService, router, env, actionSheetController, loadingController, alertController, winnerService) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.itemService = itemService;
        this.alertService = alertService;
        this.router = router;
        this.env = env;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.winnerService = winnerService;
        this.winners = [];
        this.menu.enable(true);
    }
    ngOnInit() {
        this.winnerList();
    }
    winnerList() {
        this.presentLoading();
        this.winnerService.winnerLists().subscribe(data => {
            this.winners = data['winner'];
            this.presentLoadingDismiss();
        });
    }
    newwinnerModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_winner_winner_page__WEBPACK_IMPORTED_MODULE_8__["WinnerPage"],
                cssClass: "winner-Modal"
            });
            modal.onDidDismiss().then((response) => {
                if (response.data.dismissed) {
                    this.winnerList();
                    this.alertService.presentToast(response.data.data);
                }
                console.log("Modal Closed.");
            });
            return yield modal.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield loading.present();
        });
    }
    presentLoadingDismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
};
WinnersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_winner_service__WEBPACK_IMPORTED_MODULE_7__["WinnerService"] }
];
WinnersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-winners',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./winners.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/winners/winners.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./winners.page.scss */ "./src/app/winners/winners.page.scss")).default]
    })
], WinnersPage);



/***/ })

}]);
//# sourceMappingURL=winners-winners-module-es2015.js.map