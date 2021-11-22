"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBACoreBaseApi = void 0;
const vars_main_1 = require("./vars-main");
const error_factory_main_1 = require("./error-factory-main");
const emitter_main_1 = require("./emitter-main");
class OBACoreBaseApi {
    constructor(config) {
        this.config = config;
        this.init = () => {
            for (const k in this.config) {
                const c = this.config[k];
                switch (k) {
                    case "vars":
                        this.vars = new vars_main_1.OBACoreBaseVars(c);
                        break;
                    case "e":
                    case "errors":
                        this.e = new error_factory_main_1.OBACoreBaseErrorFactory(c);
                        break;
                    case "events":
                        this.events = new emitter_main_1.OBACoreBaseEmitter(c);
                        break;
                    default: break;
                }
            }
        };
    }
}
exports.OBACoreBaseApi = OBACoreBaseApi;
exports.default = OBACoreBaseApi;
//# sourceMappingURL=core-base-main.js.map