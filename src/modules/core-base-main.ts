import {Component} from "@onebro/oba-common";
import {OBACoreBaseErrorFactory} from "./error-factory-main";
import {OBACoreBaseType,OBACoreBaseConfig,OBACoreBaseVars} from "./core-base-types";

export interface OBACoreBaseApi<Ev> extends Component<OBACoreBaseConfig,Ev>,OBACoreBaseType<Ev> {}
export class OBACoreBaseApi<Ev> extends Component<OBACoreBaseConfig,Ev> {
  get e(){return this.errors;}
  get v(){return this.vars;}
  set v(vars:OBACoreBaseVars){this.vars = vars;}
  init = async () => {
    const {ctrl,config:{e,errors,vars}} = this;
    e||errors?this.errors = new OBACoreBaseErrorFactory(e||errors,ctrl):null;
    vars?this.vars = vars:null;
    await this.e?.init();
  };
}
export default OBACoreBaseApi;