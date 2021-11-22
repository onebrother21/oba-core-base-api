import OBA,{Keys}from "@onebro/oba-common";
import { EventEmitter } from "events";
import { OBACoreBaseEmitterConfig,OBACoreBaseEmitterType } from "./emitter-types";

export interface OBACoreBaseEmitter<Ev> extends OBACoreBaseEmitterType<Ev> {}
export class OBACoreBaseEmitter<Ev> {
  get history(){return this._history;}
  get values(){return this._values;}
  get listeners(){return this._emitter.eventNames();}
  print<k extends keyof this>(s?:k){OBA.info(s?({[s]:this[s]}):this);}
  get<k extends Keys<Ev>>(name?:k){return name?this._values[name]:this.values;}
  constructor(o:OBACoreBaseEmitterConfig<Ev>){
    this._history = [];
    this._values = {};
    this._emitter = new EventEmitter();
    this.on = (s,l) => this._emitter.on(s as string,l);
    this.emit = (s,v) => {
      this._history.unshift({event:s,time:new Date()});
      this._values[s] = v;
      this._emitter.emit(s as string,v);
    };
    for(const k in o) this.on(k as Keys<Ev>,o[k as Keys<Ev>]);
  }
}
export default OBACoreBaseEmitter;