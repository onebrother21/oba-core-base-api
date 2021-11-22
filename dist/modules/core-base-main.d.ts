import { OBACoreBaseVars } from "./vars-main";
import { OBACoreBaseErrorFactory } from "./error-factory-main";
import { OBACoreBaseEmitter } from "./emitter-main";
import { OBACoreBaseType, OBACoreBaseConfig } from "./core-base-types";
export interface OBACoreBaseApi<Ev> extends OBACoreBaseType<Ev> {
}
export declare class OBACoreBaseApi<Ev> {
    constructor(config: OBACoreBaseConfig<Ev>);
    get config(): Partial<import("./core-base-types").OBACoreBaseConfigType<Ev>>;
    get c(): Partial<import("./core-base-types").OBACoreBaseConfigType<Ev>>;
    get vars(): OBACoreBaseVars;
    get v(): OBACoreBaseVars;
    get errors(): OBACoreBaseErrorFactory;
    get e(): OBACoreBaseErrorFactory;
    get events(): OBACoreBaseEmitter<Ev>;
    get ev(): OBACoreBaseEmitter<Ev>;
    init: () => void;
}
export default OBACoreBaseApi;
