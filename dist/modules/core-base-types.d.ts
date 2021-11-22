import { OBACoreBaseVars } from "./vars-main";
import { OBACoreBaseErrorFactory } from "./error-factory-main";
import { OBACoreBaseEmitter } from "./emitter-main";
import { OBACoreBaseVarsConfig } from "./vars-types";
import { OBACoreBaseErrorFactoryConfig } from "./error-factory-types";
import { OBACoreBaseEmitterConfig } from "./emitter-types";
export declare type OBACoreBaseConfigType<Ev> = {
    vars: OBACoreBaseVarsConfig;
    events: OBACoreBaseEmitterConfig<Ev>;
    e: OBACoreBaseErrorFactoryConfig;
    errors: OBACoreBaseErrorFactoryConfig;
};
export declare type OBACoreBaseConfig<Ev> = Partial<OBACoreBaseConfigType<Ev>>;
export declare type OBACoreBaseType<Ev> = {
    config: OBACoreBaseConfig<Ev>;
    vars: OBACoreBaseVars;
    events: OBACoreBaseEmitter<Ev>;
    e: OBACoreBaseErrorFactory;
    errors: OBACoreBaseErrorFactory;
    _config: OBACoreBaseConfig<Ev>;
    _vars: OBACoreBaseVars;
    _events: OBACoreBaseEmitter<Ev>;
    _errors: OBACoreBaseErrorFactory;
};
