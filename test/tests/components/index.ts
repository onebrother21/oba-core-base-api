import {J} from "../../utils";
import {obaCoreBaseErrorFactoryInitTests} from "./error-factory";

export const obaCoreBaseComponentsTests = () => J.utils.desc("CORE BASE COMPONENTS TESTS",() => {
  obaCoreBaseErrorFactoryInitTests();
});