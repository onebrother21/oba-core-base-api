import { Keys } from "@onebro/oba-common";
import { OBACoreBaseEmitterConfig, OBACoreBaseEmitterType } from "./emitter-types";
export interface OBACoreBaseEmitter<Ev> extends OBACoreBaseEmitterType<Ev> {
}
export declare class OBACoreBaseEmitter<Ev> {
    get history(): {
        event: Extract<keyof Ev, string>;
        time: Date;
    }[];
    get values(): Partial<Ev>;
    get listeners(): (string | symbol)[];
    print<k extends keyof this>(s?: k): void;
    get<k extends Keys<Ev>>(name?: k): Partial<Ev> | Partial<Ev>[k];
    constructor(o: OBACoreBaseEmitterConfig<Ev>);
}
export default OBACoreBaseEmitter;
