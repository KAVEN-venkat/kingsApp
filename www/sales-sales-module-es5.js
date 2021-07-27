(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSalesSalesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/sale\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"log-out-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list class=\"ion-no-padding\" *ngIf=\"orders\">\n\t\t<ion-item-sliding *ngFor=\"let order of orders\">\n\t\t\t<ion-item lines=\"full\" class=\"ion-no-padding\">\n\t\t\t\t<ion-grid>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"3\" size-lg class=\"item_fab_col\">\n\t\t\t\t\t\t\t<ion-fab class=\"item_fab\" class=\"ion-no-padding\">\n\t\t\t\t\t\t    \t<ion-fab-button color=\"secondary\">{{order.item.item_name}}</ion-fab-button>\n\t\t\t\t\t\t  \t</ion-fab>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"9\" size-lg class=\"orderDetail\">\n\t\t\t\t\t\t\t<ion-grid class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"3\" class=\"ion-no-padding\">Date</ion-col><ion-col class=\"ion-no-padding\"> : {{order.sale_date | date:'dd-MM-yyyy h:mm:ss a'}}</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"3\" class=\"ion-no-padding\">Number</ion-col><ion-col class=\"ion-no-padding\"> : {{order.item_number}}</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t<ion-grid class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"3\" class=\"ion-no-padding\">Qty</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"ion-no-padding\"><strong>: {{order.item_qty}}</strong></ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"3\" class=\"ion-no-padding\">Price</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"ion-no-padding\"><strong>: {{order.total_price}}</strong></ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-grid>\n\t\t\t</ion-item>\n\t\t</ion-item-sliding>\n\t</ion-list>\n\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    \t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  \t</ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sales/sales-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/sales/sales-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: SalesPageRoutingModule */

    /***/
    function srcAppSalesSalesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesPageRoutingModule", function () {
        return SalesPageRoutingModule;
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


      var _sales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sales.page */
      "./src/app/sales/sales.page.ts");

      var routes = [{
        path: '',
        component: _sales_page__WEBPACK_IMPORTED_MODULE_3__["SalesPage"]
      }];

      var SalesPageRoutingModule = function SalesPageRoutingModule() {
        _classCallCheck(this, SalesPageRoutingModule);
      };

      SalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SalesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sales/sales.module.ts":
    /*!***************************************!*\
      !*** ./src/app/sales/sales.module.ts ***!
      \***************************************/

    /*! exports provided: SalesPageModule */

    /***/
    function srcAppSalesSalesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesPageModule", function () {
        return SalesPageModule;
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


      var _sales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sales-routing.module */
      "./src/app/sales/sales-routing.module.ts");
      /* harmony import */


      var _sales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sales.page */
      "./src/app/sales/sales.page.ts");

      var SalesPageModule = function SalesPageModule() {
        _classCallCheck(this, SalesPageModule);
      };

      SalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sales_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalesPageRoutingModule"]],
        declarations: [_sales_page__WEBPACK_IMPORTED_MODULE_6__["SalesPage"]]
      })], SalesPageModule);
      /***/
    },

    /***/
    "./src/app/sales/sales.page.scss":
    /*!***************************************!*\
      !*** ./src/app/sales/sales.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppSalesSalesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n  height: calc(1.5em + .75rem + 2px);\n}\n:host .form-control-lg {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .shadow {\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n  height: 2.5rem;\n  font-size: larger;\n}\n:host .order_btn {\n  --background: none !important;\n  color: #6d00be !important;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n:host .thumbnail_img {\n  width: 158px;\n  height: 158px;\n  height: 178px;\n  width: 178px;\n  border-radius: 90px;\n  border: 10px solid #6d00be;\n  margin: 0 auto;\n}\n:host .thumbnail_img img {\n  border-radius: 90px;\n  position: relative;\n}\n:host .subtitle {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n:host .profile-form ion-label {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 0px 15px;\n}\n:host ion-select {\n  max-width: 100%;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n:host .item-digits ion-col ion-item ion-label {\n  margin: 0px !important;\n}\n:host .item-select, :host .ion-item-radio {\n  --min-height: calc(1.5em + .75rem + 2px) !important;\n  --max-height: calc(1.5em + .75rem + 2px) !important;\n  height: calc(1.5em + .75rem + 2px) !important;\n}\n:host .inner_padding_top {\n  --inner-padding-top: 0px !important;\n}\n:host .remove_icon {\n  font-size: 24px;\n}\n:host .item_fab, :host .hydrated {\n  font-weight: bold;\n}\n:host .item_fab_col {\n  --margin-top: var(--ion-margin, 8px);\n  margin-top: var(--ion-margin, 8px);\n}\n:host .ion-color-secondary {\n  --ion-color-base: #a700ff !important;\n}\n:host .orderDetail {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvc2FsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdEQUFBO0FBQUY7QUFFQTtFQUNJLGdDQUFBO0VBQ0Esa0NBQUE7QUFBSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0E7RUFDSSx5REFBQTtFQUNBLGlFQUFBO0VBQ0EsOERBQUE7RUFDQSw2REFBQTtBQURKO0FBR0E7RUFDSSxnQ0FBQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUROO0FBR0U7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FBREo7QUFHQTtFQUNFLGVBQUE7QUFERjtBQUdBO0VBQ0Usc0JBQUE7QUFERjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBREY7QUFHQTtFQUFvQixtQkFBQTtFQUFxQixrQkFBQTtBQUN6QztBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRUo7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUFBO0VBQVksZUFBQTtBQUdaO0FBRkE7RUFDQSxzQkFBQTtBQUlBO0FBRkE7RUFDRSxtREFBQTtFQUNBLG1EQUFBO0VBQ0EsNkNBQUE7QUFJRjtBQUZBO0VBQ0UsbUNBQUE7QUFJRjtBQUZBO0VBQ0UsZUFBQTtBQUlGO0FBRkE7RUFDRSxpQkFBQTtBQUlGO0FBRkE7RUFDSSxvQ0FBQTtFQUNBLGtDQUFBO0FBSUo7QUFGQTtFQUNFLG9DQUFBO0FBSUY7QUFGQTtFQUNFLDBCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9zYWxlcy9zYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4uZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xufVxuLmZvcm0tY29udHJvbC1sZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG59XG4uYmctY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNmQwMGJlICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gIH1cbiAgLm9yZGVyX2J0bntcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzZkMDBiZSAhaW1wb3J0YW50O1xuICB9XG4uZm50LXNpemV7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi50aHVtYm5haWxfaW1ne1xuICB3aWR0aDoxNThweDtcbiAgaGVpZ2h0OjE1OHB4O1xuICBoZWlnaHQ6IDE3OHB4O1xuICB3aWR0aDogMTc4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNmQwMGJlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aHVtYm5haWxfaW1nIGltZ3sgYm9yZGVyLXJhZGl1czogOTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9maWxlLWZvcm0gaW9uLWxhYmVse1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuaW9uLXNlbGVjdHtcbiAgbWF4LXdpZHRoOiAxMDAlOyBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1Nztcbn1cbi5sb2dvdXRidG57IGZvbnQtc2l6ZTogMjRweDsgfVxuLml0ZW0tZGlnaXRzIGlvbi1jb2wgaW9uLWl0ZW0gaW9uLWxhYmVse1xubWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5pdGVtLXNlbGVjdCwgLmlvbi1pdGVtLXJhZGlve1xuICAtLW1pbi1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCkgIWltcG9ydGFudDsgIFxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG59XG4uaW5uZXJfcGFkZGluZ190b3B7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLnJlbW92ZV9pY29ue1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uaXRlbV9mYWIsIC5oeWRyYXRlZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaXRlbV9mYWJfY29sIHtcbiAgICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDhweCk7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgOHB4KTtcbn1cbi5pb24tY29sb3Itc2Vjb25kYXJ5e1xuICAtLWlvbi1jb2xvci1iYXNlOiAjYTcwMGZmICFpbXBvcnRhbnQ7XG59XG4ub3JkZXJEZXRhaWx7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/sales/sales.page.ts":
    /*!*************************************!*\
      !*** ./src/app/sales/sales.page.ts ***!
      \*************************************/

    /*! exports provided: SalesPage */

    /***/
    function srcAppSalesSalesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesPage", function () {
        return SalesPage;
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


      var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/order.service */
      "./src/app/services/order.service.ts");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/item.service */
      "./src/app/services/item.service.ts");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/env.service */
      "./src/app/services/env.service.ts");

      var SalesPage = /*#__PURE__*/function () {
        function SalesPage(modalController, navCtrl, menu, orderService, alertService, router, env, actionSheetController, loadingController, alertController, itemService) {
          _classCallCheck(this, SalesPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.orderService = orderService;
          this.alertService = alertService;
          this.router = router;
          this.env = env;
          this.actionSheetController = actionSheetController;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.itemService = itemService;
          this.orders = [];
          this.offset = 0;
          this.menu.enable(true);
        }

        _createClass(SalesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ordersCount();
            this.ordersList();
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this = this;

            this.offset = this.offset + 1;
            console.log(this.offset);
            this.ordersList();
            setTimeout(function () {
              console.log('Done');
              event.target.complete();

              if (_this.orders.length == _this.count) {
                event.target.disabled = true;
              }
            }, 500);
          }
        }, {
          key: "ordersCount",
          value: function ordersCount() {
            var _this2 = this;

            this.orderService.orderCount().subscribe(function (data) {
              _this2.presentLoadingDismiss();

              if (data['status']) {
                _this2.count = data['ordersCount'];
              } else {
                _this2.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ordersList",
          value: function ordersList() {
            var _this3 = this;

            this.presentLoading();
            this.orderService.orderLists(this.offset).subscribe(function (data) {
              //console.log(data);
              //let result = JSON.stringify(data);
              _this3.presentLoadingDismiss();

              if (data['status']) {
                if (_this3.orders.length == 0) {
                  _this3.orders = data['ordersList'];
                } else {
                  _this3.orders = _this3.orders.concat(data['ordersList']);
                }

                console.log(_this3.orders);
              } else {
                _this3.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "itemByColumn",
          value: function itemByColumn(itemId, columnName) {
            var _this4 = this;

            this.itemService.itemByColumn(itemId, columnName).subscribe(function (data) {
              console.log(data);

              if (data['status']) {
                _this4.itemName = data['items'];
              } else {
                _this4.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "newSaleModal",
          value: function newSaleModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.navCtrl.navigateRoot('/sale');

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
        }]);

        return SalesPage;
      }();

      SalesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]
        }];
      };

      SalesPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]]
        }]
      };
      SalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sales.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sales.page.scss */
        "./src/app/sales/sales.page.scss"))["default"]]
      })], SalesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sales-sales-module-es5.js.map