(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["luckyprice-luckyprice-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/luckyprice/luckyprice.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/luckyprice/luckyprice.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLuckypriceLuckypricePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\" (click)=\"newLuckyModal()\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"add-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row class=\"header-section\">\n\t\t\t<ion-col class=\"ion-text-center\">ITEMS</ion-col>\n\t\t\t<ion-col class=\"ion-text-center\">DIGIT</ion-col>\n\t\t\t<ion-col class=\"ion-text-center\">PRICE (Rs.)</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">BONUS</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">ST</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngFor=\"let luckyPrice of luckyPrices\" class=\"luckyprice-list\">\n\t\t\t<ion-col class=\"ion-text-center\">{{luckyPrice.item.item_name}} ({{luckyPrice.item.category.category_name}})</ion-col>\n\t\t\t<ion-col class=\"ion-text-center\">{{luckyPrice.digit}}</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">{{luckyPrice.price}}</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">{{luckyPrice.bonus}}</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">{{luckyPrice.stbonus}}</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/luckyprice/luckyprice-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/luckyprice/luckyprice-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: LuckypricePageRoutingModule */

    /***/
    function srcAppLuckypriceLuckypriceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LuckypricePageRoutingModule", function () {
        return LuckypricePageRoutingModule;
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


      var _luckyprice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./luckyprice.page */
      "./src/app/luckyprice/luckyprice.page.ts");

      var routes = [{
        path: '',
        component: _luckyprice_page__WEBPACK_IMPORTED_MODULE_3__["LuckypricePage"]
      }];

      var LuckypricePageRoutingModule = function LuckypricePageRoutingModule() {
        _classCallCheck(this, LuckypricePageRoutingModule);
      };

      LuckypricePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LuckypricePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/luckyprice/luckyprice.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/luckyprice/luckyprice.module.ts ***!
      \*************************************************/

    /*! exports provided: LuckypricePageModule */

    /***/
    function srcAppLuckypriceLuckypriceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LuckypricePageModule", function () {
        return LuckypricePageModule;
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


      var _luckyprice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./luckyprice-routing.module */
      "./src/app/luckyprice/luckyprice-routing.module.ts");
      /* harmony import */


      var _luckyprice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./luckyprice.page */
      "./src/app/luckyprice/luckyprice.page.ts");

      var LuckypricePageModule = function LuckypricePageModule() {
        _classCallCheck(this, LuckypricePageModule);
      };

      LuckypricePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _luckyprice_routing_module__WEBPACK_IMPORTED_MODULE_5__["LuckypricePageRoutingModule"]],
        declarations: [_luckyprice_page__WEBPACK_IMPORTED_MODULE_6__["LuckypricePage"]]
      })], LuckypricePageModule);
      /***/
    },

    /***/
    "./src/app/luckyprice/luckyprice.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/luckyprice/luckyprice.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLuckypriceLuckypricePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .logoutbtn {\n  font-size: 24px;\n}\n:host .header-section .hydrated {\n  font-size: 12px !important;\n  font-weight: bold !important;\n}\n:host .luckyprice-list .hydrated {\n  font-size: 14px !important;\n}\n:host .luckyprice-list:nth-child(even) {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHVja3lwcmljZS9sdWNreXByaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFZLGVBQUE7QUFDaEI7QUFBSTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7QUFFUjtBQUFJO0VBQ0ksMEJBQUE7QUFFUjtBQUFJO0VBQ0ksc0JBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2x1Y2t5cHJpY2UvbHVja3lwcmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmxvZ291dGJ0bnsgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgLmhlYWRlci1zZWN0aW9uIC5oeWRyYXRlZHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sdWNreXByaWNlLWxpc3QgLmh5ZHJhdGVke1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmx1Y2t5cHJpY2UtbGlzdDpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/luckyprice/luckyprice.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/luckyprice/luckyprice.page.ts ***!
      \***********************************************/

    /*! exports provided: LuckypricePage */

    /***/
    function srcAppLuckypriceLuckypricePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LuckypricePage", function () {
        return LuckypricePage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/item.service */
      "./src/app/services/item.service.ts");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/env.service */
      "./src/app/services/env.service.ts");
      /* harmony import */


      var src_app_services_lucky_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/lucky.service */
      "./src/app/services/lucky.service.ts");
      /* harmony import */


      var _modals_lucky_lucky_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../modals/lucky/lucky.page */
      "./src/app/modals/lucky/lucky.page.ts");

      var LuckypricePage = /*#__PURE__*/function () {
        function LuckypricePage(modalController, navCtrl, menu, itemService, alertService, router, env, actionSheetController, loadingController, alertController, luckyService) {
          _classCallCheck(this, LuckypricePage);

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
          this.luckyService = luckyService;
          this.menu.enable(true);
        }

        _createClass(LuckypricePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.presentLoading();
            this.luckyService.luckpriceLists().subscribe(function (data) {
              _this.luckyPrices = data['luckyPriceList'];

              _this.presentLoadingDismiss();
            });
          }
        }, {
          key: "newLuckyModal",
          value: function newLuckyModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modals_lucky_lucky_page__WEBPACK_IMPORTED_MODULE_8__["LuckyPage"],
                        cssClass: "luck-Modal"
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (response) {
                        if (response.data.data != '') {
                          _this2.alertService.presentToast(response.data.data);

                          _this2.ngOnInit();
                        }

                        console.log("Modal Closed.");
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoadingDismiss",
          value: function presentLoadingDismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LuckypricePage;
      }();

      LuckypricePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: src_app_services_lucky_service__WEBPACK_IMPORTED_MODULE_7__["LuckyService"]
        }];
      };

      LuckypricePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-luckyprice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./luckyprice.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/luckyprice/luckyprice.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./luckyprice.page.scss */
        "./src/app/luckyprice/luckyprice.page.scss"))["default"]]
      })], LuckypricePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=luckyprice-luckyprice-module-es5.js.map