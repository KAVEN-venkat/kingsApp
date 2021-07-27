(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t\t\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\" (click)=\"newCustomerModal()\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"person-add-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list *ngIf=\"customers?.length > 0; else NoCustomerTemp\" class=\"ion-no-padding\">\n\t\t<ion-item-sliding>\n\t\t\t<ion-item lines=\"full\" *ngFor='let customer of customers' (click)=\"presentActionSheet(customer.id,customer.first_name)\">\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img src=\"{{img_url}}images/{{customer.photo}}\" *ngIf=\"customer.photo != null\">\n\t\t\t\t\t<img src=\"{{img_url}}images/no_img.png\" *ngIf=\"customer.photo == null\">\n\t\t\t\t</ion-avatar>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h2>{{customer.first_name}} {{customer.last_name}} ({{customer.user_type}})</h2>\n\t\t\t\t\t<p>{{customer.mobile}}</p>\n\t\t\t\t\t<p>{{customer.email}}</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-item-sliding>\n\t</ion-list>\n\t<ng-template #NoCustomerTemp>\n\t\t<h3 class=\"ion-text-center\">No Customers Found</h3>\n\t</ng-template>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/user/user-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/user/user-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: UserPageRoutingModule */

    /***/
    function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
        return UserPageRoutingModule;
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


      var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user.page */
      "./src/app/user/user.page.ts");

      var routes = [{
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
      }];

      var UserPageRoutingModule = function UserPageRoutingModule() {
        _classCallCheck(this, UserPageRoutingModule);
      };

      UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user/user.module.ts":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserPageModule */

    /***/
    function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
        return UserPageModule;
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


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-routing.module */
      "./src/app/user/user-routing.module.ts");
      /* harmony import */


      var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user.page */
      "./src/app/user/user.page.ts");

      var UserPageModule = function UserPageModule() {
        _classCallCheck(this, UserPageModule);
      };

      UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
      })], UserPageModule);
      /***/
    },

    /***/
    "./src/app/user/user.page.scss":
    /*!*************************************!*\
      !*** ./src/app/user/user.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .logoutbtn {\n  font-size: 24px;\n}\n:host ion-avatar {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFZLGVBQUE7QUFDaEI7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5sb2dvdXRidG57IGZvbnQtc2l6ZTogMjRweDsgfVxuICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/user/user.page.ts":
    /*!***********************************!*\
      !*** ./src/app/user/user.page.ts ***!
      \***********************************/

    /*! exports provided: UserPage */

    /***/
    function srcAppUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPage", function () {
        return UserPage;
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
      /* harmony import */


      var _modals_customer_customer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../modals/customer/customer.page */
      "./src/app/modals/customer/customer.page.ts");

      var UserPage = /*#__PURE__*/function () {
        function UserPage(modalController, navCtrl, menu, customerService, alertService, router, env, actionSheetController, loadingController, alertController) {
          _classCallCheck(this, UserPage);

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
          this.menu.enable(true);
          this.img_url = this.env.IMG_URL;
          this.customersList();
        }

        _createClass(UserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!localStorage.getItem('user_id')) {
              this.navCtrl.navigateRoot('/');
            }

            this.presentLoading();
          }
        }, {
          key: "customersList",
          value: function customersList() {
            var _this = this;

            this.customerService.customers().subscribe(function (data) {
              //console.log(data);
              //let result = JSON.stringify(data);
              _this.presentLoadingDismiss();

              if (data['status']) {
                _this.customers = data['customersList'];
                console.log(_this.customers);
              } else {
                _this.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "newCustomerModal",
          value: function newCustomerModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modals_customer_customer_page__WEBPACK_IMPORTED_MODULE_7__["CustomerPage"],
                        cssClass: 'my-custom-modal-css'
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function () {
                        _this2.customersList();
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
          key: "deleteCustomer",
          value: function deleteCustomer(user_id, user_name) {
            var _this3 = this;

            this.customerService.deleteCustomer(user_id).subscribe(function (data) {
              if (data['status']) {
                _this3.alertService.presentToast(data['message']);

                _this3.customersList();
              } else {
                _this3.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteCustomerConfirm",
          value: function deleteCustomerConfirm(user_id, user_name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirmation!',
                        message: 'Are you sure want to delete <strong>' + user_name + '</strong>?',
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
                            _this4.deleteCustomer(user_id, user_name);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(user_id, user_name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        header: user_name + ' Action',
                        buttons: [{
                          text: 'Item Price',
                          icon: 'cash-outline',
                          handler: function handler() {
                            _this5.navCtrl.navigateRoot('/customerprice/' + user_id + '/' + user_name);

                            console.log('Delete clicked');
                          }
                        }, {
                          text: 'Edit',
                          icon: 'create-outline',
                          handler: function handler() {
                            console.log('Edit clicked');

                            _this5.navCtrl.navigateRoot('/profile/' + user_id);
                          }
                        }, {
                          text: 'Delete',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            _this5.deleteCustomerConfirm(user_id, user_name);

                            console.log('Delete clicked');
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentLoadingDismiss",
          value: function presentLoadingDismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return UserPage;
      }();

      UserPage.ctorParameters = function () {
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
        }];
      };

      UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user.page.scss */
        "./src/app/user/user.page.scss"))["default"]]
      })], UserPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map