


export interface IError {
  success: boolean
  message: string
  error: IPrismaError
}

export interface IPrismaError {
  code: string
  meta: IErrorMeta
  clientVersion: string
  name: string
}

export interface IErrorMeta {
  modelName: string
  cause: string
}