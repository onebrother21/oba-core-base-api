import {EventEmitter} from "events";
import {Keys,Callback} from "@onebro/oba-common";

export type OBACoreBaseEmitterCallback<Event> = Callback<Event>;
export type OBACoreBaseEmitterConfig<Ev> = {[k in Keys<Ev>]?:OBACoreBaseEmitterCallback<Ev[k]>;};
export type OBACoreBaseEmitterType<Ev> = {
  _emitter:EventEmitter;
  _history:{event:Keys<Ev>,time:Date}[];
  _values:Partial<Ev>;
  on<k extends Keys<Ev>>(s:k,l:OBACoreBaseEmitterConfig<Ev>[k]):void;
  emit<k extends Keys<Ev>>(s:k,v:Ev[k]):void;
};