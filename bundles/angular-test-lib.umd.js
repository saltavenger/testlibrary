(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-test-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-test-lib'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTestLibService = /** @class */ (function () {
        function AngularTestLibService() {
        }
        AngularTestLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularTestLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularTestLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularTestLibService_Factory() { return new AngularTestLibService(); }, token: AngularTestLibService, providedIn: "root" });
        return AngularTestLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTestLibComponent = /** @class */ (function () {
        function AngularTestLibComponent() {
        }
        /**
         * @return {?}
         */
        AngularTestLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        AngularTestLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-angular-test-lib',
                        template: "\n    <p>\n      angular-test-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AngularTestLibComponent.ctorParameters = function () { return []; };
        return AngularTestLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTestLibModule = /** @class */ (function () {
        function AngularTestLibModule() {
        }
        AngularTestLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AngularTestLibComponent],
                        imports: [],
                        exports: [AngularTestLibComponent]
                    },] }
        ];
        return AngularTestLibModule;
    }());

    exports.AngularTestLibComponent = AngularTestLibComponent;
    exports.AngularTestLibModule = AngularTestLibModule;
    exports.AngularTestLibService = AngularTestLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-test-lib.umd.js.map
