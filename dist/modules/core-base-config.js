"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreBaseConfig = void 0;
const config_1 = __importDefault(require("config"));
const oba_common_1 = __importDefault(require("@onebro/oba-common"));
const setDefaultConfigWithEnvironment = (prefix) => {
    const env = process.env.NODE_ENV.toLocaleUpperCase();
    const name = oba_common_1.default.evar(prefix, "_NAME");
    const mode = oba_common_1.default.evar(prefix, "_MODE");
    const version = oba_common_1.default.version();
    const vars = { name, env, mode, version, envvars: process.env };
    const initial = config_1.default.get("appconfig");
    const atRuntime = { vars };
    const coreBaseConfig = oba_common_1.default.mergeObj(initial, atRuntime);
    return coreBaseConfig;
};
exports.coreBaseConfig = setDefaultConfigWithEnvironment;
//# sourceMappingURL=core-base-config.js.map