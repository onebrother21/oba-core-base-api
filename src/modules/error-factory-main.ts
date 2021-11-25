import {MongoServerError} from "mongodb";
import OBA,{AppError,Component, Controller} from "@onebro/oba-common";
import { OBACoreBaseErrorFactoryType, OBACoreBaseErrorFactoryConfig } from "./error-factory-types";

export interface OBACoreBaseErrorFactory<Ev> extends Component<OBACoreBaseErrorFactoryConfig,Ev>,OBACoreBaseErrorFactoryType {}
export class OBACoreBaseErrorFactory<Ev> extends Component<OBACoreBaseErrorFactoryConfig,Ev> {
  format<T>(e:T){return new AppError(e);}
  make(e:AppError,k:string):AppError;
  make(e:AppError,k:string,status:number):AppError;
  make(e:AppError,k:string,data:string):AppError;
  make(e:AppError,k:string,status:number,data:string):AppError;
  make(e:AppError,k:string,status?:string|number,data?:string):AppError{
    const errCode = k.toLocaleUpperCase();
    const errStatus = OBA.num(status)?status:e.status;
    const errData = OBA.str(status)?status:data;
    const errMsg = errData?e.message.replace("%s",errData):e.message;
    const modified = Object.assign({},e,{
      status:errStatus,
      code:errCode,
      message:errMsg,
    });
    return new AppError(modified);
  }
  mapKnownError(e:Error){
    switch(true){
      case OBA.match(/authorized/i,e.name,e.message):
      case OBA.match(/jsonwebtoken/i,e.name,e.message):
      case OBA.match(/jwt/i,e.name,e.message):return this._.unauthorized("user");
      case OBA.match(/csrf/i,e.name,e.message):return this._.csrf();
      case OBA.match(/cast/i,e.name,e.message):return this._.castError();
      case OBA.match(/validation/i,e.name,e.message):return this._.validation();
      case e instanceof MongoServerError || OBA.match(/mongo/i,e.name,e.message):return this.format<MongoServerError>(e as MongoServerError);
      default:return this._.someError();
    }
  }
  map(e:Error|AppError):AppError {
    const errTemplate = this.mapKnownError(e);
    const errObj = {...errTemplate.json(),info:e.message,stack:e.stack};
    errObj.status = (e as AppError).status||errObj.status;
    return new AppError(errObj);
  }
  init = async () => {this._ = {};for(const k in this.config) this._[k] = this.make.bind(null,this.config[k],k);};
}
export default OBACoreBaseErrorFactory;