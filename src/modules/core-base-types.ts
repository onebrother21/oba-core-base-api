import {OBACoreBaseVars} from "./vars-main";
import {OBACoreBaseErrorFactory} from "./error-factory-main";
import {OBACoreBaseEmitter} from "./emitter-main";

import {OBACoreBaseVarsConfig} from "./vars-types";
import {OBACoreBaseErrorFactoryConfig} from "./error-factory-types";
import {OBACoreBaseEmitterConfig} from "./emitter-types";

export type OBACoreBaseConfigType<Ev> = {
  vars:OBACoreBaseVarsConfig;
  events:OBACoreBaseEmitterConfig<Ev>;
  e:OBACoreBaseErrorFactoryConfig;
  errors:OBACoreBaseErrorFactoryConfig;
};
export type OBACoreBaseConfig<Ev> = Partial<OBACoreBaseConfigType<Ev>>;
export type OBACoreBaseObj<Ev> = {
  config:OBACoreBaseConfig<Ev>;
  vars:OBACoreBaseVars;
  events:OBACoreBaseEmitter<Ev>;
  e:OBACoreBaseErrorFactory;
  errors:OBACoreBaseErrorFactory;
};
export type OBACoreBaseType<Ev> = Partial<OBACoreBaseObj<Ev>>;