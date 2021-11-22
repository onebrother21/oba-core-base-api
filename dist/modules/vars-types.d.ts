import { Enum, Strings } from "@onebro/oba-common";
export declare type OBACoreBaseVarsObj = Enum<string, "name" | "env" | "version", "id" | "tkn" | "mode"> & Enum<boolean, undefined, "verbose"> & {
    envvars: Strings;
};
export declare type OBACoreBaseVarsConfig = OBACoreBaseVarsObj;
export declare type OBACoreBaseVarsType = OBACoreBaseVarsConfig;
