import { OBACoreBaseConfig } from "./core-base-types";
declare const setDefaultConfigWithEnvironment: <Ev>(prefix: string) => Partial<import("./core-base-types").OBACoreBaseConfigType<Ev>>;
export { setDefaultConfigWithEnvironment as coreBaseConfig };
