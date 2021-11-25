import { OBACoreBaseErrorFactory } from "./error-factory-main";
import { OBACoreBaseErrorFactoryConfig } from "./error-factory-types";
import { Enum, Strings } from "@onebro/oba-common";
export declare type OBACoreBaseVars = Enum<string, "name" | "env" | "version", "id" | "tkn" | "mode"> & Enum<boolean, undefined, "verbose"> & {
    envvars: Strings;
};
export declare type OBACoreBaseConfigType = {
    vars: OBACoreBaseVars;
    e: OBACoreBaseErrorFactoryConfig;
    errors: OBACoreBaseErrorFactoryConfig;
};
export declare type OBACoreBaseConfig = Partial<OBACoreBaseConfigType>;
export declare type OBACoreBaseType<Ev> = {
    config: OBACoreBaseConfig;
    vars: OBACoreBaseVars;
    e: OBACoreBaseErrorFactory<Ev>;
    errors: OBACoreBaseErrorFactory<Ev>;
};
