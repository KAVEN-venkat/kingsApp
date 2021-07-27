(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\" (click)=\"newCategoryModal('category','my-category-modal-css','createCategory')\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"add-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-start ion-padding-end\">\n\t<h6 class=\"subtitle\">Categories List - {{categories.length}}</h6>\n\t<ion-grid *ngIf=\"categories\">\n\t\t<ion-row class=\"categoryLists\" *ngFor=\"let category of categories\" (click)=\"presentActionSheet(category.id,category.category_name)\">\n\t\t\t<ion-col size=\"12\" class=\"category_name\">\n\t\t\t  <h3>{{category.category_name}}</h3>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .logoutbtn {\n  font-size: 24px;\n}\n:host .categoryLists {\n  border-radius: 10px;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n  margin-bottom: 1rem !important;\n  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -moz-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n  -ms-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1) !important;\n}\n:host .categoryLists .hydrated {\n  margin: 5px 15px;\n}\n:host .border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n:host .categoryLists {\n  background: #a700ff;\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, #a700ff), color-stop(100%, #00189a));\n  background: linear-gradient(135deg, #a700ff 0%, #00189a 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#d800ff\", endColorstr=\"#00189a\", GradientType=1);\n  color: #ffffff;\n  margin-bottom: 0.5rem !important;\n}\n:host .categoryLists .category_name {\n  vertical-align: middle;\n  margin-top: 0px !important;\n}\n:host .subtitle {\n  font-size: 16px;\n  line-height: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  text-align: center;\n}\n:host .category_name, :host .category_name h3 {\n  margin: 0px !important;\n}\n:host .subtitle {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFZLGVBQUE7QUFDaEI7QUFBSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSw4REFBQTtFQUNBLDZEQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0FBRVI7QUFDSTtFQUNJLHlDQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0VBRUEsd0dBQUE7RUFJQSw2REFBQTtFQUNBLGtIQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBQ1I7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNJO0VBQ0ksc0JBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5sb2dvdXRidG57IGZvbnQtc2l6ZTogMjRweDsgfVxuICAgIC5jYXRlZ29yeUxpc3Rze1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW0haW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIC4zcmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIC4xKSAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAuM3JlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAuMSkgIWltcG9ydGFudDtcbiAgICAgICAgLW1zLWJveC1zaGFkb3c6IDAgLjNyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjEpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jYXRlZ29yeUxpc3RzIC5oeWRyYXRlZHtcbiAgICAgICAgbWFyZ2luOiA1cHggMTVweDtcbiAgICB9XG5cbiAgICAuYm9yZGVyLWxlZnQge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2F0ZWdvcnlMaXN0c3tcbiAgICAgICAgYmFja2dyb3VuZDogI2E3MDBmZjtcbiAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNhNzAwZmYpLCBjb2xvci1zdG9wKDEwMCUsICMwMDE4OWEpKTtcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYTcwMGZmIDAlLCAjMDAxODlhIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2E3MDBmZiAwJSwgIzAwMTg5YSAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2E3MDBmZiAwJSwgIzAwMTg5YSAxMDAlKTtcbiAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2Q4MDBmZicsIGVuZENvbG9yc3RyPScjMDAxODlhJywgR3JhZGllbnRUeXBlPTEpO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jYXRlZ29yeUxpc3RzIC5jYXRlZ29yeV9uYW1le1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW4tdG9wOjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jYXRlZ29yeV9uYW1lLCAuY2F0ZWdvcnlfbmFtZSBoM3tcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnN1YnRpdGxle1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modals_category_category_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/category/category.page */ "./src/app/modals/category/category.page.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");








let CategoriesPage = class CategoriesPage {
    constructor(modalController, navCtrl, menu, categoryService, alertService, router, env, actionSheetController, loadingController, alertController) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.categoryService = categoryService;
        this.alertService = alertService;
        this.router = router;
        this.env = env;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.categories = [];
        this.menu.enable(true);
    }
    ngOnInit() {
        this.categoriesList();
    }
    categoriesList() {
        this.presentLoading();
        this.categoryService.categories().subscribe(data => {
            if (data['status']) {
                this.presentLoadingDismiss();
                this.categories = data['categoriesList'];
            }
            else {
                this.presentLoadingDismiss();
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    newCategoryModal(openPage, css_class, routeAction, category_id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let opencomponent, componentData;
            opencomponent = _modals_category_category_page__WEBPACK_IMPORTED_MODULE_4__["CategoryPage"];
            if (routeAction == 'createCategory' && category_id == 0) {
                componentData = { 'title': 'New Category' };
            }
            else {
                componentData = { 'title': 'Update Category', 'categoryId': category_id };
            }
            const modal = yield this.modalController.create({
                component: opencomponent,
                cssClass: css_class,
                componentProps: componentData
            });
            modal.onDidDismiss().then(() => {
                this.categoriesList();
            });
            return yield modal.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield loading.present();
        });
    }
    presentLoadingDismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
    presentActionSheet(category_id, category_name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: ' Action',
                buttons: [{
                        text: 'Edit',
                        icon: 'create-outline',
                        handler: () => {
                            this.newCategoryModal('category', 'my-category-modal-css', 'updateCategory', category_id);
                            console.log('Edit clicked');
                        }
                    }, {
                        text: 'Delete',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
                            this.deleteCategoryConfirm(category_id, category_name);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    deleteCategory(category_id, category_name) {
        this.categoryService.deleteCategory(category_id).subscribe(data => {
            if (data['status']) {
                this.alertService.presentToast(data['message']);
                this.categoriesList();
            }
            else {
                this.alertService.presentToast(data['message']);
            }
        }, error => {
            console.log(error);
        });
    }
    deleteCategoryConfirm(category_id, category_name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmation!',
                message: 'Are you sure want to delete <strong>' + category_name + '</strong>?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.deleteCategory(category_id, category_name);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_7__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")).default]
    })
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map