(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t\t\n\t\t</ion-buttons>\n\t\t<!--<ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"log-out-outline\" class=\"logoutbtn\" ></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>-->\n\t\t<ion-title class=\"ion-text-center\">\n\t\t\t<img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\">\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card class=\"card-class\">\n\t\t<ion-card-header class=\"ion-no-padding\">\n\t\t\t<ion-item class=\"deeppurple-theme-bg\" *ngIf=\"customer\">\n\t\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t\t<img src=\"{{img_url}}uploads/profile/{{customer.photo}}\" *ngIf=\"customer && customer.photo != null\">\n    \t\t\t\t<img src=\"{{img_url}}images/no_img.png\" *ngIf=\"customer && customer.photo == null\">\n\t\t\t\t</ion-thumbnail>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>{{customer.first_name}} {{customer.last_name}}</h3>\n\t\t\t\t\t<p>{{customer.email}}</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card-header>\n\t\t<ion-card-content class=\"ion-no-padding\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"9\" size-lg>\n\t\t\t\t\t\t<h3 class=\"mb-0 font-weight-normal\">Rs. {{ total | number:'1.2-2' }}</h3>\n                        <p class=\"text-mute\">Today Sale</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\" size-lg>\n\t\t\t\t\t\t<ion-fab class=\"fab_class\">\n\t\t\t\t\t\t    <ion-fab-button>\n\t\t\t\t\t\t    \t<ion-icon name=\"cash\"></ion-icon>\n\t\t\t\t\t\t    </ion-fab-button>\n\t\t\t\t\t\t</ion-fab>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t\t<!--<ion-grid class=\"card-footer\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<h3 class=\"mb-0 font-weight-normal\">INR 71.00<ion-icon name=\"arrow-down-outline\" color=\"success\"></ion-icon></h3>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<h3 class=\"mb-0 font-weight-normal\">INR 71.00<ion-icon name=\"arrow-up-outline\" color=\"danger\"></ion-icon></h3>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>-->\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-segment color=\"primary\" [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" scrollable>\n\t\t<ion-segment-button value=\"ticket\" class=\"segmentcss\">\n\t\t\t<ion-label>Items</ion-label>\n\t\t\t<ion-icon name=\"clipboard-outline\"></ion-icon>\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"categories\" class=\"segmentcss\">\n\t\t\t<ion-label>Category</ion-label>\n\t\t\t<ion-icon name=\"people-outline\"></ion-icon>\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"sales\" checked class=\"segmentcss\">\n\t\t\t<ion-label>Sale</ion-label>\n\t\t\t<ion-icon name=\"cash\"></ion-icon>\n\t\t</ion-segment-button>\n\t\t\n\t\t<ion-segment-button value=\"result\" class=\"segmentcss\">\n\t\t\t<ion-label>Result</ion-label>\n\t\t\t<ion-icon name=\"book-outline\"></ion-icon>\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"settings\" class=\"segmentcss\">\n\t\t\t<ion-label>Settings</ion-label>\n\t\t\t<ion-icon name=\"settings-outline\"></ion-icon>\n\t\t</ion-segment-button>\n\t</ion-segment>\n\t<div class=\"scrolling-wrapper\" *ngIf=\"items\">\n        <div class=\"card\" *ngFor=\"let item of items\">\n          <ion-card>\n            <ion-card-header class=\"ion-no-border\">\n              <ion-card-title>{{item.item_name}} <span class=\"category-name\">({{item.category.category_name}})</span><br><span class=\"price-section\">(Rs. {{item.item_price}})</span></ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n               {{item.result_code}}\n            </ion-card-content>\n          </ion-card>\n        </div>        \n    </div>\n\n    <div class=\"scrolling-wrapper\">\n        <div class=\"card offer-slide\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"3\" size-lg>\n\t\t\t\t\t\t<img src=\"../../assets/graphics-carousel-scheme1.png\" alt=\"\" class=\"mw-100\">\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"9\" size-lg>\n\t\t\t\t\t\t<div class=\"\">\n                            <h3>Gold loan scheme</h3>\n                            <p>Get all money at market rate of gold</p>\n                        </div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n        </div>\n        <div class=\"card offer-slide\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"3\" size-lg>\n\t\t\t\t\t\t<img src=\"../../assets/graphics-carousel-scheme1.png\" alt=\"\" class=\"mw-100\">\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"9\" size-lg>\n\t\t\t\t\t\t<div class=\"\">\n                            <h3>Gold loan scheme</h3>\n                            <p>Get all money at market rate of gold</p>\n                        </div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n        </div>\n    </div>\n\n\t<div class=\"ion-text-center\">\n        <h3 class=\"subtitle mb-1\">Recent Sale</h3>\n        <p class=\"text-secondary\">Last four customer's sale</p>\n    </div>\n    <ion-grid class=\"recent-sale\">\n    \t<ion-row *ngIf=\"orders\">\n    \t\t<ion-col size=\"6\" class=\"ion-text-center\" *ngFor=\"let order of orders\">\n    \t\t\t<div>\n\t    \t\t\t<!--<ion-avatar class=\"ion-margin-start\">\n\t\t\t\t\t\t<img src=\"../../assets/logo-header.png\" *ngIf=\"order.customer && order.customer.photo != null\">\n    \t\t\t\t\t<img src=\"{{img_url}}images/no_img.png\" *ngIf=\"order.customer && order.customer.photo == null\">\n\t\t\t\t\t</ion-avatar>-->\n\t\t\t\t\t<p class=\"text-secondary text-mute small\">{{order.item.item_name}} ({{order.item.category.category_name}}) (Rs. {{order.item.item_price}})</p>\n\t\t\t\t\t<p class=\"text-secondary text-mute small\">Qty:- {{order.total_items}}</p>\n            \t</div>\n    \t\t</ion-col>    \t\t\n    \t</ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-card {\n  border-radius: 10px;\n}\n:host .auth-content {\n  margin: 25% 5%;\n}\n:host ion-card-header h3 {\n  font-size: 20px;\n  font-weight: bold;\n}\n:host ion-card-header p, :host ion-card-header h3 {\n  color: #ffffff;\n}\n:host p {\n  font-size: 16px;\n}\n:host ion-card-content > ion-grid {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n:host ion-fab > ion-fab-button {\n  --background: #6d00be !important;\n}\n:host .card-footer h3 {\n  font-size: 18px;\n}\n:host .card-footer p {\n  font-size: 14px;\n}\n:host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n}\n:host .form-control-lg {\n  font-size: 18px;\n}\n:host .font-weight-normal {\n  font-weight: bold !important;\n  font-size: 30px;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n:host ion-thumbnail {\n  --border-radius:50%;\n  margin: 15px 15px 15px 0px;\n}\n:host ion-card > ion-label {\n  margin: 15px 15px;\n}\n:host .segmentcss ion-icon {\n  padding: 10px;\n  font-size: 25px;\n  border-radius: 50%;\n  background: #a700ff;\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, #a700ff), color-stop(100%, #00189a));\n  background: linear-gradient(135deg, #a700ff 0%, #00189a 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#d800ff\", endColorstr=\"#00189a\", GradientType=1);\n  color: #ffffff;\n}\n:host .segment-radius {\n  border-radius: 10px !important;\n  margin: 6px !important;\n}\n:host .segment-radius h3 {\n  font-size: 22px;\n}\n:host .segment-radius p {\n  font-size: 10px;\n}\n:host .subtitle {\n  font-size: 24px;\n  line-height: 26px;\n  margin-top: 15px;\n  margin-bottom: 0px;\n  text-transform: uppercase;\n  color: #212529;\n}\n:host .text-secondary {\n  margin: 1px 0px;\n  color: #666666 !important;\n}\n:host .recent-sale ion-avatar {\n  margin: 0 auto;\n}\n:host .recent-sale h3 {\n  font-size: 18px;\n  margin: 2px;\n}\n:host .recent-sale ion-col div {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n  padding: 15px;\n}\n:host .scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n:host .card {\n  display: inline-block;\n}\n:host .scrolling-wrapper ion-card {\n  border-radius: 10px;\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  background: #ffffff;\n  width: 150px;\n}\n:host .offer-slide {\n  padding: 0 15px;\n  width: 300px;\n  background: #a700ff;\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, #a700ff), color-stop(100%, #00189a));\n  background: linear-gradient(135deg, #a700ff 0%, #00189a 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#d800ff\", endColorstr=\"#00189a\", GradientType=1);\n  color: #ffffff;\n  border-radius: 10px;\n  margin: 0px 8px;\n}\n:host .offer-slide p {\n  white-space: initial;\n}\n:host .fab_class {\n  margin: 0% 15% !important;\n}\n:host .card-footer ion-col:last-child {\n  border-left: 1px solid #dee2e6 !important;\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n:host .price-section {\n  font-size: 12px;\n}\n:host .category-name {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFVLG1CQUFBO0FBQVY7QUFDQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0UsZUFBQTtBQUZGO0FBSUE7RUFDRSwyQ0FBQTtBQUZGO0FBSUE7RUFDRSxnQ0FBQTtBQUZGO0FBSUE7RUFDRSxlQUFBO0FBRkY7QUFJQTtFQUNFLGVBQUE7QUFGRjtBQUlBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdEQUFBO0FBRkY7QUFJQTtFQUNJLGdDQUFBO0FBRko7QUFJQTtFQUNJLGVBQUE7QUFGSjtBQUlBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FBRko7QUFJQTtFQUNJLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSw4REFBQTtFQUNBLDZEQUFBO0FBRko7QUFJQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBRkY7QUFJQTtFQUNFLGVBQUE7QUFGRjtBQUlBO0VBQ0Usc0JBQUE7QUFGRjtBQUlBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtBQUZGO0FBSUE7RUFBc0IsaUJBQUE7QUFEdEI7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHdHQUFBO0VBSUEsNkRBQUE7RUFDQSxrSEFBQTtFQUNBLGNBQUE7QUFBRjtBQUVBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQUFGO0FBRUE7RUFDRSxlQUFBO0FBQUY7QUFFQTtFQUNFLGVBQUE7QUFBRjtBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVBO0VBQ0UsY0FBQTtBQUFGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUE7RUFDRSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFGO0FBRUU7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0EscUJBQUE7QUFBRjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSx5REFBQTtFQUNBLGlFQUFBO0VBQ0EsOERBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEsd0dBQUE7RUFJQSw2REFBQTtFQUNBLGtIQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUU7RUFDRSxvQkFBQTtBQUFKO0FBRUU7RUFDRSx5QkFBQTtBQUFKO0FBRUU7RUFDRSx5Q0FBQTtBQUFKO0FBRUE7RUFBWSxlQUFBO0FBQ1o7QUFBQTtFQUNFLGVBQUE7QUFFRjtBQUFBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgIFxuXG5pb24tY2FyZHsgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuLmF1dGgtY29udGVudCB7XG4gIG1hcmdpbjogMjUlIDUlO1xufVxuaW9uLWNhcmQtaGVhZGVye1xuaDN7XG4gIGZvbnQtc2l6ZToyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgXG59XG5cbnAsaDN7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG59XG5we1xuICBmb250LXNpemU6MTZweDsgXG59XG5pb24tY2FyZC1jb250ZW50ID4gaW9uLWdyaWR7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG59XG5pb24tZmFiID4gaW9uLWZhYi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogIzZkMDBiZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtZm9vdGVyIGgze1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY2FyZC1mb290ZXIgcHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1jb250cm9sLWxnIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1jb2xvcntcbiAgLS1iYWNrZ3JvdW5kOiAjNmQwMGJlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5mbnQtc2l6ZXtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmhlYWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuaW9uLXRodW1ibmFpbHtcbiAgLS1ib3JkZXItcmFkaXVzOjUwJTtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwcHg7XG59XG5pb24tY2FyZCA+IGlvbi1sYWJlbHsgbWFyZ2luOiAxNXB4IDE1cHg7IH1cbi5zZWdtZW50Y3NzIGlvbi1pY29ue1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2E3MDBmZjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNhNzAwZmYpLCBjb2xvci1zdG9wKDEwMCUsICMwMDE4OWEpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2E3MDBmZiAwJSwgIzAwMTg5YSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2E3MDBmZiAwJSwgIzAwMTg5YSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2Q4MDBmZicsIGVuZENvbG9yc3RyPScjMDAxODlhJywgR3JhZGllbnRUeXBlPTEpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zZWdtZW50LXJhZGl1c3tcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDZweCAhaW1wb3J0YW50O1xufVxuLnNlZ21lbnQtcmFkaXVzIGgze1xuICBmb250LXNpemU6IDIycHg7XG59XG4uc2VnbWVudC1yYWRpdXMgcHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzIxMjUyOTtcbn1cbi50ZXh0LXNlY29uZGFyeXtcbiAgbWFyZ2luOiAxcHggMHB4O1xuICBjb2xvcjogIzY2NjY2NiAhaW1wb3J0YW50O1xufVxuLnJlY2VudC1zYWxlIGlvbi1hdmF0YXJ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnJlY2VudC1zYWxlIGgze1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuLnJlY2VudC1zYWxlIGlvbi1jb2wgZGl2e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbiAgLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH0gXG4gIC5zY3JvbGxpbmctd3JhcHBlciBpb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgd2lkdGg6MTUwcHg7XG4gIH1cbiAgLm9mZmVyLXNsaWRle1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogI2E3MDBmZjtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjYTcwMGZmKSwgY29sb3Itc3RvcCgxMDAlLCAjMDAxODlhKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2E3MDBmZiAwJSwgIzAwMTg5YSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZDgwMGZmJywgZW5kQ29sb3JzdHI9JyMwMDE4OWEnLCBHcmFkaWVudFR5cGU9MSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDBweCA4cHg7XG4gIH1cbiAgLm9mZmVyLXNsaWRlIHB7XG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gIH1cbiAgLmZhYl9jbGFzc3tcbiAgICBtYXJnaW46IDAlIDE1JSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJkLWZvb3RlciBpb24tY29sOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gIH1cbi5sb2dvdXRidG57IGZvbnQtc2l6ZTogMjRweDsgfVxuLnByaWNlLXNlY3Rpb257XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXRlZ29yeS1uYW1le1xuICBmb250LXNpemU6IDEycHg7XG59XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modals_type_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/type/type.page */ "./src/app/modals/type/type.page.ts");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");









