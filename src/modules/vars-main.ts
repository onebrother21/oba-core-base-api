import { OBACoreBaseVarsType,OBACoreBaseVarsConfig } from "./vars-types";

export interface OBACoreBaseVars extends OBACoreBaseVarsType {}
export class OBACoreBaseVars {
  set(vars:OBACoreBaseVarsConfig){Object.assign(this,vars);}
  constructor(config:OBACoreBaseVarsConfig){this.set(config);}
}
export default OBACoreBaseVars;