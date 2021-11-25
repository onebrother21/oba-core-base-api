import { Component } from "@onebro/oba-common";
import { OBACoreBaseErrorFactory } from "./error-factory-main";
import { OBACoreBaseType, OBACoreBaseConfig, OBACoreBaseVars } from "./core-base-types";
export interface OBACoreBaseApi<Ev> extends Component<OBACoreBaseConfig, Ev>, OBACoreBaseType<Ev> {
}
export declare class OBACoreBaseApi<Ev> extends Component<OBACoreBaseConfig, Ev> {
    get e(): OBACoreBaseErrorFactory<Ev>;
    get v(): OBACoreBaseVars;
    set v(vars: OBACoreBaseVars);
    init: () => Promise<void>;
}
export default OBACoreBaseApi;
