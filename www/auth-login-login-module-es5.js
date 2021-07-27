(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"\">\n  <!-- <div class=\"theme-bg\"></div> -->\n  <div class=\"auth-content\">\n    <div padding-horizontal class=\"animated fadeInDown\">\n      <img src=\"../../assets/logo.png\" alt=\"logo\" class=\"logo\">\n    </div>\n  <form [formGroup]=\"loginForm\" class=\"login-form\" method=\"post\" (ngSubmit)=\"login()\">\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && loginForm.controls['mobile'].errors?.required }\">\n      <ion-input class=\"form-control-lg\" type=\"tel\" formControlName=\"mobile\" placeholder=\"Mobile Number\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && loginForm.controls['password'].errors?.required }\">\n      <ion-input class=\"form-control-lg\" type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n  \n    <p class=\"ion-text-center forgot_password\" (click)=\"forgot()\">Forgot Password?</p>\n  \n    <ion-button type=\"submit\" shape=\"round\" expand=\"full\" size=\"large\" class=\"shadow login_btn bg-color\">Login</ion-button>\n  </form>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/login/login-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/auth/login/login-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/auth/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/login/login.module.ts":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.module.ts ***!
      \********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/auth/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/auth/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/auth/login/login.page.scss":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-header, :host ion-toolbar {\n  --background: #fcedff !important;\n  --border-width: 0;\n}\n:host ion-content {\n  --background: #fcedff !important;\n  --background: -moz-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -webkit-gradient(left top, left bottom, color-stop(0%, #fcedff), color-stop(100%, #ffffff)) !important;\n  --background: -webkit-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -o-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -ms-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%) !important;\n  --filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fcedff\", endColorstr=\"#ffffff\", GradientType=0) !important;\n  --background-attachment: fixed !important;\n  --background-position: center top !important;\n  --background-size: 100% 100% !important;\n}\n:host .auth-content {\n  margin: 25% 5%;\n}\n:host .logo {\n  height: 100%;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n:host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .item-has-focus {\n  border: 1px solid #6d00be !important;\n}\n:host .form-error-dynamic-input {\n  border: 1px solid red !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n}\n:host .form-control-lg {\n  font-size: 18px;\n}\n:host .forgot_password {\n  color: #6d00be;\n  margin-top: 1.5rem !important;\n  font-size: 20px;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsNEVBQUE7RUFDQSxvSEFBQTtFQUNELCtFQUFBO0VBQ0MsMEVBQUE7RUFDQSwyRUFBQTtFQUNBLDZFQUFBO0VBQ0EsK0hBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUFBSjtBQUdBO0VBQ0MsY0FBQTtBQUREO0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREY7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQURGO0FBR0E7RUFDRyxvQ0FBQTtBQURIO0FBR0E7RUFDRSxnQ0FBQTtBQURGO0FBR0E7RUFDSSxnQ0FBQTtBQURKO0FBR0E7RUFDSSxlQUFBO0FBREo7QUFHQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFERjtBQUdBO0VBQ0kseURBQUE7RUFDQSxpRUFBQTtFQUNBLDhEQUFBO0VBQ0EsNkRBQUE7QUFESjtBQUdBO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFERjtBQUdBO0VBQ0UsZUFBQTtBQURGO0FBR0E7RUFDRSxzQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1oZWFkZXIsIGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogI2ZjZWRmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICB9XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmY2VkZmYgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNmY2VkZmYpLCBjb2xvci1zdG9wKDEwMCUsICNmZmZmZmYpKSAhaW1wb3J0YW50O1xuICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmNlZGZmJywgZW5kQ29sb3JzdHI9JyNmZmZmZmYnLCBHcmFkaWVudFR5cGU9MCkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3AgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuXHRtYXJnaW46IDI1JSA1JTtcbn1cbi5sb2dve1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1oYXMtZm9jdXN7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjNmQwMGJlICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1lcnJvci1keW5hbWljLWlucHV0e1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cbi5mb3JtLWNvbnRyb2wtbGcge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5mb3Jnb3RfcGFzc3dvcmR7XG4gIGNvbG9yOiM2ZDAwYmU7XG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctY29sb3J7XG4gIC0tYmFja2dyb3VuZDogIzZkMDBiZSAhaW1wb3J0YW50O1xuICBjb2xvcjojZmZmZmZmO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uZm50LXNpemV7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/auth/login/login.page.ts":
    /*!******************************************!*\
      !*** ./src/app/auth/login/login.page.ts ***!
      \******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(modalController, navCtrl, menu, formBuilder, authService, alertService, router, loadingController) {
          _classCallCheck(this, LoginPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.alertService = alertService;
          this.router = router;
          this.loadingController = loadingController;
          this.submitted = false;
          this.menu.enable(false);
          this.loginFormValidation();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('user_id')) {
              this.navCtrl.navigateRoot('/home');
            }
          }
        }, {
          key: "loginFormValidation",
          value: function loginFormValidation() {
            this.loginForm = this.formBuilder.group({
              mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
            });
          }
        }, {
          key: "dismissLogin",
          value: function dismissLogin() {
            this.modalController.dismiss();
          }
        }, {
          key: "forgot",
          value: function forgot() {
            this.navCtrl.navigateRoot('/forgot');
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            //this.navCtrl.navigateRoot('/home');
            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            }

            this.presentLoading();
            this.authService.login(this.loginForm.value.mobile, this.loginForm.value.password).subscribe(function (data) {
              if (data['status'] == 1) {
                localStorage.setItem('access_token', data['user_detail']['access_token']);
                localStorage.setItem('token_type', data['user_detail']['token_type']);
                localStorage.setItem('user_id', data['user_detail']['user']['id']);
                localStorage.setItem('first_name', data['user_detail']['user']['first_name']);
                localStorage.setItem('last_name', data['user_detail']['user']['last_name']);
                localStorage.setItem('email', data['user_detail']['user']['email']);

                _this.presentLoadingDismiss();

                _this.navCtrl.navigateRoot('/home');

                _this.alertService.presentToast(data['message']);
              } else {
                _this.alertService.presentToast(data['message']);
              }
            }, function (error) {
              _this.presentLoadingDismiss();

              console.log(error);
            }, function () {//this.dismissRegister();
              //this.navCtrl.navigateRoot('/otp');
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoadingDismiss",
          value: function presentLoadingDismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/auth/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-login-login-module-es5.js.map