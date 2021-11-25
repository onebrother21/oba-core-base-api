"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBACoreBaseApi = void 0;
const oba_common_1 = require("@onebro/oba-common");
const error_factory_main_1 = require("./error-factory-main");
class OBACoreBaseApi extends oba_common_1.Component {
    constructor() {
        super(...arguments);
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            for (const k in this.config) {
                const c = this.config[k];
                switch (k) {
                    case "e":
                    case "errors":
                        this.errors = new error_factory_main_1.OBACoreBaseErrorFactory(c, this.ctrl);
                        break;
                    case "vars":
                        this.vars = c;
                        break;
                    default: break;
                }
            }
            yield ((_a = this.e) === null || _a === void 0 ? void 0 : _a.init());
        });
    }
    get e() { return this.errors; }
    get v() { return this.vars; }
    set v(vars) { this.vars = vars; }
}
exports.OBACoreBaseApi = OBACoreBaseApi;
exports.default = OBACoreBaseApi;
//# sourceMappingURL=core-base-main.js.map