import {J} from "../utils";
import {obaCoreBaseEmitterInitTests} from "./emitter";
import {obaCoreBaseErrorFactoryInitTests} from "./error-factory";
import {obaCoreBaseVarsInitTests} from "./vars";

export const allTests = () => J.utils.desc("CORE COMPONENTS TESTS",() => {
  obaCoreBaseVarsInitTests();
  obaCoreBaseEmitterInitTests();
  obaCoreBaseErrorFactoryInitTests();
});