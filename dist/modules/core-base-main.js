"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBACoreBaseApi = void 0;
const vars_main_1 = require("./vars-main");
const error_factory_main_1 = require("./error-factory-main");
const emitter_main_1 = require("./emitter-main");
class OBACoreBaseApi {
    constructor(config) {
        this.init = () => {
            for (const k in this.c) {
                const c = this.c[k];
                switch (k) {
                    case "e":
                    case "errors":
                        this._errors = new error_factory_main_1.OBACoreBaseErrorFactory(c);
                        break;
                    case "events":
                        this._events = new emitter_main_1.OBACoreBaseEmitter(c);
                        break;
                    case "vars":
                        this._vars = new vars_main_1.OBACoreBaseVars(c);
                        break;
                    default: break;
                }
            }
        };
        this._config = config;
    }
    get config() { return this._config; }
    get c() { return this.config; }
    get vars() { return this._vars; }
    get v() { return this.vars; }
    get errors() { return this._errors; }
    get e() { return this.errors; }
    get events() { return this._events; }
    get ev() { return this.events; }
}
exports.OBACoreBaseApi = OBACoreBaseApi;
exports.default = OBACoreBaseApi;
//# sourceMappingURL=core-base-main.js.map