import { HttpStatusCode } from '../types/httpModel';

export class BaseError extends Error {
  public readonly methodName?: string;
  public readonly httpCode: HttpStatusCode;

  constructor(message: string, methodName?: string, httpCode = HttpStatusCode.INTERNAL_SERVER) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    if (methodName) this.methodName = methodName;
    this.httpCode = httpCode;

    Error.captureStackTrace(this);
  }
}
