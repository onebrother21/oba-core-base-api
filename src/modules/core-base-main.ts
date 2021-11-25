import {Component} from "@onebro/oba-common";
import {OBACoreBaseErrorFactory} from "./error-factory-main";
import {OBACoreBaseType,OBACoreBaseConfig,OBACoreBaseVars} from "./core-base-types";

export interface OBACoreBaseApi<Ev> extends Component<OBACoreBaseConfig,Ev>,OBACoreBaseType<Ev> {}
export class OBACoreBaseApi<Ev> extends Component<OBACoreBaseConfig,Ev> {
  get e(){return this.errors;}
  get v(){return this.vars;}
  set v(vars:OBACoreBaseVars){this.vars = vars;}
  init = async () => {
    for(const k in this.config){
      const c = this.config[k as keyof OBACoreBaseConfig];
      switch(k){
        case "e":
        case "errors":this.errors = new OBACoreBaseErrorFactory(c as any,this.ctrl); break;
        case "vars":this.vars = c as any; break;
        default:break;
      }
    }
    await this.e?.init();
  };
}
export default OBACoreBaseApi;