(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"border-top py-3 text-white bg-dark mt-3\">\n    <div class=\"row\">\n       <span class=\"copy-right-notice col-lg-2 col-md-4 col-4 text-center text-white\">&copy; 2020</span>\n       <a href=\"#\"\n          class=\"col-lg-2  col-4 text-center text-white\">Terms</a>\n       <a href=\"#\"\n          class=\"col-lg-2  col-4 text-center text-white\">Privacy</a>\n       <a href=\"#\"\n          class=\"col-lg-2  col-4 text-center text-white\">Security</a>\n       <a href=\"#\"\n          class=\"col-lg-2  col-4 text-center text-white\">Contact</a>\n       <a href=\"#\"\n          class=\"col-lg-2  col-4 text-center text-white\">Pricing</a>\n    </div>\n </footer> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>header works!</p>\n<div class=\"fixed-top container\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark border\">\n        <a class=\"navbar-brand\"\n           href=\"#\">My Blog</a>\n        <button class=\"navbar-toggler\"\n                type=\"button\"\n                data-toggle=\"collapse\"\n                data-target=\"#top-navbar-menus\"\n                aria-controls=\"top-navbar-menus\"\n                aria-expanded=\"false\"\n                aria-label=\"Toggle navigation\"\n                *ngIf=\"menuItems\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\"\n             id=\"top-navbar-menus\"\n             *ngIf=\"menuItems\">\n            <ul class=\"navbar-nav justify-content-around w-100\">\n                <li class=\"nav-item dropdown main-navigation\"\n                    *ngFor=\"let menu of menuItems\">\n                    <!-- Top level menu-->\n                    <a class=\"nav-link dropdown-toggle text-white\"\n                       href=\"#\"\n                       aria-haspopup=\"true\"\n                       aria-expanded=\"false\"\n                       *ngIf=\"!menu?.subMenu\"\n                       [routerLink]=\"menu.routerLink\">{{menu.text}}</a>\n\n                    <!-- When menu has sub menus-->\n                    <span class=\"nav-link dropdown-toggle text-white nav-link-dropdown-toggle top-level-navlink\"\n                          *ngIf=\"menu?.subMenu\"\n                          aria-haspopup=\"true\"\n                          aria-expanded=\"false\">{{menu.text}}</span>\n                    <div class=\"dropdown-menu mt-0\"\n                         aria-labelledby=\"dropdown09\">\n                        <a class=\"dropdown-item\"\n                           href=\"#\"\n                           *ngFor=\"let subMenu of menu.subMenu text-white\"\n                           [routerLink]=\"subMenu.routerLink\">{{subMenu.text}}</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n    <app-header></app-header>\n\n    <div class=\"content\"></div>\n\n    <app-footer></app-footer>\n\n</div>\n\n<toaster-container></toaster-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-detail/posts-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-detail/posts-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-content-separator>\n    <!-- main content-->\n    <div class=\"card main-content\">\n        <div class=\"card-header bg-white\">\n            <button id=\"back\"\n                    class=\"btn btn-sm btn-secondary mr-1\"\n                    (click)=\"showHomePage()\">\n                <em class=\"fa fa-arrow-left\"></em>\n            </button>\n            <strong>Post</strong>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"title\"><strong>{{post?.title}}</strong></div>\n            <div id=\"body\"\n                 [innerHtml]=\"post?.body\"></div>\n        </div>\n\n        <!-- Loader for Post REST call-->\n        <app-spinner [showLoader]=\"!!loaderService.loaders[loaderNamesEnum.service1]\"></app-spinner>\n\n    </div>\n    <!-- Context - Author Details-->\n    <div class=\"card context\">\n        <div class=\"card-body\"\n             *ngIf=\"user\">\n            <div>\n                <span class=\"fa fa-user mr-3\"></span>\n                <strong class=\"mr-1\"\n                        id=\"name\">{{user.name}}</strong>\n                <span class=\"text-muted\"\n                      id=\"username\">@{{user.username}}</span>\n            </div>\n            <div>\n                <em class=\"fa fa-link mr-3\"></em>\n                <a href=\"#\"\n                   id=\"website\">{{user.website}}</a>\n            </div>\n        </div>\n\n        <!-- Loader for User REST call-->\n        <app-spinner\n                     [showLoader]=\"loaderService.loaders[loaderNamesEnum.service1] || loaderService.loaders[loaderNamesEnum.service2]\">\n        </app-spinner>\n\n    </div>\n</app-content-separator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-content-separator>\n    <!-- Main Content-->\n    <!-- Infinite scroll Refer : https://github.com/orizens/ngx-infinite-scroll-->\n    <div class=\"main-content\"\n         infinite-scroll\n         [infiniteScrollDistance]=\"2\"\n         (scrolled)=\"onScrollDown()\">\n\n        <div class=\"card posts-article-wrapper\"\n             (click)=\"showDetails(post)\"\n             *ngFor=\"let post of posts\">\n            <article>\n                <div>\n                    <strong>{{post.title}}</strong>\n                </div>\n                <div>\n                    <small><u class=\"text-danger\">more...</u></small>\n                </div>\n            </article>\n        </div>\n        <app-spinner [showLoader]=\"!!loaderService.loaders[loaderNamesEnum.service1]\"></app-spinner>\n    </div>\n    <!--Context Area. Dummy Links-->\n    <div class=\"context\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"posts-context\">\n                    <div>\n                        <strong>Categories (Dummy Links) </strong>\n                    </div>\n                    <div class=\"pl-3 mt-3\">\n                        <dd> <a href=\"#\">Java (2)</a></dd>\n                        <dd> <a href=\"#\">Angular (10)</a></dd>\n                        <dd> <a href=\"#\">Spring (8)</a></dd>\n                        <dd> <a href=\"#\">Ajax (6)</a></dd>\n                        <dd> <a href=\"#\">CI (1)</a></dd>\n                        <dd> <a href=\"#\">Webpack (1)</a></dd>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</app-content-separator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/content-separator/content-separator.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/content-separator/content-separator.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-8 mt-3\">\n        <!--Angular Transclusion : Show contents from the div with class 'main-content'-->\n        <ng-content select=\"div.main-content\"></ng-content>\n    </div>\n    <div class=\"col-md-4 mt-3\">\n        <!--Angular Transclusion : Show contents from the div with class 'context'-->\n        <ng-content select=\"div.context\"></ng-content>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Spink Kit spinner-->\n<!-- Refer : https://github.com/tobiasahlin/SpinKit#circle-->\n<div class=\"sk-circle-fade ml-auto mr-auto mt-3 mb-3\"\n     *ngIf=\"showLoader\">\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n    <div class=\"sk-circle-fade-dot\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");




