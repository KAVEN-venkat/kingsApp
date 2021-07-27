(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sale-sale-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sale/sale.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sale/sale.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSaleSalePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\" (click)=\"viewSale()\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"eye-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<form [formGroup]=\"saleForm\" class=\"profile-form ion-padding\" method=\"post\" (ngSubmit)=\"newSale()\">\n\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['sale_date'].errors?.required }\">\n\t\t\t<ion-datetime class=\"form-control-lg ion-no-padding\" placeholder=\"Select Date\" formControlName=\"sale_date\"></ion-datetime>\n\t\t</ion-item>\n\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['customer_id'].errors?.required }\">\n\t\t\t<ion-select placeholder=\"Select Customer\" interface=\"action-sheet\" class=\"ion-no-padding\" *ngIf=\"customers\" formControlName=\"customer_id\">\n\t\t\t\t<ion-select-option class=\"ion-no-padding\" *ngFor=\"let customer of customers\" value=\"{{customer.id}}\">{{customer.first_name}} {{customer.last_name}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['category_id'].errors?.required }\">\n\t\t\t\t\t<ion-select placeholder=\"Select Category\" interface=\"action-sheet\" class=\"ion-no-padding\" *ngIf=\"categories\" formControlName=\"category_id\" (ionChange)=\"getItemByCategory($event)\">\n\t\t\t\t\t\t<ion-select-option class=\"ion-no-padding\" *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.category_name}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_id'].errors?.required }\">\n\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Select Item\" class=\"ion-no-padding\" formControlName=\"item_id\" (ionChange)=\"getItemId($event)\">\n\t\t\t\t\t\t<ion-select-option class=\"ion-no-padding\" *ngFor=\"let item of items\" value=\"{{item.id}}\">{{item.item_name}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<div *ngIf=\"max_length < 3\">\n\t\t\t<ion-radio-group allow-empty-selection formControlName=\"item_boards\">\n\t\t\t\t<ion-row radio-group class=\"item-boards\">\n\t\t\t\t\t<!--<ion-col>\n\t\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_boards'].errors?.required }\">\n\t\t\t\t\t\t\t<ion-label>Single</ion-label>\n\t\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"single\"></ion-radio>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>-->\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_boards'].errors?.required }\">\n\t\t\t\t\t\t\t<ion-label>All Board</ion-label>\n\t\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"allboard\"></ion-radio>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-radio-group>\n\t\t</div>\n\t    <ion-radio-group allow-empty-selection formControlName=\"item_digits\">\n\t\t\t<ion-row radio-group class=\"item-digits\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_digits'].errors?.required }\">\n\t\t\t\t\t\t<ion-label>T</ion-label>\n\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"T\"></ion-radio>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_digits'].errors?.required }\">\n\t\t\t\t\t\t<ion-label>D</ion-label>\n\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"D\"></ion-radio>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_digits'].errors?.required }\">\n\t\t\t\t\t\t<ion-label>S</ion-label>\n\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"S\"></ion-radio>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"form-control form-group ion-item-radio\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_digits'].errors?.required }\">\n\t\t\t\t\t\t<ion-label>C</ion-label>\n\t\t\t\t\t\t<ion-radio color=\"primary\" value=\"C\" ></ion-radio>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-radio-group>\n\t\t<ion-row>\n\t    \t<ion-col>\n\t\t\t    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_from'].errors?.required }\">\n\t\t\t\t  <ion-input #fromFocus class=\"form-control-lg ion-no-padding\" type=\"tel\" pattern=\"[0-9]*\" formControlName=\"item_from\" placeholder=\"From\" minlength=\"{{min_length}}\" maxlength=\"{{max_length}}\" (ionChange)=\"getItemFrom($event)\"></ion-input>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    \t<ion-col>\n\t\t\t    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_to'].errors?.required }\">\n\t\t\t      <ion-input #toFocus (ionFocus)=\"removeText()\" class=\"form-control-lg ion-no-padding\" type=\"tel\" pattern=\"[0-9]*\" formControlName=\"item_to\" placeholder=\"To\" minlength=\"{{min_length}}\" maxlength=\"{{max_length}}\" (ionChange)=\"getItemTo($event)\"></ion-input>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t\t\t<ion-col>\n\t\t\t    <ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && saleForm.controls['item_qty'].errors?.required }\">\n\t\t\t      <ion-input #qtyFocus class=\"form-control-lg ion-no-padding\" type=\"number\" pattern=\"[0-9]*\" formControlName=\"item_qty\" placeholder=\"Quantity\"></ion-input>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    </ion-row>\n\t\t<ion-button type=\"submit\" shape=\"round\" expand=\"full\" size=\"large\" class=\"shadow register_btn bg-color\">ADD</ion-button>\n\t\t<br/>\n\t\t<ion-grid class=\"printTable\">\n\t\t\t<ion-row class=\"header\">\n\t\t\t\t<ion-col>Item</ion-col>\n\t\t\t\t<ion-col>Number</ion-col>\n\t\t\t\t<ion-col>Qty</ion-col>\n\t\t\t\t<ion-col>Total</ion-col>\n\t\t\t\t<ion-col>Action</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row *ngFor=\"let order of orders;let i\">\n\t\t\t\t<ion-col>{{order.item.item_name}}</ion-col>\n\t\t\t\t<ion-col>{{order.item_number}}</ion-col>\n\t\t\t\t<ion-col>{{order.item_qty}}</ion-col>\n\t\t\t\t<ion-col>{{order.total_price}}</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-icon name=\"trash-outline\" (click)=\"removeOrder(i,order.id,order.item_number)\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t    <ion-button shape=\"round\" expand=\"full\" size=\"large\" (click)=\"checkBluetooth()\" class=\"shadow order_btn bg-color\">PRINT</ion-button>\n\t</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sale/sale-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/sale/sale-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: SalePageRoutingModule */

    /***/
    function srcAppSaleSaleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalePageRoutingModule", function () {
        return SalePageRoutingModule;
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


      var _sale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sale.page */
      "./src/app/sale/sale.page.ts");

      var routes = [{
        path: '',
        component: _sale_page__WEBPACK_IMPORTED_MODULE_3__["SalePage"]
      }];

      var SalePageRoutingModule = function SalePageRoutingModule() {
        _classCallCheck(this, SalePageRoutingModule);
      };

      SalePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SalePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sale/sale.module.ts":
    /*!*************************************!*\
      !*** ./src/app/sale/sale.module.ts ***!
      \*************************************/

    /*! exports provided: SalePageModule */

    /***/
    function srcAppSaleSaleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalePageModule", function () {
        return SalePageModule;
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


      var _sale_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sale-routing.module */
      "./src/app/sale/sale-routing.module.ts");
      /* harmony import */


      var _sale_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sale.page */
      "./src/app/sale/sale.page.ts");

      var SalePageModule = function SalePageModule() {
        _classCallCheck(this, SalePageModule);
      };

      SalePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sale_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalePageRoutingModule"]],
        declarations: [_sale_page__WEBPACK_IMPORTED_MODULE_6__["SalePage"]]
      })], SalePageModule);
      /***/
    },

    /***/
    "./src/app/sale/sale.page.scss":
    /*!*************************************!*\
      !*** ./src/app/sale/sale.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppSaleSalePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n  height: calc(1.5em + .75rem + 2px);\n}\n:host .form-control-lg {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .form-error-dynamic-input {\n  border: 1px solid red !important;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n  height: 2.5rem;\n  font-size: larger;\n}\n:host .order_btn {\n  --background: none !important;\n  color: #6d00be !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n:host .thumbnail_img {\n  width: 158px;\n  height: 158px;\n  height: 178px;\n  width: 178px;\n  border-radius: 90px;\n  border: 10px solid #6d00be;\n  margin: 0 auto;\n}\n:host .thumbnail_img img {\n  border-radius: 90px;\n  position: relative;\n}\n:host .subtitle {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n:host .profile-form ion-label {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 0px 15px;\n}\n:host ion-select {\n  max-width: 100%;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n:host .item-digits ion-col ion-item ion-label {\n  margin: 0px !important;\n}\n:host .item-boards ion-col ion-item ion-label {\n  margin: 0px !important;\n}\n:host .item-select, :host .ion-item-radio {\n  --min-height: calc(1.5em + .75rem + 2px) !important;\n  --max-height: calc(1.5em + .75rem + 2px) !important;\n  height: calc(1.5em + .75rem + 2px) !important;\n}\n:host .inner_padding_top {\n  --inner-padding-top: 0px !important;\n}\n:host .ion-color-primary {\n  --ion-color-base: #725bbe !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: #725bbe !important;\n  --ion-color-tint: #725bbe !important;\n}\n:host .printTable .header ion-col {\n  background-color: lightgrey;\n  font-weight: bold;\n}\n:host .printTable ion-col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n:host .printTable ion-col:last-child {\n  border-right: solid 1px grey;\n}\n:host .printTable ion-row:last-child ion-col {\n  border-bottom: solid 1px grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZS9zYWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQUFGO0FBRUE7RUFDSSxnQ0FBQTtFQUNBLGtDQUFBO0FBQUo7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdBO0VBQ0UsZ0NBQUE7QUFERjtBQUlBO0VBQ0kseURBQUE7RUFDQSxpRUFBQTtFQUNBLDhEQUFBO0VBQ0EsNkRBQUE7QUFGSjtBQUlBO0VBQ0ksZ0NBQUE7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGTjtBQUlFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtBQUZKO0FBSUE7RUFDRSxlQUFBO0FBRkY7QUFJQTtFQUNFLHNCQUFBO0FBRkY7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUZGO0FBSUE7RUFBb0IsbUJBQUE7RUFBcUIsa0JBQUE7QUFBekM7QUFDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDQTtFQUFZLGVBQUE7QUFFWjtBQURBO0VBQ0Esc0JBQUE7QUFHQTtBQURBO0VBQ0Esc0JBQUE7QUFHQTtBQURBO0VBQ0UsbURBQUE7RUFDQSxtREFBQTtFQUNBLDZDQUFBO0FBR0Y7QUFEQTtFQUNFLG1DQUFBO0FBR0Y7QUFEQTtFQUNJLG9DQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtBQUdKO0FBREE7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0FBR0o7QUFBQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQ0E7RUFDSSw0QkFBQTtBQUNKO0FBRUE7RUFDSSw2QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvc2FsZS9zYWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG59XG4uZm9ybS1jb250cm9sLWxnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5mb3JtLWVycm9yLWR5bmFtaWMtaW5wdXR7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4uc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNmQwMGJlICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gIH1cbiAgLm9yZGVyX2J0bntcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzZkMDBiZSAhaW1wb3J0YW50O1xuICB9XG4uZm50LXNpemV7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi50aHVtYm5haWxfaW1ne1xuICB3aWR0aDoxNThweDtcbiAgaGVpZ2h0OjE1OHB4O1xuICBoZWlnaHQ6IDE3OHB4O1xuICB3aWR0aDogMTc4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNmQwMGJlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aHVtYm5haWxfaW1nIGltZ3sgYm9yZGVyLXJhZGl1czogOTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9maWxlLWZvcm0gaW9uLWxhYmVse1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuaW9uLXNlbGVjdHtcbiAgbWF4LXdpZHRoOiAxMDAlOyBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1Nztcbn1cbi5sb2dvdXRidG57IGZvbnQtc2l6ZTogMjRweDsgfVxuLml0ZW0tZGlnaXRzIGlvbi1jb2wgaW9uLWl0ZW0gaW9uLWxhYmVse1xubWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5pdGVtLWJvYXJkcyBpb24tY29sIGlvbi1pdGVtIGlvbi1sYWJlbHtcbm1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1zZWxlY3QsIC5pb24taXRlbS1yYWRpb3tcbiAgLS1taW4taGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KSAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpICFpbXBvcnRhbnQ7ICBcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KSAhaW1wb3J0YW50O1xufVxuLmlubmVyX3BhZGRpbmdfdG9we1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzcyNWJiZSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6ICM3MjViYmUgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiAjNzI1YmJlICFpbXBvcnRhbnQ7XG59XG4ucHJpbnRUYWJsZSAuaGVhZGVyIGlvbi1jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpbnRUYWJsZSBpb24tY29sIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuXG4ucHJpbnRUYWJsZSBpb24tY29sOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbi5wcmludFRhYmxlIGlvbi1yb3c6bGFzdC1jaGlsZCBpb24tY29sIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/sale/sale.page.ts":
    /*!***********************************!*\
      !*** ./src/app/sale/sale.page.ts ***!
      \***********************************/

    /*! exports provided: SalePage */

    /***/
    function srcAppSaleSalePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalePage", function () {
        return SalePage;
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


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/category.service */
      "./src/app/services/category.service.ts");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/item.service */
      "./src/app/services/item.service.ts");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/env.service */
      "./src/app/services/env.service.ts");
      /* harmony import */


      var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/order.service */
      "./src/app/services/order.service.ts");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/customer.service */
      "./src/app/services/customer.service.ts");

      var SalePage = /*#__PURE__*/function () {
        function SalePage(modalController, navCtrl, menu, categoryService, orderService, alertService, router, env, actionSheetController, loadingController, alertController, itemService, formBuilder, bluetoothSerial, toastCtrl, customerService) {
          _classCallCheck(this, SalePage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.categoryService = categoryService;
          this.orderService = orderService;
          this.alertService = alertService;
          this.router = router;
          this.env = env;
          this.actionSheetController = actionSheetController;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.itemService = itemService;
          this.formBuilder = formBuilder;
          this.bluetoothSerial = bluetoothSerial;
          this.toastCtrl = toastCtrl;
          this.customerService = customerService;
          this.submitted = false;
          this.items = [];
          this.currentDate = new Date().toISOString();
          this.orders = [];
          this.menu.enable(true);
        }

        _createClass(SalePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!localStorage.getItem('user_id')) {
              this.navCtrl.navigateRoot('/');
            }

            this.createBillNo();
            this.categoriesList(); //this.itemsList();

            this.saleFormValidation();
            this.customersList();
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
          key: "createBillNo",
          value: function createBillNo() {
            var _this2 = this;

            var limit = 'all';
            this.orderService.orderLists(limit).subscribe(function (data) {
              console.log(data); //let result = JSON.stringify(data);

              _this2.presentLoadingDismiss();

              if (data['status']) {
                if (data['ordersList'].length > 0 && data['ordersList'][data['ordersList'].length - 1]['bill_no'] != null) {
                  //alert(parseInt(data['ordersList'][data['ordersList'].length-1]['bill_no']));
                  _this2.billNo = parseInt(data['ordersList'][data['ordersList'].length - 1]['bill_no']) + 1;
                  _this2.count = String(_this2.billNo).length;
                  _this2.billdigits = "";

                  for (_this2.count; _this2.count < 6; _this2.count++) {
                    _this2.billdigits = _this2.billdigits + "0";
                  }

                  _this2.billNo = _this2.billdigits + String(_this2.billNo); //alert(this.billNo);
                } else {
                  _this2.billNo = "000001"; //alert(this.billNo);
                }
              } else {
                _this2.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "focusOnQty",
          value: function focusOnQty() {
            var _this3 = this;

            setTimeout(function () {
              _this3.inputElementQty.setFocus();
            }, 200);
          }
        }, {
          key: "focusOnFrom",
          value: function focusOnFrom() {
            var _this4 = this;

            setTimeout(function () {
              _this4.inputElementFrom.setFocus();
            }, 200);
          }
        }, {
          key: "removeText",
          value: function removeText() {
            this.saleForm.controls['item_to'].setValue('');
          }
        }, {
          key: "saleFormValidation",
          value: function saleFormValidation() {
            this.saleForm = this.formBuilder.group({
              sale_date: [this.currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              customer_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              item_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              item_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              item_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              item_digits: ['C', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              item_boards: [''],
              item_qty: [this.item_qty, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }, {
          key: "categoriesList",
          value: function categoriesList() {
            var _this5 = this;

            this.categoryService.categories().subscribe(function (data) {
              if (data['status']) {
                _this5.categories = data['categoriesList'];
                console.log(_this5.categories);
              } else {
                _this5.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
          /*itemsList(){
              //this.presentLoading();
              this.itemService.items().subscribe(data => {
                  if(data['status']){
                      //this.presentLoadingDismiss();
                      this.items = data['itemsList'];
                      console.log(this.items);
                  }else{
                      this.alertService.presentToast(data['message']);
                  }
              },error => {
                  console.log(error);
              });
          }*/

        }, {
          key: "getItemByCategory",
          value: function getItemByCategory(event) {
            var _this6 = this;

            //;
            if (event.detail.value != '') {
              this.itemService.itemByCategory(event.detail.value).subscribe(function (data) {
                console.log(data); //this.presentLoadingDismiss();

                if (data['status']) {
                  _this6.items = data['itemDetails'];
                } else {
                  _this6.alertService.presentToast(data['message']);
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "getItemId",
          value: function getItemId(event) {
            var _this7 = this;

            this.item_id = event.detail.value;

            if (this.item_id != '') {
              //this.presentLoading();	
              this.itemService.item(event.detail.value).subscribe(function (data) {
                console.log(data); //this.presentLoadingDismiss();

                if (data['status']) {
                  _this7.itemName = data['itemDetails'].item_name;
                  _this7.itemPrice = data['itemDetails'].item_price;
                  _this7.min_length = data['itemDetails'].item_digits;
                  _this7.max_length = data['itemDetails'].item_digits;
                  console.log(parseFloat(_this7.itemPrice) + parseFloat(_this7.extraPrice));

                  _this7.saleForm.controls['item_from'].setValue('');

                  _this7.saleForm.controls['item_to'].setValue(''); // if (this.max_length < 3) {
                  // 	this.saleForm.controls['item_boards'].setValue('single');
                  // }
                  //this.saleForm.controls['item_qty'].setValue('');

                } else {
                  _this7.alertService.presentToast(data['message']);
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "getItemFrom",
          value: function getItemFrom(event) {
            if (event.detail.value != '') {
              this.saleForm.controls['item_to'].setValue(event.detail.value);
            }

            if (this.max_length == event.detail.value.length) {
              //alert(event.detail.value.length);
              this.focusOnQty();
            }
          }
        }, {
          key: "getItemTo",
          value: function getItemTo(event) {
            if (this.max_length == event.detail.value.length) {
              this.saleForm.controls['item_qty'].setValue('');
              this.focusOnQty();
            }
          }
        }, {
          key: "newSale",
          value: function newSale() {
            var _this8 = this;

            this.submitted = true;

            if (this.saleForm.invalid) {
              return;
            }

            console.log(this.saleForm.value.item_boards);
            this.orderService.createOrder(this.saleForm.value.customer_id, this.saleForm.value.category_id, this.extraPrice, this.saleForm.value.item_digits, this.saleForm.value.item_from, this.saleForm.value.item_id, this.itemPrice, this.saleForm.value.item_qty, this.saleForm.value.item_to, this.saleForm.value.sale_date, this.max_length, this.saleForm.value.item_boards, this.billNo).subscribe(function (data) {
              if (data['status'] == 1) {
                data['orderDetails'].forEach(function (order) {
                  _this8.orders.push({
                    id: order.id,
                    sale_date: order.sale_date,
                    category_id: order.category_id,
                    item_id: order.item_id,
                    item_price: order.item_price,
                    extra_price: order.extra_price,
                    item_digits: order.item.item_digits,
                    item_number: order.item_number,
                    item_qty: order.item_qty,
                    total_items: order.total_items,
                    total_price: order.total_price,
                    created_by: order.created_by,
                    created_at: order.created_at,
                    updated_at: order.updated_at,
                    delete_at: order.delete_at,
                    item: order.item,
                    billNo: order.bill_no
                  });
                });
              }

              console.log("Order List");
              console.log(_this8.orders);

              _this8.saleForm.controls['item_from'].setValue('');

              _this8.saleForm.controls['item_to'].setValue('');

              _this8.saleForm.controls['item_qty'].setValue('');

              if (_this8.max_length < 3) {
                _this8.saleForm.controls['item_boards'].setValue('');
              }

              _this8.focusOnFrom();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "viewSale",
          value: function viewSale() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.navCtrl.navigateRoot('/sales');

                    case 1:
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
        }, {
          key: "removeOrder",
          value: function removeOrder(index, orderId, itemNumber) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirmation!',
                        message: 'Are you sure want to delete <strong>' + itemNumber + '</strong>?',
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
                            _this9.deleteOrder(index, orderId, itemNumber);
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(index, orderId, itemNumber) {
            var _this10 = this;

            // var isPresent = this.orders.some(function (order, i) {
            // 	return order.id === orderId;
            // });
            // console.log(isPresent);
            var i = this.orders.indexOf(index);

            if (i > -1) {
              this.orders.splice(i, 1);
              this.orderService.deleteOrder(orderId).subscribe(function (data) {
                if (data['status']) {
                  _this10.alertService.presentToast(data['message']); //this.categoriesList();

                } else {
                  _this10.alertService.presentToast(data['message']);
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "showError",
          value: function showError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Error',
                        subHeader: error,
                        buttons: ['Dismiss']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "showToast",
          value: function showToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 1000
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "checkBluetooth",
          value: function checkBluetooth() {
            var _this11 = this;

            this.bluetoothSerial.isEnabled().then(function (success) {
              console.log(success);

              if (success == 'OK') {
                _this11.printOrder();
              }
            }, function (error) {
              _this11.showError("Please Enable Bluetooth");
            });
          }
        }, {
          key: "printOrder",
          value: function printOrder() {
            var _this12 = this;

            if (this.orders && this.orders.length > 0) {
              var d = new Date();
              var orderDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
              var dataSend = '\t\t\t\t\t\t             Bill No:- ' + this.orders[0].billNo + '\n ';
              dataSend += '\t\t\t\t\t               Date:- ' + orderDate + '\n';
              dataSend += '------------------------------------------\n';
              var total = 0;

              for (var i = 0; i < this.orders.length; i++) {
                total = total + this.orders[i].item_qty * this.orders[i].total_price;
                dataSend += '\t\t(' + this.orders[i].item.category.category_name + ' - ' + this.orders[i].item.item_name + ')' + this.orders[i].item_number + " - " + this.orders[i].item_qty + '\n';
              }

              dataSend += '------------------------------------------\n';
              dataSend += '\t\t Total:- ' + total + '\n\n\n\n';
              this.showToast(dataSend);
              this.bluetoothSerial.write(dataSend).then(function (success) {
                _this12.showToast(success); //this.navCtrl.navigateRoot('/sales');

              }, function (error) {
                _this12.showError(error);
              });
            }
          }
        }]);

        return SalePage;
      }();

      SalePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_11__["CustomerService"]
        }];
      };

      SalePage.propDecorators = {
        inputElementQty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['qtyFocus']
        }],
        inputElementFrom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['fromFocus']
        }],
        inputElementTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toFocus']
        }]
      };
      SalePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sale',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sale.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sale/sale.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sale.page.scss */
        "./src/app/sale/sale.page.scss"))["default"]]
      })], SalePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sale-sale-module-es5.js.map