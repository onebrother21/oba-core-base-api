import { OBACoreBaseType, OBACoreBaseConfig } from "./core-base-types";
export interface OBACoreBaseApi<Ev> extends OBACoreBaseType<Ev> {
}
export declare class OBACoreBaseApi<Ev> {
    config: OBACoreBaseConfig<Ev>;
    constructor(config: OBACoreBaseConfig<Ev>);
    init: () => void;
}
export default OBACoreBaseApi;
