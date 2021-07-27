(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen class=\"deeppurple-theme ion-no-border\" scroll-y=\"false\">\n\t<ion-slides [options]=\"slideOpts\" pager=\"true\">\n\t\t<ion-slide>\n\t\t\t<div class=\"slide\">\n\t\t\t\t<img src=\"../../assets/welcome/welcome1.png\"/>\n\t\t\t\t<h2>Amazing Finance Corner</h2>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>\n\t\t\t</div>\n\t\t</ion-slide>\n\n\t\t<ion-slide>\n\t\t\t<img src=\"../../assets/welcome/welcome2.png\"/>\n\t\t\t<h2>Cross all over the world</h2>\n\t\t\t<p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>\n\t\t</ion-slide>\n\n\t\t<ion-slide>\n\t\t\t<img src=\"../../assets/welcome/welcome3.png\"/>\n\t\t\t<h2>Experience ease of use</h2>\n\t\t\t<p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>\n\t\t</ion-slide>\n\n\t\t<!-- <ion-slide>\n\t\t\t<img src=\"./slide-4.png\"/>\n\t\t\t<h2>Ready to Play?</h2>\n\t\t\t<ion-button fill=\"clear\">Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n\t\t</ion-slide> -->\n\n\t</ion-slides>\n</ion-content>\n<ion-footer collapse=\"condense\" class=\"ion-no-border\">\n\t<ion-toolbar class=\"ion-no-border\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t    <ion-col size=\"6\">\n\t\t\t    \t<ion-button shape=\"round\" size=\"large\" expand=\"full\" class=\"loginBtn\" (click)=\"login()\">Login</ion-button>\n\t\t\t    </ion-col>\n\t\t\t    <ion-col size=\"6\">\n\t\t\t    \t<ion-button shape=\"round\" size=\"large\" expand=\"full\" class=\"registerBtn\" (click)=\"register()\">Register</ion-button>\n\t\t    \t</ion-col>\n\t\t    </ion-row>\n\t   </ion-grid>\n\t </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/welcome/welcome-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/welcome/welcome-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: WelcomePageRoutingModule */

    /***/
    function srcAppWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
        return WelcomePageRoutingModule;
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


      var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/welcome/welcome.page.ts");

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
      }];

      var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
        _classCallCheck(this, WelcomePageRoutingModule);
      };

      WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WelcomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/welcome/welcome.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/welcome/welcome.module.ts ***!
      \*******************************************/

    /*! exports provided: WelcomePageModule */

    /***/
    function srcAppWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
        return WelcomePageModule;
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


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./welcome-routing.module */
      "./src/app/welcome/welcome-routing.module.ts");
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/welcome/welcome.page.ts");

      var WelcomePageModule = function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      };

      WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
      })], WelcomePageModule);
      /***/
    },

    /***/
    "./src/app/welcome/welcome.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/welcome/welcome.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.deeppurple-theme ion-slides {\n  background: #fcedff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #fcedff), color-stop(100%, #ffffff));\n  background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fcedff\", endColorstr=\"#ffffff\", GradientType=0);\n  background-attachment: fixed;\n  background-position: center top;\n  background-size: 100% 100%;\n}\n\n.deeppurple-bg-color {\n  background-color: #6d00be !important;\n}\n\nion-button.loginBtn {\n  --background: #6d00be !important;\n}\n\nion-button.registerBtn {\n  --background: #ffffff !important;\n  --color: #6d00be !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRDs7QUFHQTtFQUNDLFlBQUE7QUFBRDs7QUFHQTtFQUNDLGNBQUE7QUFBRDs7QUFHQTtFQUNDLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBRDs7QUFHQTtFQUNDLGdCQUFBO0FBQUQ7O0FBR0E7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFBRDs7QUFHQTtFQUNDLHFDQUFBO0FBQUQ7O0FBRUE7RUFDSSxtQkFBQTtFQUVBLHVHQUFBO0VBSUEsZ0VBQUE7RUFDQSxrSEFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0Msb0NBQUE7QUFFRDs7QUFBQTtFQUNFLGdDQUFBO0FBR0Y7O0FBREE7RUFDRSxnQ0FBQTtFQUNBLDJCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuXHQtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuXHQtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuXG59XG5cbmlvbi1zbGlkZXMge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG5cdG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuXHRtYXgtaGVpZ2h0OiA1MCU7XG5cdG1heC13aWR0aDogODAlO1xuXHRtYXJnaW46IDYwcHggMCA0MHB4O1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuXHRwYWRkaW5nOiAwIDQwcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDEuNTtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG5cdGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59XG4uZGVlcHB1cnBsZS10aGVtZSBpb24tc2xpZGVze1xuICAgIGJhY2tncm91bmQ6ICNmY2VkZmY7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZmNlZGZmKSwgY29sb3Itc3RvcCgxMDAlLCAjZmZmZmZmKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmNlZGZmIDAlLCAjZmZmZmZmIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmY2VkZmYgMCUsICNmZmZmZmYgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjZWRmZiAwJSwgI2ZmZmZmZiAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmNlZGZmJywgZW5kQ29sb3JzdHI9JyNmZmZmZmYnLCBHcmFkaWVudFR5cGU9MCk7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuLmRlZXBwdXJwbGUtYmctY29sb3J7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2ZDAwYmUgIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24ubG9naW5CdG57XG4gIC0tYmFja2dyb3VuZDogIzZkMDBiZSAhaW1wb3J0YW50O1xufVxuaW9uLWJ1dHRvbi5yZWdpc3RlckJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6ICM2ZDAwYmUgIWltcG9ydGFudDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/welcome/welcome.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/welcome/welcome.page.ts ***!
      \*****************************************/

    /*! exports provided: WelcomePage */

    /***/
    function srcAppWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
        return WelcomePage;
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

      var WelcomePage = /*#__PURE__*/function () {
        function WelcomePage(modalController, menu, navCtrl) {
          _classCallCheck(this, WelcomePage);

          this.modalController = modalController;
          this.menu = menu;
          this.navCtrl = navCtrl;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
          this.menu.enable(false);
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!localStorage.getItem('user_id')) {
              this.navCtrl.navigateRoot('/');
            } else {
              this.navCtrl.navigateRoot('/home');
            }
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.navCtrl.navigateRoot('/register');

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.navCtrl.navigateRoot('/login');

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return WelcomePage;
      }();

      WelcomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./welcome.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./welcome.page.scss */
        "./src/app/welcome/welcome.page.scss"))["default"]]
      })], WelcomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=welcome-welcome-module-es5.js.map