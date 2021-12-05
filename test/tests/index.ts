import {J} from "../utils";
import {obaCoreBaseComponentsTests} from "./components";

export const finalCheckComponents = () => J.utils.desc("FINAL CHECK",() => {
  it("Init",async () => {
    const {base} = await J.utils.init("OBA_CORE_BASE");
    console.log(base);
  },1E9);
});
export const wrapup = () => J.utils.desc("WRAPUP",() => {
  it("Wrapup",async () => {
    console.log("complete");
  },1E9);
});
export const allTests = () => J.utils.desc("ALL TESTS",() => {
  obaCoreBaseComponentsTests();
  finalCheckComponents();
  wrapup();
});