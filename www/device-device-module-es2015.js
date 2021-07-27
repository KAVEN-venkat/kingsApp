(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-device-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t\t\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"log-out-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full class=\"submit-button\" (click)=\"listPairedDevices()\">\n    <ion-icon name=\"refresh\"></ion-icon>&nbsp;Refresh Bluetooth Devices</button>\n  <ion-row>\n    <ion-col>\n      <!-- <ion-list radio-group [(ngModel)]=\"pairedDeviceID\" *ngIf=\"listToggle\">\n        <ion-item *ngFor=\"let i of pairedList;let j=index\">\n          <ion-label>{{i.name}}</ion-label>\n          <ion-radio value=\"{{j}}\" ></ion-radio>\n        </ion-item>\n      </ion-list> -->\n\t\t<ion-radio-group *ngIf=\"listToggle\" (ionChange)=\"onChangeHandler($event)\">\n\t\t<ion-item *ngFor=\"let i of pairedList;let j=index\">\n\t\t\t<ion-label>{{i.name}}</ion-label>\n\t\t\t<ion-radio value=\"{{j}}\"></ion-radio>\n\t\t</ion-item>\n\t\t</ion-radio-group>\n    </ion-col>\n  </ion-row>\n  <button ion-button full class=\"submit-button\" *ngIf=\"listToggle\" (click)=\"selectDevice()\">\n    <ion-icon name=\"bluetooth\"></ion-icon>&nbsp;Connect Bluetooth Devices</button>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label floating>Type The Data You want to Send</ion-label>\n      <ion-input type=\"text\" name=\"datasend\" [(ngModel)]=\"dataSend\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full class=\"submit-button\" (click)=\"sendData()\">\n    <ion-icon name=\"send\"></ion-icon>&nbsp;Send Data Via Bluetooth\n  </button>\n  <button ion-button full class=\"submit-button\" (click)=\"readData()\">\n    <ion-icon name=\"send\"></ion-icon>&nbsp;Read Data Via Bluetooth\n  </button> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/device/device-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/device/device-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DevicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageRoutingModule", function() { return DevicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device.page */ "./src/app/device/device.page.ts");




const routes = [
    {
        path: '',
        component: _device_page__WEBPACK_IMPORTED_MODULE_3__["DevicePage"]
    }
];
let DevicePageRoutingModule = class DevicePageRoutingModule {
};
DevicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DevicePageRoutingModule);



/***/ }),

/***/ "./src/app/device/device.module.ts":
/*!*****************************************!*\
  !*** ./src/app/device/device.module.ts ***!
  \*****************************************/
/*! exports provided: DevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageModule", function() { return DevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-routing.module */ "./src/app/device/device-routing.module.ts");
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device.page */ "./src/app/device/device.page.ts");







let DevicePageModule = class DevicePageModule {
};
DevicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _device_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevicePageRoutingModule"]
        ],
        declarations: [_device_page__WEBPACK_IMPORTED_MODULE_6__["DevicePage"]]
    })
], DevicePageModule);



/***/ }),

/***/ "./src/app/device/device.page.scss":
/*!*****************************************!*\
  !*** ./src/app/device/device.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .submit-btn {\n  color: #FFF;\n  background: rgba(0, 0, 0, 0);\n  border-radius: 30px !important;\n  border: 1px solid #FFF;\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n:host .submit-button {\n  background-color: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n  height: 2.5rem;\n  font-size: larger;\n  width: 95%;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlL2RldmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBQVI7QUFFTTtFQUFZLGVBQUE7QUFDbEI7QUFBTTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9kZXZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5zdWJtaXQtYnRuIHtcbiAgICAgICAgY29sb3I6I0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICAgICAgfVxuICAgICAgLmxvZ291dGJ0bnsgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgICAuc3VibWl0LWJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZkMDBiZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/device/device.page.ts":
/*!***************************************!*\
  !*** ./src/app/device/device.page.ts ***!
  \***************************************/
/*! exports provided: DevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePage", function() { return DevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let DevicePage = class DevicePage {
    constructor(bluetoothSerial, navCtrl, alertCtrl, toastCtrl) {
        this.bluetoothSerial = bluetoothSerial;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.listToggle = false;
        this.pairedDeviceID = 0;
        this.dataSend = "";
        this.checkBluetoothEnabled();
    }
    ngOnInit() {
    }
    onChangeHandler($event) {
        this.pairedDeviceID = $event.target.value;
    }
    checkBluetoothEnabled() {
        this.bluetoothSerial.isEnabled().then(success => {
            this.listPairedDevices();
        }, error => {
            this.showError("Please Enable Bluetooth");
        });
    }
    listPairedDevices() {
        this.bluetoothSerial.list().then(success => {
            this.pairedList = success;
            this.listToggle = true;
        }, error => {
            this.showError("Please Enable Bluetooth");
            this.listToggle = false;
        });
    }
    selectDevice() {
        alert(this.pairedDeviceID);
        let connectedDevice = this.pairedList[this.pairedDeviceID];
        if (!connectedDevice.address) {
            this.showError('Select Paired Device to connect');
            return;
        }
        let address = connectedDevice.address;
        let name = connectedDevice.name;
        this.connect(address);
    }
    connect(address) {
        this.bluetoothSerial.connect(address).subscribe(success => {
            this.deviceConnected();
            this.showToast("Successfully Connected");
        }, error => {
            this.showError("Error:Connecting to Device");
        });
    }
    deviceConnected() {
        this.bluetoothSerial.subscribe('\n').subscribe(success => {
            this.handleData(success);
            this.showToast("Connected Successfully");
        }, error => {
            this.showError(error);
        });
    }
    deviceDisconnected() {
        this.bluetoothSerial.disconnect();
        this.showToast('Device Disconnected');
    }
    handleData(data) {
        this.showToast(data);
    }
    sendData() {
        //this.dataSend += '\n';
        this.dataSend = '08-06-2020 \t\t\t\t\t 12345 \n 11111 - 22222 - C \n 12 - 100000 \n';
        this.showToast(this.dataSend);
        this.bluetoothSerial.write(this.dataSend).then(success => {
            this.showToast(success);
        }, error => {
            this.showError(error);
        });
    }
    readData() {
        this.bluetoothSerial.subscribe('\n').subscribe(success => {
            console.log(success);
            this.showToast(success);
        }, error => {
            this.showError(error);
        });
    }
    showError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Error',
                subHeader: error,
                buttons: ['Dismiss']
            });
            yield alert.present();
        });
    }
    showToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 1000
            });
            toast.present();
        });
    }
};
DevicePage.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
DevicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./device.page.scss */ "./src/app/device/device.page.scss")).default]
    })
], DevicePage);



/***/ })

}]);
//# sourceMappingURL=device-device-module-es2015.js.map