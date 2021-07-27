(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"log-out-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"profileForm\" class=\"profile-form ion-padding\" method=\"post\" (ngSubmit)=\"updateProfile()\">\n    <ion-thumbnail class=\"thumbnail_img\">\n\t\t<!-- <img src=\"../../assets/logo-header.png\" *ngIf=\"customer && customer.photo != null\">\n    <img src=\"{{img_url}}images/no_img.png\" *ngIf=\"customer && customer.photo == null\"> -->\n    <img [src]=\"image\" />\n    <ion-icon name=\"camera\" class=\"camera-icon\" (click)=\"selectImage()\"></ion-icon>\n\t</ion-thumbnail>\n\t<h6 class=\"subtitle\">Basic Information</h6>\n    <ion-label position=\"stacked\">First Name</ion-label>\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && profileForm.controls['first_name'].errors?.required }\">\n      \t<ion-input class=\"form-control-lg ion-no-padding\" formControlName=\"first_name\" type=\"text\" placeholder=\"First Name\"></ion-input>\n    </ion-item>\n    <ion-label position=\"stacked\">Last Name</ion-label>\n    <ion-item class=\"form-control form-group\" lines=\"none\">\n      \t<ion-input class=\"form-control-lg ion-no-padding\" formControlName=\"last_name\" type=\"text\" placeholder=\"Last Name\"></ion-input>\n    </ion-item>\n    <ion-label position=\"stacked\">Mobile</ion-label>\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && profileForm.controls['mobile'].errors?.required }\">\n      <ion-input class=\"form-control-lg ion-no-padding\" formControlName=\"mobile\" type=\"tel\" placeholder=\"Mobile Number\"></ion-input>\n    </ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && profileForm.controls['email'].errors?.required }\">\n      <ion-input class=\"form-control-lg ion-no-padding\" formControlName=\"email\" type=\"email\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n  \t<h6 class=\"subtitle\">Address</h6>\n  \t<ion-label position=\"stacked\">Address</ion-label>\n    <ion-item class=\"form-control form-group\" lines=\"none\">\n      <ion-input class=\"form-control-lg ion-no-padding\" formControlName=\"address\" type=\"text\" placeholder=\"Address\"></ion-input>\n    </ion-item>   \n    <ion-row>\n      <ion-col>\n        <ion-label position=\"stacked\">Country</ion-label>\n        <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && profileForm.controls['country'].errors?.required }\">\n          <ion-select placeholder=\"Select Country\" class=\"ion-no-padding\" formControlName=\"country\" okText=\"Ok\" cancelText=\"Close\" (ionChange)=\"getStates($event)\">\n            <ion-select-option class=\"ion-no-padding\" *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-label position=\"stacked\">State</ion-label>\n        <ion-item class=\"form-control form-group\" lines=\"none\">\n          <ion-select placeholder=\"Select State\" class=\"ion-no-padding\" formControlName=\"state\" okText=\"Ok\" cancelText=\"Close\" (ionChange)=\"getCities($event)\">\n            <ion-select-option class=\"ion-no-padding\" *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label position=\"stacked\">City</ion-label>\n        <ion-item class=\"form-control form-group\" lines=\"none\">\n          <ion-select placeholder=\"Select City\" class=\"ion-no-padding\" formControlName=\"city\" okText=\"Ok\" cancelText=\"Close\">\n            <ion-select-option class=\"ion-no-padding\" *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-label position=\"stacked\">Pincode</ion-label>\n        <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && profileForm.controls['pincode'].errors?.required }\">\n          <ion-input class=\"form-control-lg ion-no-padding\" formControlName=\"pincode\" type=\"text\" placeholder=\"Pincode\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-button type=\"submit\" shape=\"round\" expand=\"full\" size=\"large\" class=\"shadow register_btn bg-color\">SUBMIT</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n  height: calc(1.5em + .75rem + 2px);\n}\n:host .form-error-dynamic-input {\n  border: 1px solid red !important;\n}\n:host .form-control-lg {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n:host .thumbnail_img {\n  width: 158px;\n  height: 158px;\n  height: 178px;\n  width: 178px;\n  border-radius: 90px;\n  border: 10px solid #6d00be;\n  margin: 0 auto;\n}\n:host .thumbnail_img img {\n  border-radius: 90px;\n  position: relative;\n}\n:host .subtitle {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n:host .profile-form ion-label {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 0px 15px;\n}\n:host ion-select {\n  max-width: 100%;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .camera-icon {\n  font-size: 24px;\n  background-color: #343a40;\n  border-color: #343a40;\n  color: #ffffff;\n  padding: 6px;\n  border-radius: 50%;\n  position: absolute;\n  margin-left: -35px;\n  top: 30%;\n  margin-top: -50px;\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQURGO0FBR0E7RUFDSSxnQ0FBQTtFQUNBLGtDQUFBO0FBREo7QUFHQTtFQUNFLGdDQUFBO0FBREY7QUFHQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0kseURBQUE7RUFDQSxpRUFBQTtFQUNBLDhEQUFBO0VBQ0EsNkRBQUE7QUFGSjtBQUlBO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFGRjtBQUlBO0VBQ0UsZUFBQTtBQUZGO0FBSUE7RUFDRSxzQkFBQTtBQUZGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFGRjtBQUlBO0VBQW9CLG1CQUFBO0VBQXFCLGtCQUFBO0FBQXpDO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDQTtFQUFZLGVBQUE7QUFFWiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIFxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbn1cbi5mb3JtLWVycm9yLWR5bmFtaWMtaW5wdXR7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuLmZvcm0tY29udHJvbC1sZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctY29sb3J7XG4gIC0tYmFja2dyb3VuZDogIzZkMDBiZSAhaW1wb3J0YW50O1xuICBjb2xvcjojZmZmZmZmO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uZm50LXNpemV7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi50aHVtYm5haWxfaW1ne1xuICB3aWR0aDoxNThweDtcbiAgaGVpZ2h0OjE1OHB4O1xuICBoZWlnaHQ6IDE3OHB4O1xuICB3aWR0aDogMTc4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNmQwMGJlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aHVtYm5haWxfaW1nIGltZ3sgYm9yZGVyLXJhZGl1czogOTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9maWxlLWZvcm0gaW9uLWxhYmVse1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuaW9uLXNlbGVjdHtcbiAgbWF4LXdpZHRoOiAxMDAlOyBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1Nztcbn1cbi5jYW1lcmEtaWNvbntcbiAgZm9udC1zaXplOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gIHRvcDogMzAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbi5sb2dvdXRidG57IGZvbnQtc2l6ZTogMjRweDsgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var src_app_services_city_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");











