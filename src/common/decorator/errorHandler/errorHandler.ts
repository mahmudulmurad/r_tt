interface IErrorProperties {}

export interface IErrorFieldError {
  code: string;
  property: string;
  message: string;
  rejectedValue: string;
  path: string;
}

export interface TGlobalError {
  code: string;
  message: string;
}

export interface IErrorError {
  code: string;
  properties: IErrorProperties;
  fieldErrors: IErrorFieldError[];
  globalErrors: TGlobalError[];
  parameterErrors: any[];
}

export interface IError {
  status: number;
  message: string;
  error: IErrorError;
}
