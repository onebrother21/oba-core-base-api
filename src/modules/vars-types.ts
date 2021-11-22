import { Enum,Strings } from "@onebro/oba-common";

export type OBACoreBaseVarsObj =
Enum<string,"name"|"env"|"version","id"|"tkn"|"mode"> &
Enum<boolean,undefined,"verbose"> &
{envvars:Strings;};
export type OBACoreBaseVarsConfig = OBACoreBaseVarsObj;
export type OBACoreBaseVarsType = OBACoreBaseVarsConfig;