/**
 * App Routes
 */
const routes = [
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            // Redirect to home page when base url is called
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            // Lazy load posts module
            { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | posts-posts-module */ "posts-posts-module").then(__webpack_require__.bind(null, /*! ./posts/posts.module */ "./src/app/posts/posts.module.ts")).then(mod => mod.PostsModule) },
            // Wildcard check. When url does not match anything, go to home page
            { path: '**', redirectTo: 'home' }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, 
            // Using hash location strategy
            { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'WriteUps';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_posts_detail_posts_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/posts-detail/posts-detail.component */ "./src/app/posts/posts-detail/posts-detail.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"],
            _posts_posts_detail_posts_detail_component__WEBPACK_IMPORTED_MODULE_11__["PostsDetailComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        providers: []
    })
], AppModule);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/menu.service */ "./src/app/layout/service/menu.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.menuItems = [];
    }
    ngOnInit() {
        this.menuItems = this.menuService.getMenus();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");








let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterModule"].forChild()
        ],
        exports: [
            _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/service/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/service/menu-items.ts ***!
  \**********************************************/
/*! exports provided: menuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// data for top navbar links
const menuItems = [
    {
        text: 'Services',
        subMenu: [
            { text: 'Package', routerLink: 'services/package' },
            { text: 'Delivery', routerLink: 'services/delivery' }, { text: 'Express', routerLink: 'services/express' }
        ]
    },
    {
        text: 'Invester Relations',
        subMenu: [
            { text: 'Q-Results', routerLink: 'investers/q-results' },
            { text: 'YoY', routerLink: 'investers/yoy' }, { text: 'News', routerLink: 'investers/news' }
        ]
    },
    {
        text: 'Category',
        subMenu: [
            { text: 'World', routerLink: 'news/world' },
            { text: 'Local', routerLink: 'news/local' }, { text: 'Sports', routerLink: 'news/sports' }
        ]
    },
    {
        text: 'Admin',
        subMenu: [
            { text: 'Settings', routerLink: 'admin/settings', disabled: false },
            { text: 'Security', routerLink: 'admin/security' }, { text: 'Cookies', routerLink: 'cookies' }
        ]
    },
    {
        text: 'About',
        subMenu: [
            { text: 'About Us', routerLink: 'about-us' },
            { text: 'History', routerLink: 'history' }, { text: 'Companies', routerLink: 'companies' }
        ]
    },
    {
        text: 'Contact',
        subMenu: [
            { text: 'Email', routerLink: 'contact/email' },
            { text: 'Chat', routerLink: 'contact/chat' }, { text: 'Feedback', routerLink: 'contact/feedback' }
        ]
    }
];


/***/ }),

