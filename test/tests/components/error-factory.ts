import {J} from "../../utils";
import {
  OBACoreBaseApi,
  OBACoreBaseConfig,
  coreBaseConfig
} from "../../../src";
import OB from "@onebro/oba-common";

export const obaCoreBaseErrorFactoryInitTests = () => J.utils.desc("AM Errors Init",() => {
  let core:OBACoreBaseApi<null>,c:OBACoreBaseConfig;
  it("init",async () => {
    const {errors} = coreBaseConfig("OBA_CORE_BASE");
    c = {errors};
    core = new OBACoreBaseApi(c);
    core.init();
    J.is(core);
    J.true(core.e);
    });
  it("404",async () => {
    J.error(core.e._.notfound());
    OB.here("e",core.e._.notfound().message);});
  it("Cors",async () => {
    J.error(core.e._.cors());
    OB.here("e",core.e._.cors().message);});
  it("existing data",async () => {
    J.error(core.e._.existing("data"));
    OB.here("e",core.e._.existing("data").message);});
  it("data not found",async () => {
    J.error(core.e._.doesNotExist("user"));
    OB.here("e",core.e._.doesNotExist("user").message);});
  it("invalid data",async () => {
    J.error(core.e._.invalid("api credentials"));
    OB.here("e",core.e._.invalid("api credentials").message);});
  it("missing data",async () => {
    J.error(core.e._.missing("handle"));
    OB.here("e",core.e._.missing("handle").message);});
  it("data mismatch",async () => {
    J.error(core.e._.mismatch("pin"));
    OB.here("e",core.e._.mismatch("pin").message);});
  it("csrf",async () => {
    J.error(core.e.map(new Error("CSRF")));
    OB.here("e",core.e.map(new Error("CSRF")).message);});
  it("req validation",async () => {
    J.error(core.e.map(new Error("ValidationErr")));
    OB.here("e",core.e.map(new Error("validation")).message);});
  it("cast error",async () => {
    J.error(core.e.map(new Error("castError")));
    OB.here("e",core.e.map(new Error("castError")).message);});
  it("some random error",async () => {
    const test = core.e.map(new Error("sdihfifhsoif"));
    J.error(test);
    OB.here("e",test.message);
    OB.here("e",test.info);
  });
  it("print component",async () => {
    core.e.print();
  });
});