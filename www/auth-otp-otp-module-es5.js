(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-otp-otp-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/otp/otp.page.html":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/otp/otp.page.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthOtpOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/register\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"\">\n  <!-- <div class=\"theme-bg\"></div> -->\n  <div class=\"auth-content\">\n    <div padding-horizontal class=\"animated fadeInDown ion-text-center\">\n      <img src=\"../../assets/information-graphics-otp.png\" alt=\"logo\">\n    </div>\n  <form [formGroup]=\"otpForm\" class=\"register-form\" method=\"post\" (ngSubmit)=\"verified()\">\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && otpForm.controls['otp'].errors }\">\n      <ion-input class=\"form-control-lg\" type=\"password\" formControlName=\"otp\" placeholder=\"Enter OTP\"></ion-input>\n    </ion-item>\n \n    <p class=\"ion-text-center text-secondary\"> We have sent high security one time password to your email address. Please enter above and confirm.\n    </p>\n  \n    <ion-button type=\"submit\" shape=\"round\" size=\"large\" expand=\"full\" class=\"shadow register_btn bg-color\">Verify</ion-button>\n  </form>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/otp/otp-routing.module.ts":
    /*!************************************************!*\
      !*** ./src/app/auth/otp/otp-routing.module.ts ***!
      \************************************************/

    /*! exports provided: OtpPageRoutingModule */

    /***/
    function srcAppAuthOtpOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
        return OtpPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp.page */
      "./src/app/auth/otp/otp.page.ts");

      var routes = [{
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
      }];

      var OtpPageRoutingModule = function OtpPageRoutingModule() {
        _classCallCheck(this, OtpPageRoutingModule);
      };

      OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/otp/otp.module.ts":
    /*!****************************************!*\
      !*** ./src/app/auth/otp/otp.module.ts ***!
      \****************************************/

    /*! exports provided: OtpPageModule */

    /***/
    function srcAppAuthOtpOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
        return OtpPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-routing.module */
      "./src/app/auth/otp/otp-routing.module.ts");
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp.page */
      "./src/app/auth/otp/otp.page.ts");

      var OtpPageModule = function OtpPageModule() {
        _classCallCheck(this, OtpPageModule);
      };

      OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
      })], OtpPageModule);
      /***/
    },

    /***/
    "./src/app/auth/otp/otp.page.scss":
    /*!****************************************!*\
      !*** ./src/app/auth/otp/otp.page.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthOtpOtpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-header, :host ion-toolbar {\n  --background: #fcedff !important;\n  --border-width: 0;\n}\n:host ion-content {\n  --background: #fcedff !important;\n  --background: -moz-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -webkit-gradient(left top, left bottom, color-stop(0%, #fcedff), color-stop(100%, #ffffff)) !important;\n  --background: -webkit-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -o-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -ms-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%) !important;\n  --filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fcedff\", endColorstr=\"#ffffff\", GradientType=0) !important;\n  --background-attachment: fixed !important;\n  --background-position: center top !important;\n  --background-size: 100% 100% !important;\n}\n:host .auth-content {\n  margin: 0% 5%;\n}\n:host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n}\n:host .form-control-lg {\n  font-size: 18px;\n}\n:host ion-item {\n  margin-top: 2rem !important;\n}\n:host .form-error-dynamic-input {\n  border: 1px solid red !important;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n:host .text-secondary {\n  color: #666666 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9vdHAvb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVBO0VBQ0ksZ0NBQUE7RUFDQSw0RUFBQTtFQUNBLG9IQUFBO0VBQ0QsK0VBQUE7RUFDQywwRUFBQTtFQUNBLDJFQUFBO0VBQ0EsNkVBQUE7RUFDQSwrSEFBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQUFKO0FBRUE7RUFDQyxhQUFBO0FBQUQ7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQUFGO0FBRUE7RUFDSSxnQ0FBQTtBQUFKO0FBRUE7RUFDSSxlQUFBO0FBQUo7QUFFQTtFQUNJLDJCQUFBO0FBQUo7QUFFQTtFQUNFLGdDQUFBO0FBQUY7QUFFQTtFQUNJLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSw4REFBQTtFQUNBLDZEQUFBO0FBQUo7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBQUY7QUFFQTtFQUNFLGVBQUE7QUFBRjtBQUVBO0VBQ0Usc0JBQUE7QUFBRjtBQUVBO0VBQ0UseUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvb3RwL290cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1oZWFkZXIsIGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogI2ZjZWRmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICB9XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmY2VkZmYgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNmY2VkZmYpLCBjb2xvci1zdG9wKDEwMCUsICNmZmZmZmYpKSAhaW1wb3J0YW50O1xuICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmNlZGZmJywgZW5kQ29sb3JzdHI9JyNmZmZmZmYnLCBHcmFkaWVudFR5cGU9MCkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3AgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XG59XG4uYXV0aC1jb250ZW50IHtcblx0bWFyZ2luOiAwJSA1JTtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuLmZvcm0tY29udHJvbC1sZyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWl0ZW17XG4gICAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xufVxuLmZvcm0tZXJyb3ItZHluYW1pYy1pbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG4uc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctY29sb3J7XG4gIC0tYmFja2dyb3VuZDogIzZkMDBiZSAhaW1wb3J0YW50O1xuICBjb2xvcjojZmZmZmZmO1xuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbn1cbi5mbnQtc2l6ZXtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmhlYWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLnRleHQtc2Vjb25kYXJ5e1xuICBjb2xvcjojNjY2NjY2ICFpbXBvcnRhbnQ7XG59XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/auth/otp/otp.page.ts":
    /*!**************************************!*\
      !*** ./src/app/auth/otp/otp.page.ts ***!
      \**************************************/

    /*! exports provided: OtpPage */

    /***/
    function srcAppAuthOtpOtpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
        return OtpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");

      var OtpPage = /*#__PURE__*/function () {
        function OtpPage(modalController, navCtrl, menu, formBuilder, authService, alertService, route, router) {
          _classCallCheck(this, OtpPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.alertService = alertService;
          this.route = route;
          this.router = router;
          this.submitted = false;
          this.menu.enable(false);
          /*this.route.queryParams.subscribe(params => {
            if (params && params.special) {
              localStorage.setItem('user_id', JSON.parse(params.special));
            }
          });*/

          this.user_id = localStorage.getItem('user_id');
          this.verifiedOtpForm();
        }

        _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verifiedOtpForm",
          value: function verifiedOtpForm() {
            this.otpForm = this.formBuilder.group({
              otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{6}$")]]
            });
          }
        }, {
          key: "verified",
          value: function verified() {
            var _this = this;

            console.log(this.user_id);
            this.submitted = true; // stop here if form is invalid

            if (this.otpForm.invalid) {
              return;
            }

            this.authService.verifyOtp(this.user_id, this.otpForm.value.otp).subscribe(function (data) {
              if (data['status'] == 1) {
                localStorage.removeItem('user_id');

                _this.navCtrl.navigateRoot('/login');

                _this.alertService.presentToast(data['message']);
              } else {
                _this.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            }, function () {//this.navCtrl.navigateRoot('/home');
            });
          }
        }]);

        return OtpPage;
      }();

      OtpPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otp.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/otp/otp.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otp.page.scss */
        "./src/app/auth/otp/otp.page.scss"))["default"]]
      })], OtpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-otp-otp-module-es5.js.map