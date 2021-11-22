import {OBACoreBaseVars} from "./vars-main";
import {OBACoreBaseErrorFactory} from "./error-factory-main";
import {OBACoreBaseEmitter} from "./emitter-main";
import {OBACoreBaseType,OBACoreBaseConfig} from "./core-base-types";

export interface OBACoreBaseApi<Ev> extends OBACoreBaseType<Ev> {}
export class OBACoreBaseApi<Ev> {
  constructor(public config:OBACoreBaseConfig<Ev>){}
  init = () => {
    for(const k in this.config){
      const c = this.config[k as keyof OBACoreBaseConfig<Ev>];
      switch(k){
        case "vars":this.vars = new OBACoreBaseVars(c as any);break;
        case "e":
        case "errors":this.e = new OBACoreBaseErrorFactory(c as any);break;
        case "events":this.events = new OBACoreBaseEmitter<Ev>(c as any);break;
        default:break;
      }
    }
  };
}
export default OBACoreBaseApi;