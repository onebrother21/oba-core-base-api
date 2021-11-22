import {J} from "../../utils";
import {
  OBACoreBaseApi,
  OBACoreBaseConfig,
  coreBaseConfig
} from "../../../src";

export const obaCoreBaseErrorFactoryInitTests = () => J.utils.desc("AM Errors Init",() => {
  let core:OBACoreBaseApi<null>,c:OBACoreBaseConfig<null>;
  it("init",async () => {
    const {errors} = coreBaseConfig("OBA_CORE_BASE");
    c = {errors};
    core = new OBACoreBaseApi(c);
    core.init();
    J.is(core);
    J.true(core.e);
    });
  it("404",async () => {
    J.error(core.e.notfound());
    console.error(core.e.notfound().message);});
  it("Cors",async () => {
    J.error(core.e.cors());
    console.error(core.e.cors().message);});
  it("existing data",async () => {
    J.error(core.e.existing("data"));
    console.error(core.e.existing("data").message);});
  it("data not found",async () => {
    J.error(core.e.doesNotExist("user"));
    console.error(core.e.doesNotExist("user").message);});
  it("invalid data",async () => {
    J.error(core.e.invalid("api credentials"));
    console.error(core.e.invalid("api credentials").message);});
  it("missing data",async () => {
    J.error(core.e.missing("handle"));
    console.error(core.e.missing("handle").message);});
  it("data mismatch",async () => {
    J.error(core.e.mismatch("pin"));
    console.error(core.e.mismatch("pin").message);});
  it("csrf",async () => {
    J.error(core.e.map(new Error("CSRF")));
    console.error(core.e.map(new Error("CSRF")).message);});
  it("req validation",async () => {
    J.error(core.e.map(new Error("ValidationErr")));
    console.error(core.e.map(new Error("validation")).message);});
  it("cast error",async () => {
    J.error(core.e.map(new Error("castError")));
    console.error(core.e.map(new Error("castError")).message);});
  it("some random error",async () => {
    const test = core.e.map(new Error("sdihfifhsoif"));
    J.error(test);
    console.error(test.message);
    console.error(test.info);});
});