(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapa-mapa-module"],{

/***/ "./src/app/pages/mapa/mapa.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.module.ts ***!
  \*******************************************/
/*! exports provided: MapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa.page */ "./src/app/pages/mapa/mapa.page.ts");







var routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]
    }
];
var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
        })
    ], MapaPageModule);
    return MapaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div id='map'></div>\n    <ion-back-button defaultHref=\"/tabs/tab2\" text=\"\" class=\"boton-regresar\" icon=\"close-circle\"></ion-back-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100% !important;\n  height: 100% !important;\n  background-color: #f6f6f4; }\n\n.boton-regresar {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  font-size: 23px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmFyY29kZVNjYW5uZXIvc3JjL2FwcC9wYWdlcy9tYXBhL21hcGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcGEvbWFwYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjQ7XG59XG5cbi5ib3Rvbi1yZWdyZXNhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.ts ***!
  \*****************************************/
/*! exports provided: MapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPage", function() { return MapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MapaPage = /** @class */ (function () {
    function MapaPage(route) {
        this.route = route;
    }
    MapaPage.prototype.ngOnInit = function () {
        var geo = this.route.snapshot.paramMap.get('geo');
        console.log(geo);
        geo = geo.substr(4);
        geo = geo.split(',');
        this.lat = Number(geo[0]);
        this.lng = Number(geo[1]);
        console.log(this.lat, this.lng);
    };
    MapaPage.prototype.ngAfterViewInit = function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamFjZXRvODcxMTIwIiwiYSI6ImNrYno4cjdiMTA3M2ozMG9lcm1iNnNsOGIifQ.UpXAUZ3icva55_IXhRMcCA';
        var map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/light-v10',
            center: [this.lng, this.lat],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
        });
        var marker = new mapboxgl.Marker()
            .setLngLat([this.lng, this.lat])
            .addTo(map);
        // tslint:disable-next-line: only-arrow-functions
        map.on('load', function () {
            map.resize();
        });
        map.addControl(new mapboxgl.NavigationControl());
    };
    MapaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa',
            template: __webpack_require__(/*! ./mapa.page.html */ "./src/app/pages/mapa/mapa.page.html"),
            styles: [__webpack_require__(/*! ./mapa.page.scss */ "./src/app/pages/mapa/mapa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MapaPage);
    return MapaPage;
}());



/***/ })

}]);
//# sourceMappingURL=mapa-mapa-module.js.map