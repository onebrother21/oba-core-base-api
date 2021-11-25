import OBA, { AppError, Component } from "@onebro/oba-common";
import { OBACoreBaseErrorFactoryType, OBACoreBaseErrorFactoryConfig } from "./error-factory-types";
export interface OBACoreBaseErrorFactory<Ev> extends Component<OBACoreBaseErrorFactoryConfig, Ev>, OBACoreBaseErrorFactoryType {
}
export declare class OBACoreBaseErrorFactory<Ev> extends Component<OBACoreBaseErrorFactoryConfig, Ev> {
    format<T>(e: T): OBA.AppError;
    make(e: AppError, k: string): AppError;
    make(e: AppError, k: string, status: number): AppError;
    make(e: AppError, k: string, data: string): AppError;
    make(e: AppError, k: string, status: number, data: string): AppError;
    mapKnownError(e: Error): OBA.AppError;
    map(e: Error | AppError): AppError;
    init: () => Promise<void>;
}
export default OBACoreBaseErrorFactory;
