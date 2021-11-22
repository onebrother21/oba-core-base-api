import {J} from "../../utils";
import {obaCoreBaseEmitterInitTests} from "./emitter";
import {obaCoreBaseErrorFactoryInitTests} from "./error-factory";
import {obaCoreBaseVarsInitTests} from "./vars";

export const obaCoreBaseComponentsTests = () => J.utils.desc("CORE BASE COMPONENTS TESTS",() => {
  obaCoreBaseVarsInitTests();
  obaCoreBaseEmitterInitTests();
  obaCoreBaseErrorFactoryInitTests();
});