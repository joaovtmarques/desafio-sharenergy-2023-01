import { BaseError } from '@/src/shared/classes/baseError';
import { HttpStatusCode } from '@/src/shared/types/httpStatusCode';

export class CustomerNotFoundException extends BaseError {
  methodName: string;

  constructor(methodName: string) {
    super(methodName);

    this.message = 'Customer not found';
    this.methodName = methodName;
    this.httpCode = HttpStatusCode.NOT_FOUND;
  }
}
