import config from "config";
import OBA,{ DeepPartial } from "@onebro/oba-common";
import { OBACoreBaseConfig } from "./core-base-types";

const setDefaultConfigWithEnvironment = (prefix:string):OBACoreBaseConfig => {
  const env = process.env.NODE_ENV.toLocaleUpperCase();
  const name = OBA.envvar(prefix,"_NAME");
  const mode = OBA.envvar(prefix,"_MODE");
  const vars = {name,env,mode,envvars:process.env};
  const initial:OBACoreBaseConfig = config.get("appconfig");
  const atRuntime:DeepPartial<OBACoreBaseConfig> = {vars};
  const coreBaseConfig = OBA.merge(initial,atRuntime) as OBACoreBaseConfig;
  return coreBaseConfig;
};
export {setDefaultConfigWithEnvironment as coreBaseConfig};