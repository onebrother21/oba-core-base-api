import {J} from "../../utils";
import {
  OBACoreBaseApi,
  OBACoreBaseConfig,
  coreBaseConfig
} from "../../../src";
import OBA,{Enum} from "@onebro/oba-common";

type OBACoreBaseEvents = Enum<boolean,"init"|"shutdown"> & {
  config:OBACoreBaseConfig<OBACoreBaseEvents>;
  test:number;
};
export const obaCoreBaseEmitterInitTests = () => J.utils.desc("AM Emitter Init",() => {
  let core:OBACoreBaseApi<OBACoreBaseEvents>,c:OBACoreBaseConfig<OBACoreBaseEvents>;
  it("init",async () => {
    const {vars} = coreBaseConfig("OBA_CORE_BASE");
    c = {vars};
    core = new OBACoreBaseApi(c);
    core.config.events = {
      "init":() => OBA.ok(core.vars.name," Running @...",new Date()),
      "config":b => console.log({config:b}),
      "test":b => console.log({test:b}),
      "shutdown":() => console.log("shutdown"),
    };
    core.init();
    J.is(core);
    J.true(core.events);
  });
  it("register listener",async () => {J.includes(core.events.listeners,"test");});
  it("send known event",async () => {
    core.events.emit("init",true);
    core.events.emit("config",c);
    core.events.emit("test",13);
    J.is(core.events.values["test"],13);
  });
  it("get listeners",async () => {
    J.arr(core.events.listeners);
    J.gt(core.events.listeners.length,0);
    core.events.print("listeners");});
  it("get history",async () => {
    core.events.emit("test",13);
    J.arr(core.events.history);
    J.gt(core.events.history.length,0);
    core.events.print("history");});
  it("get values",async () => {
    J.true(core.events.values);
    J.gt(Object.keys(core.events.values).length,0);
    core.events.print("values");});
});