(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"\">\n  <!-- <div class=\"theme-bg\"></div> -->\n  <div class=\"auth-content\">\n    <div padding-horizontal class=\"animated fadeInDown\">\n      <img src=\"../../assets/logo.png\" alt=\"logo\" class=\"logo\">\n    </div>\n  <form #form=\"ngForm\" class=\"login-form\" method=\"post\" (ngSubmit)=\"forgot(form)\">\n    <ion-item class=\"form-control form-group\" lines=\"none\">\n      <ion-input class=\"form-control-lg\" ngModel type=\"email\" name=\"email\" placeholder=\"Enter Email\"></ion-input>\n    </ion-item>\n  \n    <p class=\"text-secondary ion-text-center\">If you already have password,<br>please <a href=\"/login\" class=\"bg-color-deeppurple\">Sign in</a> here</p>\n  \n    <ion-button type=\"submit\" size=\"large\" shape=\"round\" expand=\"full\" (click)=\"resetPassword()\" class=\"shadow login_btn bg-color\">Reset Password</ion-button>\n  </form>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/forgot/forgot-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/forgot/forgot-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/forgot/forgot.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.module.ts ***!
  \**********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");







let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-header, :host ion-toolbar {\n  --background: #fcedff !important;\n  --border-width: 0;\n}\n:host ion-content {\n  --background: #fcedff !important;\n  --background: -moz-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -webkit-gradient(left top, left bottom, color-stop(0%, #fcedff), color-stop(100%, #ffffff)) !important;\n  --background: -webkit-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -o-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -ms-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%) !important;\n  --filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fcedff\", endColorstr=\"#ffffff\", GradientType=0) !important;\n  --background-attachment: fixed !important;\n  --background-position: center top !important;\n  --background-size: 100% 100% !important;\n}\n:host .auth-content {\n  margin: 25% 5%;\n}\n:host .logo {\n  height: 100%;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n:host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n}\n:host .form-control-lg {\n  font-size: 18px;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n:host .text-secondary {\n  color: #666666 !important;\n}\n:host .bg-color-deeppurple {\n  color: #6d00be !important;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVBO0VBQ0ksZ0NBQUE7RUFDQSw0RUFBQTtFQUNBLG9IQUFBO0VBQ0QsK0VBQUE7RUFDQywwRUFBQTtFQUNBLDJFQUFBO0VBQ0EsNkVBQUE7RUFDQSwrSEFBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQUFKO0FBR0E7RUFDQyxjQUFBO0FBREQ7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFERjtBQUdBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdEQUFBO0FBREY7QUFHQTtFQUNJLGdDQUFBO0FBREo7QUFHQTtFQUNJLGVBQUE7QUFESjtBQUlBO0VBQ0kseURBQUE7RUFDQSxpRUFBQTtFQUNBLDhEQUFBO0VBQ0EsNkRBQUE7QUFGSjtBQUlBO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFGRjtBQUlBO0VBQ0UsZUFBQTtBQUZGO0FBSUE7RUFDRSxzQkFBQTtBQUZGO0FBSUE7RUFDRSx5QkFBQTtBQUZGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1oZWFkZXIsIGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogI2ZjZWRmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICB9XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmY2VkZmYgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNmY2VkZmYpLCBjb2xvci1zdG9wKDEwMCUsICNmZmZmZmYpKSAhaW1wb3J0YW50O1xuICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmNlZGZmJywgZW5kQ29sb3JzdHI9JyNmZmZmZmYnLCBHcmFkaWVudFR5cGU9MCkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3AgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuXHRtYXJnaW46IDI1JSA1JTtcbn1cbi5sb2dve1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1jb250cm9sLWxnIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbn1cbi5iZy1jb2xvcntcbiAgLS1iYWNrZ3JvdW5kOiAjNmQwMGJlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xufVxuLmZudC1zaXple1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uaGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG4udGV4dC1zZWNvbmRhcnl7XG4gIGNvbG9yOiM2NjY2NjYgIWltcG9ydGFudDtcbn1cbi5iZy1jb2xvci1kZWVwcHVycGxle1xuICBjb2xvcjojNmQwMGJlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.ts ***!
  \********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ForgotPage = class ForgotPage {
    constructor(modalController, navCtrl, menu) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.menu.enable(false);
    }
    ngOnInit() {
    }
    resetPassword() {
        this.navCtrl.navigateRoot('/reset');
    }
};
ForgotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot.page.scss */ "./src/app/auth/forgot/forgot.page.scss")).default]
    })
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=auth-forgot-forgot-module-es2015.js.map