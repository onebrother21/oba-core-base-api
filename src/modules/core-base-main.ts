import {OBACoreBaseVars} from "./vars-main";
import {OBACoreBaseErrorFactory} from "./error-factory-main";
import {OBACoreBaseEmitter} from "./emitter-main";
import {OBACoreBaseType,OBACoreBaseConfig} from "./core-base-types";

export interface OBACoreBaseApi<Ev> extends OBACoreBaseType<Ev> {}
export class OBACoreBaseApi<Ev> {
  constructor(config:OBACoreBaseConfig<Ev>){this._config = config;}
  get config(){return this._config;}
  get c(){return this.config;}
  get vars():OBACoreBaseVars {return this._vars;}
  get v(){return this.vars;}
  get errors():OBACoreBaseErrorFactory{return this._errors;}
  get e(){return this.errors;}
  get events():OBACoreBaseEmitter<Ev>{return this._events;}
  get ev(){return this.events;}
  init = () => {
    for(const k in this.c){
      const c = this.c[k as keyof OBACoreBaseConfig<Ev>];
      switch(k){
        case "e":
        case "errors":this._errors = new OBACoreBaseErrorFactory(c as any);break;
        case "events":this._events  = new OBACoreBaseEmitter<Ev>(c as any);break;
        case "vars":this._vars = new OBACoreBaseVars(c as any);break;
        default:break;
      }
    }
  };
}
export default OBACoreBaseApi;