/***/ "./src/app/layout/service/menu.service.ts":
/*!************************************************!*\
  !*** ./src/app/layout/service/menu.service.ts ***!
  \************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items */ "./src/app/layout/service/menu-items.ts");



let MenuService = class MenuService {
    constructor() { }
    /**
     * Method to return the navigation links for the top navbar.
     * It can be customized and retrieved from REST if needed. as of now
     * it is from a constant.
     * @returns Array<{@link MenuItem}>
     */
    getMenus() {
        return _menu_items__WEBPACK_IMPORTED_MODULE_2__["menuItems"];
    }
};
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuService);



/***/ }),

/***/ "./src/app/posts/posts-detail/posts-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/posts/posts-detail/posts-detail.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWRldGFpbC9wb3N0cy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/posts/posts-detail/posts-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/posts/posts-detail/posts-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: PostsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsDetailComponent", function() { return PostsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _posts_service_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts-service/posts.service */ "./src/app/posts/posts-service/posts.service.ts");
/* harmony import */ var _users_users_service_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/users-service/users.service */ "./src/app/users/users-service/users.service.ts");
/* harmony import */ var _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../rest/model/rest-options */ "./src/app/rest/model/rest-options.ts");
/* harmony import */ var _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../rest/service/rest-data.service */ "./src/app/rest/service/rest-data.service.ts");
/* harmony import */ var _rest_service_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../rest/service/loader.service */ "./src/app/rest/service/loader.service.ts");









let PostsDetailComponent = class PostsDetailComponent {
    constructor(postsService, usersService, router, route, loaderService) {
        this.postsService = postsService;
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.loaderService = loaderService;
        this.loaderNamesEnum = _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_7__["LoaderNames"];
    }
    ngOnInit() {
        // Listen for postId params changes and retrieve respective Post
        this.routeSubscription$ = this.route.params.subscribe((params) => {
            const postId = +params.postId;
            this.loadPost(postId);
        });
    }
    ngOnDestroy() {
        // Unsubscribe the observer
        if (this.routeSubscription$) {
            this.routeSubscription$.unsubscribe();
        }
    }
    loadPost(postId) {
        // reset variables
        this.post = null;
        this.user = null;
        const options = {
            link: { href: '/posts/{postId}', method: _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_6__["RestOptions"].GET },
            properties: { postId },
            loaderNames: _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_7__["LoaderNames"].service1
        };
        this.postsService.getPostById(options).pipe(
        // get post by id and populate the instance variable
        // once we receive the post, get the author of the post
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((post) => {
            this.post = post;
            const userOption = {
                link: { href: '/users/{userId}', method: _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_6__["RestOptions"].GET },
                properties: { userId: post.userId },
                loaderNames: _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_7__["LoaderNames"].service2
            };
            return this.usersService.getUserById(userOption);
        }), 
        // populate the user variale from the REST respones
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            this.user = user;
            return user;
        }))
            .subscribe();
    }
    // if the user clicks on back button, navigate to Home page
    showHomePage() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
};
PostsDetailComponent.ctorParameters = () => [
    { type: _posts_service_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: _users_users_service_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rest_service_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] }
];
PostsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-detail/posts-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-detail.component.scss */ "./src/app/posts/posts-detail/posts-detail.component.scss")).default]
    })
], PostsDetailComponent);



/***/ }),

/***/ "./src/app/posts/posts-service/posts-service.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/posts/posts-service/posts-service.module.ts ***!
  \*************************************************************/
/*! exports provided: PostsServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsServiceModule", function() { return PostsServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let PostsServiceModule = class PostsServiceModule {
};
PostsServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PostsServiceModule);



/***/ }),

