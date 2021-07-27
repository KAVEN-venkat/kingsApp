(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerprice-customerprice-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprice/customerprice.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprice/customerprice.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerpriceCustomerpricePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-start ion-padding-end\">\n\t<h6 class=\"subtitle\">{{user_name}} - Item Pirce Lists</h6>\n\t<ion-grid *ngIf=\"priceDetails\">\n\t\t<ion-row class=\"ticketLists\" *ngFor=\"let priceDetail of priceDetails\">\n\t\t\t<ion-col size=\"12\" class=\"item_name\">\n\t\t\t<h3 class=\"ion-text-center\">Name: {{priceDetail.item.item_name}}</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t            <p class=\"item_name\">Price: {{priceDetail.item.item_price * 1 + priceDetail.extra_price * 1}}</p>\n\t            <p>Digits: 1</p>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"border-left\">\n\t\t        <p class=\"ion-padding-start item_name\">Time: {{priceDetail.item.result_time}}</p>\n\t\t        <p class=\"ion-padding-start\">Code: {{priceDetail.item.result_code}}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customerprice/customerprice-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/customerprice/customerprice-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CustomerpricePageRoutingModule */

    /***/
    function srcAppCustomerpriceCustomerpriceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerpricePageRoutingModule", function () {
        return CustomerpricePageRoutingModule;
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


      var _customerprice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customerprice.page */
      "./src/app/customerprice/customerprice.page.ts");

      var routes = [{
        path: '',
        component: _customerprice_page__WEBPACK_IMPORTED_MODULE_3__["CustomerpricePage"]
      }];

      var CustomerpricePageRoutingModule = function CustomerpricePageRoutingModule() {
        _classCallCheck(this, CustomerpricePageRoutingModule);
      };

      CustomerpricePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerpricePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerprice/customerprice.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/customerprice/customerprice.module.ts ***!
      \*******************************************************/

    /*! exports provided: CustomerpricePageModule */

    /***/
    function srcAppCustomerpriceCustomerpriceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerpricePageModule", function () {
        return CustomerpricePageModule;
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


      var _customerprice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customerprice-routing.module */
      "./src/app/customerprice/customerprice-routing.module.ts");
      /* harmony import */


      var _customerprice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customerprice.page */
      "./src/app/customerprice/customerprice.page.ts");

      var CustomerpricePageModule = function CustomerpricePageModule() {
        _classCallCheck(this, CustomerpricePageModule);
      };

      CustomerpricePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customerprice_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerpricePageRoutingModule"]],
        declarations: [_customerprice_page__WEBPACK_IMPORTED_MODULE_6__["CustomerpricePage"]]
      })], CustomerpricePageModule);
      /***/
    },

    /***/
    "./src/app/customerprice/customerprice.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/customerprice/customerprice.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerpriceCustomerpricePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .logoutbtn {\n  font-size: 24px;\n}\n:host .ticketLists {\n  border-radius: 10px;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n  margin-bottom: 1rem !important;\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .ticketLists .hydrated {\n  margin: 5px 15px;\n}\n:host .border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n:host .ticketLists {\n  background: #a700ff;\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, #a700ff), color-stop(100%, #00189a));\n  background: linear-gradient(135deg, #a700ff 0%, #00189a 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#d800ff\", endColorstr=\"#00189a\", GradientType=1);\n  color: #ffffff;\n}\n:host .ticketLists .item_name {\n  vertical-align: middle;\n  margin-top: 10px !important;\n}\n:host .subtitle {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  text-align: center;\n}\n:host .ticketLists p {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n:host .item_name, :host .item_name h3 {\n  margin: 0px !important;\n}\n:host .item_name h3 {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcmljZS9jdXN0b21lcnByaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFZLGVBQUE7QUFDaEI7QUFBSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSw4REFBQTtFQUNBLDZEQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0FBRVI7QUFDSTtFQUNJLHlDQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0VBRUEsd0dBQUE7RUFJQSw2REFBQTtFQUNBLGtIQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQ0k7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0FBQ1I7QUFDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNJO0VBQ0ksc0JBQUE7QUFDUjtBQUNJO0VBQ0ksMEJBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJpY2UvY3VzdG9tZXJwcmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmxvZ291dGJ0bnsgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgLnRpY2tldExpc3Rze1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW0haW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAgICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC50aWNrZXRMaXN0cyAuaHlkcmF0ZWR7XG4gICAgICAgIG1hcmdpbjogNXB4IDE1cHg7XG4gICAgfVxuXG4gICAgLmJvcmRlci1sZWZ0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRpY2tldExpc3Rze1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYTcwMGZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2E3MDBmZiksIGNvbG9yLXN0b3AoMTAwJSwgIzAwMTg5YSkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZDgwMGZmJywgZW5kQ29sb3JzdHI9JyMwMDE4OWEnLCBHcmFkaWVudFR5cGU9MSk7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAudGlja2V0TGlzdHMgLml0ZW1fbmFtZXtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnRpY2tldExpc3RzIHB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5pdGVtX25hbWUsIC5pdGVtX25hbWUgaDN7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pdGVtX25hbWUgaDN7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/customerprice/customerprice.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/customerprice/customerprice.page.ts ***!
      \*****************************************************/

    /*! exports provided: CustomerpricePage */

    /***/
    function srcAppCustomerpriceCustomerpricePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerpricePage", function () {
        return CustomerpricePage;
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


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/customer.service */
      "./src/app/services/customer.service.ts");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/env.service */
      "./src/app/services/env.service.ts");

      var CustomerpricePage = /*#__PURE__*/function () {
        function CustomerpricePage(modalController, navCtrl, menu, customerService, alertService, router, env, actionSheetController, loadingController, alertController, activatedRoute) {
          _classCallCheck(this, CustomerpricePage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.customerService = customerService;
          this.alertService = alertService;
          this.router = router;
          this.env = env;
          this.actionSheetController = actionSheetController;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.menu.enable(true);
          this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
          this.user_name = this.activatedRoute.snapshot.paramMap.get('name');
          this.priceLists();
        }

        _createClass(CustomerpricePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "priceLists",
          value: function priceLists() {
            var _this = this;

            //this.presentLoading();
            this.customerService.customerPrice(this.user_id).subscribe(function (data) {
              if (data['status']) {
                _this.priceDetails = data['customerPriceDetails'];
                console.log(_this.priceDetails);
              } else {
                _this.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return CustomerpricePage;
      }();

      CustomerpricePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      CustomerpricePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerprice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customerprice.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprice/customerprice.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customerprice.page.scss */
        "./src/app/customerprice/customerprice.page.scss"))["default"]]
      })], CustomerpricePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customerprice-customerprice-module-es5.js.map