//import SignaturePad from 'signature_pad';




let ProfilePage = class ProfilePage {
    constructor(modalController, navCtrl, menu, customerService, countryService, stateService, cityService, alertService, router, env, activatedRoute, formBuilder, file, camera, loadingController, actionSheetController, webview, base64) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.customerService = customerService;
        this.countryService = countryService;
        this.stateService = stateService;
        this.cityService = cityService;
        this.alertService = alertService;
        this.router = router;
        this.env = env;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.file = file;
        this.camera = camera;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.webview = webview;
        this.base64 = base64;
        this.submitted = false;
        this.img_url = this.env.IMG_URL;
        this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.image = this.img_url + 'images/no_img.png';
        this.getCountries();
        this.getUser();
        this.profileFormValidation();
    }
    ngOnInit() {
        if (!localStorage.getItem('user_id')) {
            this.navCtrl.navigateRoot('/');
        }
    }
    profileFormValidation() {
        this.profileForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            last_name: [''],
            address: [''],
            city: [''],
            state: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        });
    }
    getCountries() {
        //alert(this.user_id);
        //this.presentLoading();
        this.countryService.countries().subscribe(data => {
            //this.presentLoadingDismiss();
            if (data['status']) {
                this.countries = data['countiresList'];
                //console.log(this.countries);
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    getStates(event) {
        //alert(this.user_id);
        //this.presentLoading();
        this.stateService.states(event.detail.value).subscribe(data => {
            //this.presentLoadingDismiss();
            if (data['status']) {
                this.states = data['statesList'];
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    getCities(event) {
        //alert(this.user_id);
        //this.presentLoading();
        this.cityService.cities(event.detail.value).subscribe(data => {
            //this.presentLoadingDismiss();
            if (data['status']) {
                this.cities = data['citiesList'];
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    getUser() {
        //alert(this.user_id);
        //this.presentLoading();
        this.customerService.customer(this.user_id).subscribe(data => {
            console.log(data['customerDetails'].state);
            //this.presentLoadingDismiss();
            //let result = JSON.stringify(data);
            if (data['status']) {
                this.customer = data['customerDetails'];
                /*this.profileForm = this.formBuilder.group({
                    first_name: [this.customer.first_name, Validators.required],
                    last_name: [this.customer.last_name],
                    address: [this.customer.address],
                    country: [this.customer.country, Validators.required],
                    city: [this.customer.city],
                    state: [this.customer.state],
                    pincode: [this.customer.postcode, Validators.required],
                    email: [this.customer.email, [Validators.required, Validators.email]],
                    mobile: [this.customer.mobile, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
                });*/
                localStorage.setItem('first_name', this.customer.first_name);
                localStorage.setItem('last_name', this.customer.last_name);
                localStorage.setItem('email', this.customer.email);
                this.profileForm.controls['first_name'].setValue(this.customer.first_name);
                this.profileForm.controls['last_name'].setValue(this.customer.last_name);
                this.profileForm.controls['address'].setValue(this.customer.address);
                this.profileForm.controls['email'].setValue(this.customer.email);
                this.profileForm.controls['mobile'].setValue(this.customer.mobile);
                this.profileForm.controls['country'].setValue(this.customer.country);
                this.profileForm.controls['state'].setValue(this.customer.state);
                this.profileForm.controls['city'].setValue(this.customer.city);
                this.profileForm.controls['pincode'].setValue(this.customer.postcode);
                this.image = this.img_url + "uploads/profile/" + this.customer.photo;
                //console.log(this.customer);
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    readFile(file) {
        let body = { 'image_data': file };
        this.customerService.uploadFile(body, this.user_id).subscribe(dataRes => {
            console.log(dataRes);
        });
        /*const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], {
            type: file.type
            });
            const formData = new FormData();
            //formData.append('name', 'Hello');
            formData.append('file', imgBlob, file.name);
            //console.log(formData);
            this.customerService.uploadFile(formData,this.user_id).subscribe(dataRes => {
                console.log(dataRes);
            });
        };
        reader.readAsArrayBuffer(file);*/
    }
    takePicture(options) {
        this.camera.getPicture(options).then((imageData) => {
            this.imageData = imageData;
            //this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
            this.image = this.webview.convertFileSrc(imageData);
            this.base64.encodeFile(this.imageData).then((base64File) => {
                console.log(base64File);
                this.readFile(base64File);
            }, (err) => {
                console.log(err);
            });
            /*this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
                entry.file(file => {
                    //console.log(file);
                    this.readFile(file);
                });
            });*/
        }, (err) => {
            // Handle error
        });
    }
    pickImage(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.takePicture(options);
    }
    selectImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }]
            });
            yield actionSheet.present();
        });
    }
    updateProfile() {
        this.submitted = true;
        if (this.profileForm.invalid) {
            return;
        }
        //this.presentLoading();
        this.customerService.updateCustomer(this.profileForm.value.first_name, this.profileForm.value.last_name, this.profileForm.value.mobile, this.profileForm.value.email, this.profileForm.value.address, this.profileForm.value.country, this.profileForm.value.state, this.profileForm.value.city, this.profileForm.value.pincode, this.user_id).subscribe(data => {
            console.log(data);
            if (data['status'] == 1) {
                //this.presentLoadingDismiss();
                this.alertService.presentToast(data['message']);
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
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
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"] },
    { type: src_app_services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"] },
    { type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"] },
    { type: src_app_services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__["Base64"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env.service */ "./src/app/services/env.service.ts");





let CityService = class CityService {
    constructor(http, env) {
        this.http = http;
        this.env = env;
    }
    cities(stateId) {
        return this.http.get(this.env.API_URL + 'cities/' + stateId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(city => {
            return city;
        }));
    }
};
CityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] }
];
CityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CityService);



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env.service */ "./src/app/services/env.service.ts");





let CountryService = class CountryService {
    constructor(http, env) {
        this.http = http;
        this.env = env;
    }
    countries() {
        return this.http.get(this.env.API_URL + 'countries').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(country => {
            return country;
        }));
    }
};
CountryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] }
];
CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CountryService);



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env.service */ "./src/app/services/env.service.ts");





let StateService = class StateService {
    constructor(http, env) {
        this.http = http;
        this.env = env;
    }
    states(countryId) {
        return this.http.get(this.env.API_URL + 'states/' + countryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(state => {
            return state;
        }));
    }
};
StateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] }
];
StateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], StateService);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map