/***/ "./src/app/posts/posts-service/posts.service.ts":
/*!******************************************************!*\
  !*** ./src/app/posts/posts-service/posts.service.ts ***!
  \******************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rest/service/rest-data.service */ "./src/app/rest/service/rest-data.service.ts");
/* harmony import */ var _posts_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-service.module */ "./src/app/posts/posts-service/posts-service.module.ts");




let PostsService = class PostsService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * Method to get all Users
     * @param options  Instance of {@link RestOptions}
     * @returns Observable of Array<{@link Post}>
     */
    getPosts(options) {
        return this.dataService.request(options);
    }
    /**
     * Method to get post by the post id
     * @param options  Instance of {@link RestOptions}
     * @returns Observable of {@link Post}
     */
    getPostById(options) {
        return this.dataService.request(options);
    }
};
// Url Constants for POST Apis
PostsService.POSTS_URL = '/posts';
PostsService.POSTS_BY_ID_URL = '/posts/{postId}';
PostsService.ctorParameters = () => [
    { type: _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_2__["RestDataService"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _posts_service_module__WEBPACK_IMPORTED_MODULE_3__["PostsServiceModule"]
    })
], PostsService);



/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".posts-article-wrapper {\n  border-bottom: 1px solid #e6e6e6;\n  padding: 20px;\n  margin-bottom: 10px;\n}\n\n.posts-article-wrapper:hover {\n  background-color: #f3f3f3;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvRDpcXFdyaXRldXBzXFw0c3QxbnVzLmdpdGh1Yi5pby9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3RzLWFydGljbGUtd3JhcHBlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wb3N0cy1hcnRpY2xlLXdyYXBwZXI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnBvc3RzLWFydGljbGUtd3JhcHBlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucG9zdHMtYXJ0aWNsZS13cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_service_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-service/posts.service */ "./src/app/posts/posts-service/posts.service.ts");
/* harmony import */ var _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest/service/rest-data.service */ "./src/app/rest/service/rest-data.service.ts");
/* harmony import */ var _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest/model/rest-options */ "./src/app/rest/model/rest-options.ts");
/* harmony import */ var _rest_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest/service/loader.service */ "./src/app/rest/service/loader.service.ts");







let PostsComponent = class PostsComponent {
    constructor(postsService, router, route, loaderService) {
        this.postsService = postsService;
        this.router = router;
        this.route = route;
        this.loaderService = loaderService;
        // Page size for the posts array. Will be increased by this value everytime
        // user scrolls down
        this.POSTS_PER_PAGE = 50;
        // Attribute to store all posts from the web service
        this.allPosts = [];
        // Attribute to store the posts which should be shown in the page
        this.posts = [];
        // Property to hold the index of next post which should be added to the
        // posts array if the user scrolls down. Intial value is 0 and when the user
        // scrolls for the first time, then it is reset to 0 + POSTS_PER_PAGE Or size of
        // allPosts array which ever is minimum
        this.nextStart = 0;
        this.loaderNamesEnum = _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_4__["LoaderNames"];
    }
    ngOnInit() {
        this.nextStart = 0;
        const options = {
            link: {
                href: _posts_service_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"].POSTS_URL,
                method: _rest_model_rest_options__WEBPACK_IMPORTED_MODULE_5__["RestOptions"].GET
            },
            loaderNames: _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_4__["LoaderNames"].service1
        };
        // Get all posts and store it in allPosts array
        this.postsService.getPosts(options)
            .subscribe((posts) => {
            this.allPosts = posts;
            // populate posts array with maximum of POSTS_PER_PAGE number of posts
            this.onScrollDown();
        });
    }
    // Click even handler. When the user clicks on a post
    // this method makes a navigation to posts details page
    showDetails(post) {
        this.router.navigate(['posts', post.id], { relativeTo: this.route });
    }
    // Infinite scroll handler. Called whenever user scrolls down
    // to the end of the page.
    onScrollDown() {
        // if the nextStart is less than the size of allPosts array
        // then take the next set of items and populates it into posts array
        if (this.nextStart < this.allPosts.length) {
            const from = this.nextStart;
            // add nextStart with POSTS_PER_PAGE or size of allPosts array which ever is minimum
            this.nextStart = Math.min(this.nextStart + this.POSTS_PER_PAGE, this.allPosts.length);
            this.posts.push(...this.allPosts.slice(from, this.nextStart));
        }
    }
};
PostsComponent.ctorParameters = () => [
    { type: _posts_service_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _rest_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")).default]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/rest/model/rest-options.ts":
/*!********************************************!*\
  !*** ./src/app/rest/model/rest-options.ts ***!
  \********************************************/
/*! exports provided: RestOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestOptions", function() { return RestOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Class to hold the necessary options for making a REST call.
 * @example
 * A typical options for a PUT call would be,
 * const option = {
 *      link : { href : '/posts/{postId}', mehtod : RestOptions.PUT,
 *      properties : { postId : this.post.id},
 *      requestBody : this.updatedPost,
 *      loaderNames : LoaderNames.service1
 * }
 * this.service.request<Post>(opttion).subscribe();
 */
class RestOptions {
}
/**
 * Static constants for HTTP protocol methods
 */
RestOptions.GET = 'GET';
RestOptions.POST = 'POST';
RestOptions.PUT = 'PUT';
RestOptions.DELETE = 'DELETE';


/***/ }),

