import { OBACoreBaseVarsType, OBACoreBaseVarsConfig } from "./vars-types";
export interface OBACoreBaseVars extends OBACoreBaseVarsType {
}
export declare class OBACoreBaseVars {
    set(vars: OBACoreBaseVarsConfig): void;
    constructor(config: OBACoreBaseVarsConfig);
}
export default OBACoreBaseVars;
