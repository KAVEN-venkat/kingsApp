(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["result-result-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppResultResultPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\">\n\t\t\t<img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\">\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\t<form [formGroup]=\"resultForm\" class=\"profile-form ion-padding\" method=\"post\" (ngSubmit)=\"viewResult()\">\n\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && resultForm.controls['user_type'].errors?.required }\">\n\t\t\t<ion-select placeholder=\"Select User Type\" interface=\"action-sheet\" class=\"ion-no-padding\" *ngIf=\"userTypes\" formControlName=\"user_type\" (ionChange)=\"getUserByType($event)\">\n\t\t\t\t<ion-select-option class=\"ion-no-padding\" *ngFor=\"let userType of userTypes\" value=\"{{userType.name}}\">{{userType.value}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && resultForm.controls['customer_id'].errors?.required }\">\n\t\t\t<ion-select placeholder=\"Select Customer\" class=\"ion-no-padding\" interface=\"action-sheet\" *ngIf=\"customers\" formControlName=\"customer_id\">\n\t\t\t\t<ion-select-option class=\"ion-no-padding\" *ngFor=\"let customer of customers\" value=\"{{customer.id}}\">{{customer.first_name}} {{customer.last_name}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-row>\n\t\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && resultForm.controls['result_from'].errors?.required }\">\n\t\t\t\t\t<ion-datetime class=\"form-control-lg ion-no-padding\" placeholder=\"From Date\" formControlName=\"result_from\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && resultForm.controls['result_to'].errors?.required }\">\n\t\t\t\t\t<ion-datetime class=\"form-control-lg ion-no-padding\" placeholder=\"To Date\" formControlName=\"result_to\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-radio-group allow-empty-selection formControlName=\"item_time\">\n\t\t\t<ion-row radio-group class=\"item-digits\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && resultForm.controls['item_time'].errors?.required }\">\n\t\t\t\t\t\t<ion-label>All</ion-label>\n\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"All\"></ion-radio>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col *ngFor=\"let item of items\">\n\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && resultForm.controls['item_time'].errors?.required }\">\n\t\t\t\t\t\t<ion-label>{{item.result_time}}</ion-label>\n\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"{{item.result_time}}\">{{item.result_time}}</ion-radio>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-radio-group>\n\t    <ion-button type=\"submit\" shape=\"round\" expand=\"full\" size=\"large\" class=\"shadow order_btn bg-color\">VIEW RESULT</ion-button>\n\t</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/result/result-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/result/result-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ResultPageRoutingModule */

    /***/
    function srcAppResultResultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultPageRoutingModule", function () {
        return ResultPageRoutingModule;
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


      var _result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./result.page */
      "./src/app/result/result.page.ts");

      var routes = [{
        path: '',
        component: _result_page__WEBPACK_IMPORTED_MODULE_3__["ResultPage"]
      }];

      var ResultPageRoutingModule = function ResultPageRoutingModule() {
        _classCallCheck(this, ResultPageRoutingModule);
      };

      ResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResultPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/result/result.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/result/result.module.ts ***!
      \*****************************************/

    /*! exports provided: ResultPageModule */

    /***/
    function srcAppResultResultModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultPageModule", function () {
        return ResultPageModule;
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


      var _result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./result-routing.module */
      "./src/app/result/result-routing.module.ts");
      /* harmony import */


      var _result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./result.page */
      "./src/app/result/result.page.ts");

      var ResultPageModule = function ResultPageModule() {
        _classCallCheck(this, ResultPageModule);
      };

      ResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _result_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultPageRoutingModule"]],
        declarations: [_result_page__WEBPACK_IMPORTED_MODULE_6__["ResultPage"]]
      })], ResultPageModule);
      /***/
    },

    /***/
    "./src/app/result/result.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/result/result.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppResultResultPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n  height: calc(1.5em + .75rem + 2px);\n}\n:host .form-control-lg {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .form-error-dynamic-input {\n  border: 1px solid red !important;\n}\n:host ion-select {\n  max-width: 100%;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .item-select, :host .ion-item-radio {\n  --min-height: calc(1.5em + .75rem + 2px) !important;\n  --max-height: calc(1.5em + .75rem + 2px) !important;\n  height: calc(1.5em + .75rem + 2px) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0RBQUE7QUFBUjtBQUVJO0VBQ0ksZ0NBQUE7RUFDQSxrQ0FBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFHSTtFQUNJLGdDQUFBO0FBRFI7QUFHSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFEUjtBQUdJO0VBQ0UsbURBQUE7RUFDQSxtREFBQTtFQUNBLDZDQUFBO0FBRE47QUFHSTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHQvcmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICB9XG4gICAgLmZvcm0tY29udHJvbC1sZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICB9XG5cbiAgICAuZm9ybS1lcnJvci1keW5hbWljLWlucHV0e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLXNlbGVjdHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgfVxuICAgIC5pdGVtLXNlbGVjdCwgLmlvbi1pdGVtLXJhZGlve1xuICAgICAgLS1taW4taGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KSAhaW1wb3J0YW50O1xuICAgICAgLS1tYXgtaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KSAhaW1wb3J0YW50OyAgXG4gICAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5iZy1jb2xvcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNmQwMGJlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/result/result.page.ts":
    /*!***************************************!*\
      !*** ./src/app/result/result.page.ts ***!
      \***************************************/

    /*! exports provided: ResultPage */

    /***/
    function srcAppResultResultPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultPage", function () {
        return ResultPage;
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


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/customer.service */
      "./src/app/services/customer.service.ts");
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
      /* harmony import */


      var src_app_services_result_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/result.service */
      "./src/app/services/result.service.ts");
      /* harmony import */


      var _resultlist_resultlist_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../resultlist/resultlist.page */
      "./src/app/resultlist/resultlist.page.ts");

      var ResultPage = /*#__PURE__*/function () {
        function ResultPage(modalController, navCtrl, menu, customerService, alertService, router, env, actionSheetController, loadingController, alertController, itemService, formBuilder, resultService) {
          _classCallCheck(this, ResultPage);

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
          this.itemService = itemService;
          this.formBuilder = formBuilder;
          this.resultService = resultService;
          this.submitted = false;
          this.items = [];
          this.currentDate = new Date().toISOString();
          this.userTypes = [{
            name: 'Sub-Dealer',
            value: 'Dealer'
          }, {
            name: 'Customer',
            value: 'Retailer'
          }];
          this.img_url = this.env.IMG_URL;
          this.image = this.img_url + 'images/no_img.png';
        }

        _createClass(ResultPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resultForm = this.formBuilder.group({
              result_from: [this.currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              result_to: [this.currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              customer_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              item_time: ['All', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              user_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }); //this.customersList();

            this.itemsTiming();
          }
        }, {
          key: "getUserByType",
          value: function getUserByType(event) {
            if (event.detail.value != '') {
              this.type = event.detail.value;
              this.customersList();
            }
          }
        }, {
          key: "customersList",
          value: function customersList() {
            var _this = this;

            this.presentLoading();
            this.customerService.customersByType(this.type).subscribe(function (data) {
              if (data['status']) {
                _this.presentLoadingDismiss();

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
          key: "itemsTiming",
          value: function itemsTiming() {
            var _this2 = this;

            //this.presentLoading();
            this.itemService.itemsTime().subscribe(function (data) {
              if (data['status']) {
                _this2.presentLoadingDismiss();

                _this2.items = data['itemsList'];
                console.log(_this2.items);
              } else {
                _this2.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "viewResult",
          value: function viewResult() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.submitted = true;
                      console.log(this.resultForm);

                      if (!this.resultForm.invalid) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      _context.next = 6;
                      return this.modalController.create({
                        component: _resultlist_resultlist_page__WEBPACK_IMPORTED_MODULE_10__["ResultlistPage"],
                        cssClass: 'result_list',
                        componentProps: {
                          'result_from': this.resultForm.value.result_from,
                          'result_to': this.resultForm.value.result_to,
                          'customer_id': this.resultForm.value.customer_id,
                          'item_time': this.resultForm.value.item_time
                        }
                      });

                    case 6:
                      modal = _context.sent;
                      _context.next = 9;
                      return modal.present();

                    case 9:
                      return _context.abrupt("return", _context.sent);

                    case 11:
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

        return ResultPage;
      }();

      ResultPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_result_service__WEBPACK_IMPORTED_MODULE_9__["ResultService"]
        }];
      };

      ResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./result.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./result.page.scss */
        "./src/app/result/result.page.scss"))["default"]]
      })], ResultPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=result-result-module-es5.js.map