/***/ "./src/app/rest/service/loader.service.ts":
/*!************************************************!*\
  !*** ./src/app/rest/service/loader.service.ts ***!
  \************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * LoaderService used to maintain the count of REST calls.
 * It has a public attribute {@link LoaderService#loaders} which
 * has the fields with key exactly same as keys of {@link LoaderNames}
 * It is used to show the {@link SpinnerComponent}
 */
let LoaderService = class LoaderService {
    constructor() {
        this.loaders = {
            service1: 0,
            service2: 0
        };
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/rest/service/rest-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/rest/service/rest-data.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderNames, RestDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderNames", function() { return LoaderNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataService", function() { return RestDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader.service */ "./src/app/rest/service/loader.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");








/**
 * LoaderNames - Enum to maintain the names for each loaders.
 * If we need 3 loaders/spinners in a page, then we should create
 * three properties in this enum.
 */
var LoaderNames;
(function (LoaderNames) {
    LoaderNames["service1"] = "service1";
    LoaderNames["service2"] = "service2";
})(LoaderNames || (LoaderNames = {}));
/**
 * RestDataService - All http calls should be fired from this service calls.
 * This is good to maintain loaders, error handling in only one place.
 */
let RestDataService = class RestDataService {
    constructor(http, loaderService, toaster) {
        this.http = http;
        this.loaderService = loaderService;
        this.toaster = toaster;
    }
    /**
     * Generic method exposed to outside to make any REST api calls
     * @param options instance of {@link RestOptions}
     * @returns Observable<T>
     * @example
     * const option = {
     *    link : { href : '/posts',method : RestOptions.GET},
     * };
     * this.service.request<Post>(option).subscribe();
     */
    request(options) {
        this.validateInput(options);
        // concatenate the incoming url with the base url
        options.link.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + this.updateUrlProperties(options.link.href, options.properties);
        return this.fireRequest(options);
    }
    /**
     * Method to validate whether the options provided has a valid link
     * @param options instance of {@link RestOptions}
     * @throws Error when the options do not have link or href inside link
     */
    validateInput(options) {
        if (!options || !options.link || !options.link.href) {
            throw new Error('Link is NULL');
        }
    }
    /**
     * Method to update the url with properties
     * @param url - url string with placeholders eg. http://xxx.com/abc/{id}?name={name}
     * @param properties - key value pair for the placeholders eg. { id : 2, name :'test'}
     * @returns udated url. eg. http://xxx.com/abc/2?name=test
     */
    updateUrlProperties(url, properties) {
        // get url without query params
        let splitUrl = url.split('?')[0];
        // replace the placeholders
        splitUrl = this.replace(splitUrl, properties);
        // get query params part
        let queryParams = url.split('?')[1] || '';
        // replace the placeholders
        queryParams = this.replace(queryParams, properties).replace(/[^=&]+=(&|$)/g, '').replace(/&$/, '');
        // combine to form final url
        if (!!queryParams) {
            return `${splitUrl}?${queryParams}`;
        }
        return splitUrl;
    }
    /**
     * RegEx to replace placeholders
     * @param template - string with placeholders
     * @param properties  - key value pair to be replaced in template
     * Place holder should be wrapped with {}. eg. http://some.com/posts/{postId}
     * Here postId will be place holder. Then this method looks for the postId attribute
     * in properties object. If it is present, it replaces the place holder witih the
     * value from properties object using the javsacript replace with RegEx
     */
    replace(template, properties) {
        return template.replace(/{[^{}]+}/g, key => {
            return properties[key.replace(/[{}]+/g, '')] == null ? '' : properties[key.replace(/[{}]+/g, '')];
        });
    }
    /**
     * Method that fires HTTP call
     * @param options instance of {@link RestOptions}
     */
    fireRequest(options) {
        // If the Rest options has a loader name, increment the loader
        if (options.loaderNames) {
            this.loaderService.loaders[options.loaderNames]++;
        }
        // Fire Http request using Angular's HttpClient request method
        return this.http.request(options.link.method, options.link.href, {
            body: options.requestBody
        }).pipe(
        // If there are any error, toast the error using angular2-toaster
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.toaster.pop('error', 'Http Error', error ? error.message : '');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }), 
        // loader should be decremented in both success/error scenario. So this code goes into finalize method
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            if (options.loaderNames) {
                this.loaderService.loaders[options.loaderNames]--;
            }
        }));
    }
};
RestDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }
];
RestDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestDataService);



