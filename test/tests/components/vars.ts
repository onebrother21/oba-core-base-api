import {J} from "../../utils";
import {
  OBACoreBaseApi,
  OBACoreBaseConfig,
  coreBaseConfig
} from "../../../src";

export const obaCoreBaseVarsInitTests = () => J.utils.desc("AM Vars Init",() => {
  let core:OBACoreBaseApi<null>,c:OBACoreBaseConfig<null>;
  it("init",async () => {
    const {vars} = coreBaseConfig("OBA_CORE_BASE");
    c = {vars};
    core = new OBACoreBaseApi(c);
    core.init();
    J.is(core);
    J.true(core.vars);
  });
  it("has core.vars",async () => {
    J.is(core.vars);
    console.log(core.vars);
  });
});