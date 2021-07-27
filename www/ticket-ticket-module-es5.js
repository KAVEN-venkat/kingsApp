(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-ticket-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTicketTicketPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\" (click)=\"newItemModal('item','my-item-modal-css','createItem')\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"add-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-start ion-padding-end\">\n\t<h6 class=\"subtitle\">Item Lists - {{items.length}}</h6>\n\t<ion-grid *ngIf=\"items\">\n\t\t<ion-row class=\"ticketLists\" *ngFor=\"let item of items\" (click)=\"presentActionSheet(item.id,item.item_name)\">\n\t\t\t<ion-col size=\"12\" class=\"item_name\">\n\t\t\t<h3 class=\"ion-text-center\">Item: {{item.item_name}} - {{item.category.category_name}}</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t            <p class=\"ion-no-margin\">Price</p>\n\t            <p class=\"ion-no-margin\">Digits</p>\t\t\t\n\t\t        <p class=\"ion-no-margin\">Time</p>\n\t\t        <p class=\"ion-no-margin\">Code</p>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t            <p class=\"ion-no-margin\"> : {{item.item_price}}</p>\n\t            <p class=\"ion-no-margin\"> : {{item.item_digits}}</p>\t\t\t\n\t\t        <p class=\"ion-no-margin\"> : {{item.result_time}}</p>\n\t\t        <p class=\"ion-no-margin\"> : {{item.result_code}}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/ticket/ticket-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/ticket/ticket-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: TicketPageRoutingModule */

    /***/
    function srcAppTicketTicketRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketPageRoutingModule", function () {
        return TicketPageRoutingModule;
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


      var _ticket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ticket.page */
      "./src/app/ticket/ticket.page.ts");

      var routes = [{
        path: '',
        component: _ticket_page__WEBPACK_IMPORTED_MODULE_3__["TicketPage"]
      }];

      var TicketPageRoutingModule = function TicketPageRoutingModule() {
        _classCallCheck(this, TicketPageRoutingModule);
      };

      TicketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TicketPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/ticket/ticket.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/ticket/ticket.module.ts ***!
      \*****************************************/

    /*! exports provided: TicketPageModule */

    /***/
    function srcAppTicketTicketModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketPageModule", function () {
        return TicketPageModule;
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


      var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ticket-routing.module */
      "./src/app/ticket/ticket-routing.module.ts");
      /* harmony import */


      var _ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ticket.page */
      "./src/app/ticket/ticket.page.ts");

      var TicketPageModule = function TicketPageModule() {
        _classCallCheck(this, TicketPageModule);
      };

      TicketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketPageRoutingModule"]],
        declarations: [_ticket_page__WEBPACK_IMPORTED_MODULE_6__["TicketPage"]]
      })], TicketPageModule);
      /***/
    },

    /***/
    "./src/app/ticket/ticket.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/ticket/ticket.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppTicketTicketPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  /* .ticketLists p{\n      margin-top: 10px;\n      margin-bottom: 10px;\n  }*/\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n:host .ticketLists {\n  border-radius: 10px;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n  margin-bottom: 1rem !important;\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .ticketLists .hydrated {\n  margin: 5px 15px;\n}\n:host .border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n:host .ticketLists {\n  background: #a700ff;\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, #a700ff), color-stop(100%, #00189a));\n  background: linear-gradient(135deg, #a700ff 0%, #00189a 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#d800ff\", endColorstr=\"#00189a\", GradientType=1);\n  color: #ffffff;\n  margin-bottom: 0.5rem !important;\n}\n:host .ticketLists .item_name {\n  vertical-align: middle;\n  margin-top: 10px !important;\n}\n:host .subtitle {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  text-align: center;\n}\n:host .item_name, :host .item_name h3 {\n  margin: 0px !important;\n}\n:host .subtitle {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n:host .subtitle, :host .item_name h3 {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0L3RpY2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUE2Q0k7OztJQUFBO0FBeENKO0FBSkk7RUFBWSxlQUFBO0FBT2hCO0FBTkk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtFQUNBLGlFQUFBO0VBQ0EsOERBQUE7RUFDQSw2REFBQTtBQVFSO0FBTkk7RUFDSSxnQkFBQTtBQVFSO0FBTEk7RUFDSSx5Q0FBQTtBQU9SO0FBTEk7RUFDSSxtQkFBQTtFQUVBLHdHQUFBO0VBSUEsNkRBQUE7RUFDQSxrSEFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQU9SO0FBTEk7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0FBT1I7QUFMSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBT1I7QUFESTtFQUNJLHNCQUFBO0FBR1I7QUFESTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUdSO0FBREk7RUFDSSwwQkFBQTtBQUdSIiwiZmlsZSI6InNyYy9hcHAvdGlja2V0L3RpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmxvZ291dGJ0bnsgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgLnRpY2tldExpc3Rze1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW0haW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAgICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC50aWNrZXRMaXN0cyAuaHlkcmF0ZWR7XG4gICAgICAgIG1hcmdpbjogNXB4IDE1cHg7XG4gICAgfVxuXG4gICAgLmJvcmRlci1sZWZ0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRpY2tldExpc3Rze1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYTcwMGZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2E3MDBmZiksIGNvbG9yLXN0b3AoMTAwJSwgIzAwMTg5YSkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNhNzAwZmYgMCUsICMwMDE4OWEgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZDgwMGZmJywgZW5kQ29sb3JzdHI9JyMwMDE4OWEnLCBHcmFkaWVudFR5cGU9MSk7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRpY2tldExpc3RzIC5pdGVtX25hbWV7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC8qIC50aWNrZXRMaXN0cyBwe1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH0qL1xuICAgIC5pdGVtX25hbWUsIC5pdGVtX25hbWUgaDN7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5zdWJ0aXRsZSwgLml0ZW1fbmFtZSBoM3tcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/ticket/ticket.page.ts":
    /*!***************************************!*\
      !*** ./src/app/ticket/ticket.page.ts ***!
      \***************************************/

    /*! exports provided: TicketPage */

    /***/
    function srcAppTicketTicketPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketPage", function () {
        return TicketPage;
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


      var _modals_item_item_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modals/item/item.page */
      "./src/app/modals/item/item.page.ts");
      /* harmony import */


      var _modals_itemprice_itemprice_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modals/itemprice/itemprice.page */
      "./src/app/modals/itemprice/itemprice.page.ts");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/item.service */
      "./src/app/services/item.service.ts");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/env.service */
      "./src/app/services/env.service.ts");

      var TicketPage = /*#__PURE__*/function () {
        function TicketPage(modalController, navCtrl, menu, itemService, alertService, router, env, actionSheetController, loadingController, alertController) {
          _classCallCheck(this, TicketPage);

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
          this.items = [];
          this.menu.enable(true);
        }

        _createClass(TicketPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.itemsList();
          }
        }, {
          key: "itemsList",
          value: function itemsList() {
            var _this = this;

            this.presentLoading();
            this.itemService.items().subscribe(function (data) {
              if (data['status']) {
                _this.presentLoadingDismiss();

                _this.items = data['itemsList']; //console.log(this.items[0].category.category_name);
              } else {
                _this.presentLoadingDismiss();

                _this.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "newItemModal",
          value: function newItemModal(openPage, css_class, routeAction) {
            var item_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var opencomponent, componentData, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (openPage == "itemprice" && item_id != 0) {
                        opencomponent = _modals_itemprice_itemprice_page__WEBPACK_IMPORTED_MODULE_5__["ItempricePage"];
                        componentData = {
                          'title': 'New Item',
                          'itemId': item_id
                        };
                      } else {
                        opencomponent = _modals_item_item_page__WEBPACK_IMPORTED_MODULE_4__["ItemPage"];

                        if (routeAction == 'createItem' && item_id == 0) {
                          componentData = {
                            'title': 'New Item'
                          };
                        } else {
                          componentData = {
                            'title': 'Update Item',
                            'itemId': item_id
                          };
                        }
                      }

                      _context.next = 3;
                      return this.modalController.create({
                        component: opencomponent,
                        cssClass: css_class,
                        componentProps: componentData
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function () {
                        _this2.itemsList();
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setPrice",
          value: function setPrice(item_id, item_name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.newItemModal("itemprice", "my-itemprice-modal-css", "setPrice", item_id);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentLoadingDismiss",
          value: function presentLoadingDismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(item_id, item_name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.actionSheetController.create({
                        header: ' Action',
                        buttons: [{
                          text: 'Edit',
                          icon: 'create-outline',
                          handler: function handler() {
                            _this3.newItemModal('item', 'my-item-modal-css', 'updateItem', item_id);

                            console.log('Edit clicked');
                          }
                        }, {
                          text: 'Set Price',
                          icon: 'cash-outline',
                          handler: function handler() {
                            console.log('Set Price');

                            _this3.setPrice(item_id, item_name);
                          }
                        }, {
                          text: 'Delete',
                          icon: 'trash',
                          handler: function handler() {
                            console.log('Delete clicked');

                            _this3.deleteItemConfirm(item_id, item_name);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context5.sent;
                      _context5.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(item_id, item_name) {
            var _this4 = this;

            this.itemService.deleteItem(item_id).subscribe(function (data) {
              if (data['status']) {
                _this4.alertService.presentToast(data['message']);

                _this4.itemsList();
              } else {
                _this4.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteItemConfirm",
          value: function deleteItemConfirm(item_id, item_name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirmation!',
                        message: 'Are you sure want to delete <strong>' + item_name + '</strong>?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this5.deleteItem(item_id, item_name);
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return TicketPage;
      }();

      TicketPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      TicketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ticket.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./ticket.page.scss */
        "./src/app/ticket/ticket.page.scss"))["default"]]
      })], TicketPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ticket-ticket-module-es5.js.map