/***/ }),

/***/ "./src/app/shared/components/content-separator/content-separator.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/content-separator/content-separator.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRlbnQtc2VwYXJhdG9yL2NvbnRlbnQtc2VwYXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/content-separator/content-separator.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/content-separator/content-separator.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContentSeparatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSeparatorComponent", function() { return ContentSeparatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Content Separator - A Component to separate the main page content
 * into 'Main Content' & 'Context' and show them using bootstrap grid.
 * It uses Angular's transclution concept.
 * @example
 *  Anything that should be displayed in main area should be wrapped with a div
 * elment witih class 'main-content' & anything that should be displayed in
 * context area should be wrapped with a div element with class 'context'.
 * <app-content-separator>
 *      <div class="main-content"> show details in main area</div>
 *      <div class="context"> show details in context area </div>
 * </app-content-separator>
 */
let ContentSeparatorComponent = class ContentSeparatorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentSeparatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content-separator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-separator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/content-separator/content-separator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-separator.component.scss */ "./src/app/shared/components/content-separator/content-separator.component.scss")).default]
    })
], ContentSeparatorComponent);



/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-circle-fade-dot {\n  width: 50%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9EOlxcV3JpdGV1cHNcXDRzdDFudXMuZ2l0aHViLmlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNwaW5uZXJcXHNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stY2lyY2xlLWZhZGUtZG90IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufSIsIi5zay1jaXJjbGUtZmFkZS1kb3Qge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Spinner component - To show the spinner whenever an REST api call is made
 * A counter is maintained for each servicec call in {@link loaderService}.
 * This counter will be used to show/hide the spinner
 * @example <app-spinner [showLoader]="!!loaderService.service1"></app-spinner>
 */
let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpinnerComponent.prototype, "showLoader", void 0);
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/components/spinner/spinner.component.scss")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_content_separator_content_separator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content-separator/content-separator.component */ "./src/app/shared/components/content-separator/content-separator.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_content_separator_content_separator_component__WEBPACK_IMPORTED_MODULE_3__["ContentSeparatorComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            // Modules
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // Components
            _components_content_separator_content_separator_component__WEBPACK_IMPORTED_MODULE_3__["ContentSeparatorComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/users/users-service/users-service.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/users/users-service/users-service.module.ts ***!
  \*************************************************************/
/*! exports provided: UsersServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersServiceModule", function() { return UsersServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let UsersServiceModule = class UsersServiceModule {
};
UsersServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], UsersServiceModule);



/***/ }),

/***/ "./src/app/users/users-service/users.service.ts":
/*!******************************************************!*\
  !*** ./src/app/users/users-service/users.service.ts ***!
  \******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-service.module */ "./src/app/users/users-service/users-service.module.ts");
/* harmony import */ var _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/service/rest-data.service */ "./src/app/rest/service/rest-data.service.ts");




let UsersService = class UsersService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * Method to get user by the user id
     * @param options  Instance of {@link RestOptions}
     * @returns Observable of {@link User}
     */
    getUserById(options) {
        return this.dataService.request(options);
    }
};
UsersService.ctorParameters = () => [
    { type: _rest_service_rest_data_service__WEBPACK_IMPORTED_MODULE_3__["RestDataService"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _users_service_module__WEBPACK_IMPORTED_MODULE_2__["UsersServiceModule"]
    })
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseUrl: 'https://jsonplaceholder.typicode.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Writeups\4st1nus.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map