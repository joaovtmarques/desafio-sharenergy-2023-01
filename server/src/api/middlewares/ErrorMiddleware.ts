import { BaseError } from '@/src/shared/classes/baseError';
import { NextFunction, Request, Response } from 'express';

export function ErrorMiddleware(err: BaseError, req: Request, res: Response, next: NextFunction) {
  res.status(err.httpCode).json({
    statusCode: err.httpCode,
    method: err.methodName,
    message: err.message,
  });

  return next(err);
}
