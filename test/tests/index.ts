import {J} from "../utils";
import {obaCoreBaseComponentsTests} from "./components";

export const finalCheckComponents = () => J.desc("FINAL CHECK",() => {
  it("Init",async () => {
    const {base} = await J.initApp("OBA_CORE_BASE");
    console.log(base);
  },1E9);
});
export const wrapup = () => J.desc("WRAPUP",() => {
  it("Wrapup",async () => {
    console.log("complete");
  },1E9);
});
export const allTests = () => J.desc("ALL TESTS",() => {
  obaCoreBaseComponentsTests();
  finalCheckComponents();
  wrapup();
});