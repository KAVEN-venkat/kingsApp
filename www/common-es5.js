(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActiveA6787d69Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate4584ab5aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/category/category.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/category/category.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModalsCategoryCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons (click)=\"dismiss()\" slot=\"primary\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"close-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"ion-text-center\">{{title}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<form [formGroup]=\"categoryForm\" class=\"new-item-form ion-no-padding\" method=\"post\" (ngSubmit)=\"categoryCreation()\">\n\t<ion-item class=\"form-control form-group\" lines=\"none\" [ngClass]=\"{ 'form-error-dynamic-input': submitted && categoryForm.controls['category_name'].errors?.required }\">\n\t    <ion-input class=\"form-control-lg ion-no-padding\" type=\"text\" formControlName=\"category_name\" placeholder=\"Category Name\"></ion-input>\n\t</ion-item>\n\t<br />\n\t<ion-button type=\"submit\" shape=\"round\" expand=\"full\" size=\"large\" class=\"shadow login_btn bg-color\">Save</ion-button>\n\t</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/modals/category/category.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/modals/category/category.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModalsCategoryCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .form-control {\n  background: #ffffff !important;\n  border-radius: 40px !important;\n  border: 1px solid rgba(0, 0, 0, 0.08) !important;\n}\n:host .form-group {\n  margin-bottom: 0.5rem !important;\n  height: calc(1.5em + .75rem + 2px);\n}\n:host .form-control-lg {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n}\n:host .item-has-focus {\n  border: 1px solid #6d00be !important;\n}\n:host .form-error-dynamic-input {\n  border: 1px solid red !important;\n}\n:host .bg-color {\n  --background: #6d00be !important;\n  color: #ffffff;\n  box-shadow: none !important;\n  height: 2.5rem;\n  font-size: larger;\n}\n:host .fnt-size {\n  font-size: 24px;\n}\n:host .header::after {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQUFIO0FBRUM7RUFDSSxnQ0FBQTtFQUNBLGtDQUFBO0FBQUw7QUFFQztFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBTDtBQUVDO0VBQ0csb0NBQUE7QUFBSjtBQUVDO0VBQ0UsZ0NBQUE7QUFBSDtBQUVDO0VBQ0MsZ0NBQUE7RUFDRyxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBTDtBQUVDO0VBQ0MsZUFBQTtBQUFGO0FBRUM7RUFDQyxzQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuXHQuZm9ybS1jb250cm9sIHtcblx0ICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG5cdCAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuXHQgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcblx0fVxuXHQuZm9ybS1ncm91cCB7XG5cdCAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcblx0ICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG5cdH1cblx0LmZvcm0tY29udHJvbC1sZyB7XG5cdCAgICBkaXNwbGF5OiBibG9jaztcblx0ICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcblx0ICAgIGZvbnQtc2l6ZTogMXJlbTtcblx0ICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cdCAgICBsaW5lLWhlaWdodDogMS41O1xuXHQgICAgY29sb3I6ICM0OTUwNTc7XG5cdH1cblx0Lml0ZW0taGFzLWZvY3Vze1xuXHQgICBib3JkZXI6IDFweCBzb2xpZCAjNmQwMGJlICFpbXBvcnRhbnQ7XG5cdH1cblx0LmZvcm0tZXJyb3ItZHluYW1pYy1pbnB1dHtcblx0ICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcblx0fVxuXHQuYmctY29sb3J7XG5cdFx0LS1iYWNrZ3JvdW5kOiAjNmQwMGJlICFpbXBvcnRhbnQ7XG5cdCAgICBjb2xvcjogI2ZmZmZmZjtcblx0ICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblx0ICAgIGhlaWdodDogMi41cmVtO1xuXHQgICAgZm9udC1zaXplOiBsYXJnZXI7XG5cdH1cblx0LmZudC1zaXple1xuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0fVxuXHQuaGVhZGVyOjphZnRlciB7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcblx0fVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/modals/category/category.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/modals/category/category.page.ts ***!
      \**************************************************/

    /*! exports provided: CategoryPage */

    /***/
    function srcAppModalsCategoryCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
        return CategoryPage;
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


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/category.service */
      "./src/app/services/category.service.ts");

      var CategoryPage = /*#__PURE__*/function () {
        function CategoryPage(modalController, navCtrl, menu, formBuilder, alertService, router, navParams, categoryService) {
          _classCallCheck(this, CategoryPage);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.formBuilder = formBuilder;
          this.alertService = alertService;
          this.router = router;
          this.navParams = navParams;
          this.categoryService = categoryService;
          this.submitted = false;
          this.menu.enable(true);
          this.title = this.navParams.get('title');

          if (this.navParams.get('categoryId')) {
            this.categoryId = this.navParams.get('categoryId');
          }
        }

        _createClass(CategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!localStorage.getItem('user_id')) {
              this.navCtrl.navigateRoot('/');
            }

            if (this.categoryId > 0 && this.categoryId != undefined) {
              this.getCategory();
            }

            this.categoryForm = this.formBuilder.group({
              category_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }, {
          key: "categoryCreation",
          value: function categoryCreation() {
            var _this = this;

            this.submitted = true; // stop here if form is invalid

            if (this.categoryForm.invalid) {
              return;
            }

            if (this.categoryId != undefined) {
              this.categoryUpdation();
            } else {
              this.categoryService.createCategory(this.categoryForm.value.category_name).subscribe(function (data) {
                console.log(data);

                if (data['status'] == 1) {
                  _this.dismiss();

                  _this.alertService.presentToast(data['message']);
                } else {
                  _this.alertService.presentToast(data['message']);
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "categoryUpdation",
          value: function categoryUpdation() {
            var _this2 = this;

            this.submitted = true; // stop here if form is invalid

            console.log(this.categoryForm);

            if (this.categoryForm.invalid) {
              return;
            }

            this.categoryService.updateCategory(this.categoryId, this.categoryForm.value.category_name).subscribe(function (data) {
              console.log(data);

              if (data['status'] == 1) {
                _this2.dismiss();

                _this2.alertService.presentToast(data['message']);
              } else {
                _this2.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getCategory",
          value: function getCategory() {
            var _this3 = this;

            this.categoryService.category(this.categoryId).subscribe(function (data) {
              console.log(data); //this.presentLoadingDismiss();
              //let result = JSON.stringify(data);

              if (data['status']) {
                _this3.categoryForm = _this3.formBuilder.group({
                  category_name: [data['categoryDetails'].category_name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                });
              } else {
                _this3.alertService.presentToast(data['message']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);

        return CategoryPage;
      }();

      CategoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }];
      };

      CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./category.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/category/category.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./category.page.scss */
        "./src/app/modals/category/category.page.scss"))["default"]]
      })], CategoryPage);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./env.service */
      "./src/app/services/env.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, storage, env) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.storage = storage;
          this.env = env;
          this.isLoggedIn = false;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(mobile, password) {
            var _this4 = this;

            return this.http.post(this.env.API_URL + 'login', {
              mobile: mobile,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
              _this4.storage.setItem('token', token).then(function () {
                console.log('Token Stored');
              }, function (error) {
                return console.error('Error storing item', error);
              });

              _this4.token = token;
              _this4.isLoggedIn = true;
              return token;
            }));
          }
        }, {
          key: "register",
          value: function register(fname, lname, mno, email, pwd, userType) {
            return this.http.post(this.env.API_URL + 'register', {
              first_name: fname,
              last_name: lname,
              email: email,
              password: pwd,
              mobile: mno,
              userType: userType
            }); //return fname;
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp(user_id, otp) {
            return this.http.post(this.env.API_URL + 'verify', {
              user_id: user_id,
              otp: otp
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': this.token["token_type"] + " " + this.token["access_token"]
            });
            return this.http.get(this.env.API_URL + 'logout', {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
              _this5.storage.remove("token");

              _this5.isLoggedIn = false;
              delete _this5.token;
              return data;
            }));
          }
        }, {
          key: "user",
          value: function user() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': this.token["token_type"] + " " + this.token["access_token"]
            });
            return this.http.get(this.env.API_URL + 'user', {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            var _this6 = this;

            return this.storage.getItem('token').then(function (data) {
              _this6.token = data;

              if (_this6.token != null) {
                _this6.isLoggedIn = true;
              } else {
                _this6.isLoggedIn = false;
              }
            }, function (error) {
              _this6.token = null;
              _this6.isLoggedIn = false;
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
        }, {
          type: _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/order.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/order.service.ts ***!
      \*******************************************/

    /*! exports provided: OrderService */

    /***/
    function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./env.service */
      "./src/app/services/env.service.ts");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(http, env) {
          _classCallCheck(this, OrderService);

          this.http = http;
          this.env = env;
        }

        _createClass(OrderService, [{
          key: "createOrder",
          value: function createOrder(customer_id, category_id, extra_price, item_digits, item_from, item_id, item_price, item_qty, item_to, sale_date, maxLength, board, billNo) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': localStorage.getItem('token_type') + " " + localStorage.getItem('access_token')
            });
            return this.http.post(this.env.API_URL + 'createOrder', {
              customer_id: customer_id,
              category_id: category_id,
              extra_price: extra_price,
              item_digits: item_digits,
              item_from: item_from,
              item_id: item_id,
              item_price: item_price,
              item_qty: item_qty,
              item_to: item_to,
              sale_date: sale_date,
              maxLength: maxLength,
              board: board,
              billNo: billNo
            }, {
              headers: headers
            }); //return fname;
          }
        }, {
          key: "orderCount",
          value: function orderCount() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': localStorage.getItem('token_type') + " " + localStorage.getItem('access_token')
            });
            return this.http.get(this.env.API_URL + 'orders/count', {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (order) {
              return order;
            }));
          }
        }, {
          key: "orderLists",
          value: function orderLists(limit) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': localStorage.getItem('token_type') + " " + localStorage.getItem('access_token')
            });
            var url;

            if (limit == 'all') {
              url = this.env.API_URL + 'orders';
            } else {
              url = this.env.API_URL + 'orders/' + limit;
            }

            return this.http.get(url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (order) {
              return order;
            }));
          }
        }, {
          key: "orderByUser",
          value: function orderByUser(userId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': localStorage.getItem('token_type') + " " + localStorage.getItem('access_token')
            });
            var url = this.env.API_URL + 'orderByUser/' + userId;
            return this.http.get(url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (order) {
              return order;
            }));
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(orderId) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': localStorage.getItem('token_type') + " " + localStorage.getItem('access_token')
            });
            return this.http["delete"](this.env.API_URL + 'deleteOrder/' + orderId, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (order) {
              return order;
            }));
          }
        }, {
          key: "totalOrder",
          value: function totalOrder() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': localStorage.getItem('token_type') + " " + localStorage.getItem('access_token')
            });
            var url = this.env.API_URL + 'orderTotal';
            return this.http.get(url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (order) {
              return order;
            }));
          }
        }]);

        return OrderService;
      }();

      OrderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
        }];
      };

      OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], OrderService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map