import {OBACoreBaseErrorFactory} from "./error-factory-main";
import {OBACoreBaseErrorFactoryConfig} from "./error-factory-types";

import { Enum,Strings } from "@onebro/oba-common";

export type OBACoreBaseVars =
Enum<string,"name"|"env"|"version","id"|"tkn"|"mode"> &
Enum<boolean,undefined,"verbose"> &
{envvars:Strings;};
export type OBACoreBaseConfig = Partial<{
  vars:OBACoreBaseVars;
  e:OBACoreBaseErrorFactoryConfig;
  errors:OBACoreBaseErrorFactoryConfig;
}>;
export type OBACoreBaseType<Ev> = {
  config:OBACoreBaseConfig;
  vars:OBACoreBaseVars;
  e:OBACoreBaseErrorFactory<Ev>;
  errors:OBACoreBaseErrorFactory<Ev>;
};