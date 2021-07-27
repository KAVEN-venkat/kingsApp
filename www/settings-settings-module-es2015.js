(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t\t\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"log-out-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list lines=\"none\" class=\"settings-list\">\n\t\t<ion-item (click)=\"devices()\">\t\t\t\n\t\t\t<ion-grid class=\"ion-no-padding\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"9\" class=\"ion-no-padding\">\n\t\t\t\t\t\t<h6 class=\"\">Scan Device</h6>\n                        <p class=\"\">All available blutooth devices</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\" class=\"ion-no-padding ion-text-end\">\n\t\t\t\t\t\t<ion-icon name=\"chevron-forward-outline\"></ion-icon>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-grid class=\"ion-no-padding\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"9\" class=\"ion-no-padding\">\n\t\t\t\t\t\t<h6 class=\"\">Email Notification</h6>\n                        <p class=\"\">Default all notification will be sent</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\" class=\"ion-no-padding ion-text-end\">\n\t\t\t\t\t\t<ion-toggle name=\"grape\" color=\"tertiary\" checked></ion-toggle>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-grid class=\"ion-no-padding\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"9\" class=\"ion-no-padding\">\n\t\t\t\t\t\t<h6 class=\"\">Change password</h6>\n                        <p class=\"\">You must need your verified email</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\" class=\"ion-no-padding ion-text-end\">\n\t\t\t\t\t\t<ion-icon name=\"chevron-forward-outline\"></ion-icon>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .settings-list ion-item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n:host .settings-list ion-item:last-child {\n  border-bottom: 0px !important;\n}\n:host .settings-list h6, :host .settings-list p {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n}\n:host .settings-list ion-item ion-grid ion-row ion-col:last-child ion-icon {\n  font-size: 30px;\n  padding: 20px 0px !important;\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNkNBQUE7QUFBUjtBQUVJO0VBQ0ksNkJBQUE7QUFBUjtBQUVJO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUVJO0VBQVksZUFBQTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuc2V0dGluZ3MtbGlzdCBpb24taXRlbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gICAgfVxuICAgIC5zZXR0aW5ncy1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2V0dGluZ3MtbGlzdCBoNiwgLnNldHRpbmdzLWxpc3QgcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zZXR0aW5ncy1saXN0IGlvbi1pdGVtIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbDpsYXN0LWNoaWxkIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6MjBweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxvZ291dGJ0bnsgZm9udC1zaXplOiAyNHB4OyB9XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let SettingsPage = class SettingsPage {
    constructor(modalController, menu, navCtrl, loadingController) {
        this.modalController = modalController;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.menu.enable(true);
    }
    ngOnInit() {
        //this.presentLoading();
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    devices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navCtrl.navigateRoot('/device');
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map