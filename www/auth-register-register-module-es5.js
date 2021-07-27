(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n</ion-header>\n<ion-content class=\"\">\n  <!-- <div class=\"theme-bg\"></div> -->\n  <div class=\"auth-content\">\n    <div padding-horizontal class=\"animated fadeInDown\">\n      <img src=\"../../assets/logo.png\" alt=\"logo\" class=\"logo\">\n    </div>\n  <form [formGroup]=\"registerForm\" class=\"register-form\" method=\"post\" (ngSubmit)=\"register()\">\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && registerForm.controls['first_name'].errors?.required }\">\n      <ion-input class=\"form-control-lg\" formControlName=\"first_name\" type=\"text\" placeholder=\"First Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && registerForm.controls['last_name'].errors?.required }\">\n      <ion-input class=\"form-control-lg\" type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && registerForm.controls['mobile_number'].errors }\">\n      <ion-input class=\"form-control-lg\" type=\"tel\" formControlName=\"mobile_number\" placeholder=\"Mobile Number\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && registerForm.controls['email'].errors }\">\n      <ion-input class=\"form-control-lg\" type=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && registerForm.controls['password'].errors?.required }\">\n      <ion-input class=\"form-control-lg\" type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && registerForm.controls['confirm_password'].errors?.required }\">\n      <ion-input class=\"form-control-lg\" type=\"password\" formControlName=\"confirm_password\" placeholder=\"Confirm Password\"></ion-input>\n    </ion-item>\n  \n    <p class=\"ion-text-center text-secondary\">By clicking register your are agree to the\n        <a href=\"javascript:void(0)\" class=\"terms_cnds\">Terms and Condition.</a>\n    </p>\n  \n    <ion-button type=\"submit\" shape=\"round\" expand=\"full\" size=\"large\" class=\"shadow register_btn bg-color\">Register</ion-button>\n  </form>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/register/register-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/auth/register/register-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function srcAppAuthRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/auth/register/register.page.ts");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/register/register.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/auth/register/register.module.ts ***!
      \**************************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppAuthRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "./src/app/auth/register/register-routing.module.ts");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/auth/register/register.page.ts");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/auth/register/register.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/auth/register/register.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-header, :host ion-toolbar {\n  --background: #fcedff !important;\n  --border-width: 0;\n}\n:host ion-content {\n  --background: #fcedff !important;\n  --background: -moz-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -webkit-gradient(left top, left bottom, color-stop(0%, #fcedff), color-stop(100%, #ffffff)) !important;\n  --background: -webkit-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -o-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -ms-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%) !important;\n  --filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fcedff\", endColorstr=\"#ffffff\", GradientType=0) !important;\n  --background-attachment: fixed !important;\n  --background-position: center top !important;\n  --background-size: 100% 100% !important;\n}\n:host .auth-content {\n  margin: 0% 5%;\n}\n:host .logo {\n  height: 100%;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n:host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .item-has-focus {\n  border: 1px solid #6d00be !important;\n}\n:host .form-error-dynamic-input {\n  border: 1px solid red !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n}\n:host .form-control-lg {\n  font-size: 18px;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n:host .terms_cnds {\n  color: #6d00be;\n  text-decoration: none;\n  background-color: transparent;\n}\n:host .text-secondary {\n  color: #666666 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsNEVBQUE7RUFDQSxvSEFBQTtFQUNELCtFQUFBO0VBQ0MsMEVBQUE7RUFDQSwyRUFBQTtFQUNBLDZFQUFBO0VBQ0EsK0hBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUFBSjtBQUdBO0VBQ0MsYUFBQTtBQUREO0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREY7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQURGO0FBR0E7RUFDRyxvQ0FBQTtBQURIO0FBR0E7RUFDRSxnQ0FBQTtBQURGO0FBR0E7RUFDSSxnQ0FBQTtBQURKO0FBR0E7RUFDSSxlQUFBO0FBREo7QUFJQTtFQUNJLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSw4REFBQTtFQUNBLDZEQUFBO0FBRko7QUFJQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBRkY7QUFJQTtFQUNFLGVBQUE7QUFGRjtBQUlBO0VBQ0Usc0JBQUE7QUFGRjtBQUlBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFGRjtBQUlBO0VBQ0UseUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVyLCBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICNmY2VkZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgfVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmNlZGZmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZmNlZGZmKSwgY29sb3Itc3RvcCgxMDAlLCAjZmZmZmZmKSkgIWltcG9ydGFudDtcbiAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZjZWRmZicsIGVuZENvbG9yc3RyPScjZmZmZmZmJywgR3JhZGllbnRUeXBlPTApICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50IHtcblx0bWFyZ2luOiAwJSA1JTtcbn1cbi5sb2dve1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1oYXMtZm9jdXN7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjNmQwMGJlICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1lcnJvci1keW5hbWljLWlucHV0e1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cbi5mb3JtLWNvbnRyb2wtbGcge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6ICM2ZDAwYmUgIWltcG9ydGFudDtcbiAgY29sb3I6I2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG4uZm50LXNpemV7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi50ZXJtc19jbmRze1xuICBjb2xvcjogIzZkMDBiZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi50ZXh0LXNlY29uZGFyeXtcbiAgY29sb3I6IzY2NjY2NiAhaW1wb3J0YW50O1xufVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/auth/register/register.page.ts":
    /*!************************************************!*\
      !*** ./src/app/auth/register/register.page.ts ***!
      \************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppAuthRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(modalController, navCtrl, menu, formBuilder, authService, alertService, router) {
          _classCallCheck(this, RegisterPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.alertService = alertService;
          this.router = router;
          this.submitted = false;
          this.userType = 'Dealer';
          this.menu.enable(false);
          this.createRegisterForm();
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('user_id')) {
              this.navCtrl.navigateRoot('/home');
            }
          }
        }, {
          key: "createRegisterForm",
          value: function createRegisterForm() {
            this.registerForm = this.formBuilder.group({
              first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
              confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
              mobile_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
            });
          }
        }, {
          key: "register",
          value: function register() {
            var _this = this;

            this.submitted = true; // stop here if form is invalid

            if (this.registerForm.invalid) {
              return;
            } //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
            //this.navCtrl.navigateRoot('/otp');


            this.authService.register(this.registerForm.value.first_name, this.registerForm.value.last_name, this.registerForm.value.mobile_number, this.registerForm.value.email, this.registerForm.value.password, this.userType).subscribe(function (data) {
              console.log(data);
              /*let navigationExtras: NavigationExtras = {
                queryParams: {
                  special: data['user_detail']['id']
                }
              };
              this.router.navigate(['/otp', navigationExtras]);*/

              if (data['status'] == 1) {
                localStorage.setItem('user_id', data['user_detail']['id']);

                _this.navCtrl.navigateRoot('/otp');

                _this.alertService.presentToast(data['message']);
              } else {
                _this.alertService.presentToast(data['message']);
              }
              /**/

            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
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
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/auth/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-register-register-module-es5.js.map