(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-device-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDeviceDevicePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button auto-hide=\"false\"></ion-menu-button>\n\t\t\t\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"log-out-outline\" class=\"logoutbtn\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\"><img src=\"../../assets/logo-header.png\" alt=\"\" class=\"header-logo\"></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full class=\"submit-button\" (click)=\"listPairedDevices()\">\n    <ion-icon name=\"refresh\"></ion-icon>&nbsp;Refresh Bluetooth Devices</button>\n  <ion-row>\n    <ion-col>\n      <!-- <ion-list radio-group [(ngModel)]=\"pairedDeviceID\" *ngIf=\"listToggle\">\n        <ion-item *ngFor=\"let i of pairedList;let j=index\">\n          <ion-label>{{i.name}}</ion-label>\n          <ion-radio value=\"{{j}}\" ></ion-radio>\n        </ion-item>\n      </ion-list> -->\n\t\t<ion-radio-group *ngIf=\"listToggle\" (ionChange)=\"onChangeHandler($event)\">\n\t\t<ion-item *ngFor=\"let i of pairedList;let j=index\">\n\t\t\t<ion-label>{{i.name}}</ion-label>\n\t\t\t<ion-radio value=\"{{j}}\"></ion-radio>\n\t\t</ion-item>\n\t\t</ion-radio-group>\n    </ion-col>\n  </ion-row>\n  <button ion-button full class=\"submit-button\" *ngIf=\"listToggle\" (click)=\"selectDevice()\">\n    <ion-icon name=\"bluetooth\"></ion-icon>&nbsp;Connect Bluetooth Devices</button>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label floating>Type The Data You want to Send</ion-label>\n      <ion-input type=\"text\" name=\"datasend\" [(ngModel)]=\"dataSend\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full class=\"submit-button\" (click)=\"sendData()\">\n    <ion-icon name=\"send\"></ion-icon>&nbsp;Send Data Via Bluetooth\n  </button>\n  <button ion-button full class=\"submit-button\" (click)=\"readData()\">\n    <ion-icon name=\"send\"></ion-icon>&nbsp;Read Data Via Bluetooth\n  </button> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/device/device-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/device/device-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: DevicePageRoutingModule */

    /***/
    function srcAppDeviceDeviceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicePageRoutingModule", function () {
        return DevicePageRoutingModule;
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


      var _device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./device.page */
      "./src/app/device/device.page.ts");

      var routes = [{
        path: '',
        component: _device_page__WEBPACK_IMPORTED_MODULE_3__["DevicePage"]
      }];

      var DevicePageRoutingModule = function DevicePageRoutingModule() {
        _classCallCheck(this, DevicePageRoutingModule);
      };

      DevicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DevicePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/device/device.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/device/device.module.ts ***!
      \*****************************************/

    /*! exports provided: DevicePageModule */

    /***/
    function srcAppDeviceDeviceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicePageModule", function () {
        return DevicePageModule;
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


      var _device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./device-routing.module */
      "./src/app/device/device-routing.module.ts");
      /* harmony import */


      var _device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./device.page */
      "./src/app/device/device.page.ts");

      var DevicePageModule = function DevicePageModule() {
        _classCallCheck(this, DevicePageModule);
      };

      DevicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevicePageRoutingModule"]],
        declarations: [_device_page__WEBPACK_IMPORTED_MODULE_6__["DevicePage"]]
      })], DevicePageModule);
      /***/
    },

    /***/
    "./src/app/device/device.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/device/device.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppDeviceDevicePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .submit-btn {\n  color: #FFF;\n  background: rgba(0, 0, 0, 0);\n  border-radius: 30px !important;\n  border: 1px solid #FFF;\n}\n:host .logoutbtn {\n  font-size: 24px;\n}\n:host .submit-button {\n  background-color: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n  height: 2.5rem;\n  font-size: larger;\n  width: 95%;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlL2RldmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBQVI7QUFFTTtFQUFZLGVBQUE7QUFDbEI7QUFBTTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9kZXZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5zdWJtaXQtYnRuIHtcbiAgICAgICAgY29sb3I6I0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICAgICAgfVxuICAgICAgLmxvZ291dGJ0bnsgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgICAuc3VibWl0LWJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZkMDBiZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/device/device.page.ts":
    /*!***************************************!*\
      !*** ./src/app/device/device.page.ts ***!
      \***************************************/

    /*! exports provided: DevicePage */

    /***/
    function srcAppDeviceDevicePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicePage", function () {
        return DevicePage;
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


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var DevicePage = /*#__PURE__*/function () {
        function DevicePage(bluetoothSerial, navCtrl, alertCtrl, toastCtrl) {
          _classCallCheck(this, DevicePage);

          this.bluetoothSerial = bluetoothSerial;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.toastCtrl = toastCtrl;
          this.listToggle = false;
          this.pairedDeviceID = 0;
          this.dataSend = "";
          this.checkBluetoothEnabled();
        }

        _createClass(DevicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onChangeHandler",
          value: function onChangeHandler($event) {
            this.pairedDeviceID = $event.target.value;
          }
        }, {
          key: "checkBluetoothEnabled",
          value: function checkBluetoothEnabled() {
            var _this = this;

            this.bluetoothSerial.isEnabled().then(function (success) {
              _this.listPairedDevices();
            }, function (error) {
              _this.showError("Please Enable Bluetooth");
            });
          }
        }, {
          key: "listPairedDevices",
          value: function listPairedDevices() {
            var _this2 = this;

            this.bluetoothSerial.list().then(function (success) {
              _this2.pairedList = success;
              _this2.listToggle = true;
            }, function (error) {
              _this2.showError("Please Enable Bluetooth");

              _this2.listToggle = false;
            });
          }
        }, {
          key: "selectDevice",
          value: function selectDevice() {
            alert(this.pairedDeviceID);
            var connectedDevice = this.pairedList[this.pairedDeviceID];

            if (!connectedDevice.address) {
              this.showError('Select Paired Device to connect');
              return;
            }

            var address = connectedDevice.address;
            var name = connectedDevice.name;
            this.connect(address);
          }
        }, {
          key: "connect",
          value: function connect(address) {
            var _this3 = this;

            this.bluetoothSerial.connect(address).subscribe(function (success) {
              _this3.deviceConnected();

              _this3.showToast("Successfully Connected");
            }, function (error) {
              _this3.showError("Error:Connecting to Device");
            });
          }
        }, {
          key: "deviceConnected",
          value: function deviceConnected() {
            var _this4 = this;

            this.bluetoothSerial.subscribe('\n').subscribe(function (success) {
              _this4.handleData(success);

              _this4.showToast("Connected Successfully");
            }, function (error) {
              _this4.showError(error);
            });
          }
        }, {
          key: "deviceDisconnected",
          value: function deviceDisconnected() {
            this.bluetoothSerial.disconnect();
            this.showToast('Device Disconnected');
          }
        }, {
          key: "handleData",
          value: function handleData(data) {
            this.showToast(data);
          }
        }, {
          key: "sendData",
          value: function sendData() {
            var _this5 = this;

            //this.dataSend += '\n';
            this.dataSend = '08-06-2020 \t\t\t\t\t 12345 \n 11111 - 22222 - C \n 12 - 100000 \n';
            this.showToast(this.dataSend);
            this.bluetoothSerial.write(this.dataSend).then(function (success) {
              _this5.showToast(success);
            }, function (error) {
              _this5.showError(error);
            });
          }
        }, {
          key: "readData",
          value: function readData() {
            var _this6 = this;

            this.bluetoothSerial.subscribe('\n').subscribe(function (success) {
              console.log(success);

              _this6.showToast(success);
            }, function (error) {
              _this6.showError(error);
            });
          }
        }, {
          key: "showError",
          value: function showError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Error',
                        subHeader: error,
                        buttons: ['Dismiss']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showToast",
          value: function showToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 1000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return DevicePage;
      }();

      DevicePage.ctorParameters = function () {
        return [{
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      DevicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./device.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./device.page.scss */
        "./src/app/device/device.page.scss"))["default"]]
      })], DevicePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=device-device-module-es5.js.map