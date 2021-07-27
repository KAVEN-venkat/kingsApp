(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-reset-reset-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthResetResetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/forgot\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"\">\n  <!-- <div class=\"theme-bg\"></div> -->\n  <div class=\"auth-content\">\n    <div padding-horizontal class=\"animated fadeInDown\">\n      <img src=\"../../assets/logo.png\" alt=\"logo\" class=\"logo\">\n    </div>\n  <form #form=\"ngForm\" class=\"reset-form\" method=\"post\" (ngSubmit)=\"reset(form)\">\n  \t<h3 class=\"ion-text-center\">Change <strong>Paasword</strong></h3><br>\n  \t<ion-item class=\"form-control form-group\" lines=\"none\">\n      <ion-input class=\"form-control-lg\" ngModel type=\"password\" name=\"current_password\" placeholder=\"Current Password\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"form-control form-group\" lines=\"none\">\n      <ion-input class=\"form-control-lg\" ngModel type=\"password\" name=\"new_password\" placeholder=\"New Password\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"form-control form-group\" lines=\"none\">\n      <ion-input class=\"form-control-lg\" ngModel type=\"password\" name=\"confirm_password\" placeholder=\"Confirn Password\"></ion-input>\n    </ion-item>\n  \t<br>\n    <ion-button type=\"submit\" shape=\"round\" expand=\"full\" size=\"large\" (click)=\"login()\" class=\"shadow reset_btn bg-color\">Update Password</ion-button>\n  </form>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/reset/reset-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/auth/reset/reset-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: ResetPageRoutingModule */

    /***/
    function srcAppAuthResetResetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPageRoutingModule", function () {
        return ResetPageRoutingModule;
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


      var _reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset.page */
      "./src/app/auth/reset/reset.page.ts");

      var routes = [{
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_3__["ResetPage"]
      }];

      var ResetPageRoutingModule = function ResetPageRoutingModule() {
        _classCallCheck(this, ResetPageRoutingModule);
      };

      ResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/reset/reset.module.ts":
    /*!********************************************!*\
      !*** ./src/app/auth/reset/reset.module.ts ***!
      \********************************************/

    /*! exports provided: ResetPageModule */

    /***/
    function srcAppAuthResetResetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPageModule", function () {
        return ResetPageModule;
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


      var _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset-routing.module */
      "./src/app/auth/reset/reset-routing.module.ts");
      /* harmony import */


      var _reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset.page */
      "./src/app/auth/reset/reset.page.ts");

      var ResetPageModule = function ResetPageModule() {
        _classCallCheck(this, ResetPageModule);
      };

      ResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPageRoutingModule"]],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]]
      })], ResetPageModule);
      /***/
    },

    /***/
    "./src/app/auth/reset/reset.page.scss":
    /*!********************************************!*\
      !*** ./src/app/auth/reset/reset.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthResetResetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-header, :host ion-toolbar {\n  --background: #fcedff !important;\n  --border-width: 0;\n}\n:host ion-content {\n  --background: #fcedff !important;\n  --background: -moz-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -webkit-gradient(left top, left bottom, color-stop(0%, #fcedff), color-stop(100%, #ffffff)) !important;\n  --background: -webkit-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -o-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: -ms-linear-gradient(top, #fcedff 0%, #ffffff 100%) !important;\n  --background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%) !important;\n  --filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fcedff\", endColorstr=\"#ffffff\", GradientType=0) !important;\n  --background-attachment: fixed !important;\n  --background-position: center top !important;\n  --background-size: 100% 100% !important;\n}\n:host .auth-content {\n  margin: 10% 5%;\n}\n:host .logo {\n  height: 100%;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n:host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n}\n:host .form-control-lg {\n  font-size: 18px;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC9yZXNldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsNEVBQUE7RUFDQSxvSEFBQTtFQUNELCtFQUFBO0VBQ0MsMEVBQUE7RUFDQSwyRUFBQTtFQUNBLDZFQUFBO0VBQ0EsK0hBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUFBSjtBQUdBO0VBQ0MsY0FBQTtBQUREO0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREY7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQURGO0FBR0E7RUFDSSxnQ0FBQTtBQURKO0FBR0E7RUFDSSxlQUFBO0FBREo7QUFHQTtFQUNJLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSw4REFBQTtFQUNBLDZEQUFBO0FBREo7QUFHQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBREY7QUFHQTtFQUNFLGVBQUE7QUFERjtBQUdBO0VBQ0Usc0JBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQvcmVzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVyLCBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICNmY2VkZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgfVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmNlZGZmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZmNlZGZmKSwgY29sb3Itc3RvcCgxMDAlLCAjZmZmZmZmKSkgIWltcG9ydGFudDtcbiAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZjZWRmZicsIGVuZENvbG9yc3RyPScjZmZmZmZmJywgR3JhZGllbnRUeXBlPTApICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50IHtcblx0bWFyZ2luOiAxMCUgNSU7XG59XG4ubG9nb3tcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuLmZvcm0tY29udHJvbC1sZyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xufVxuLmJnLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6ICM2ZDAwYmUgIWltcG9ydGFudDtcbiAgY29sb3I6I2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG4uZm50LXNpemV7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/auth/reset/reset.page.ts":
    /*!******************************************!*\
      !*** ./src/app/auth/reset/reset.page.ts ***!
      \******************************************/

    /*! exports provided: ResetPage */

    /***/
    function srcAppAuthResetResetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPage", function () {
        return ResetPage;
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

      var ResetPage = /*#__PURE__*/function () {
        function ResetPage(modalController, navCtrl, menu) {
          _classCallCheck(this, ResetPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.menu.enable(false);
        }

        _createClass(ResetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissLogin",
          value: function dismissLogin() {
            this.modalController.dismiss();
          }
        }, {
          key: "login",
          value: function login() {
            this.navCtrl.navigateRoot('/login');
          }
        }]);

        return ResetPage;
      }();

      ResetPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      ResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reset.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reset.page.scss */
        "./src/app/auth/reset/reset.page.scss"))["default"]]
      })], ResetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-reset-reset-module-es5.js.map