let HomePage = class HomePage {
    constructor(modalController, navCtrl, menu, itemService, alertService, env, orderService, customerService, loadingController) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.itemService = itemService;
        this.alertService = alertService;
        this.env = env;
        this.orderService = orderService;
        this.customerService = customerService;
        this.loadingController = loadingController;
        this.items = [];
        this.orders = [];
        this.total = 0;
        this.img_url = this.env.IMG_URL;
        this.menu.enable(true);
    }
    ngOnInit() {
        if (!localStorage.getItem('user_id')) {
            this.navCtrl.navigateRoot('/');
        }
        else {
            this.navCtrl.navigateRoot('/home');
            //this.openModal();
        }
        this.getUser();
        this.itemsList();
        this.ordersList();
        this.ordersTotal();
    }
    itemsList() {
        this.itemService.items().subscribe(data => {
            if (data['status']) {
                this.items = data['itemsList'];
                console.log(this.items);
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    ordersTotal() {
        //this.presentLoading();
        this.orderService.totalOrder().subscribe(data => {
            //this.presentLoadingDismiss();
            if (data['status']) {
                this.total = data['ordersTotal'].total;
                console.log(this.orders);
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    ordersList() {
        //this.presentLoading();
        let limit = 4;
        this.orderService.orderLists(limit).subscribe(data => {
            //this.presentLoadingDismiss();
            if (data['status']) {
                this.orders = data['ordersList'];
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    getUser() {
        //alert(localStorage.getItem('user_id'));
        this.customerService.customer(localStorage.getItem('user_id')).subscribe(data => {
            if (data['status']) {
                this.customer = data['customerDetails'];
                console.log(this.customer);
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_type_type_page__WEBPACK_IMPORTED_MODULE_3__["TypePage"],
                cssClass: 'my-custom-modal-css'
            });
            return yield modal.present();
        });
    }
    segmentChanged(event) {
        console.log(event.target.value);
        this.navCtrl.navigateRoot('/' + event.target.value);
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
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map