/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { CreateUserService } from '@/src/domain/services/user/CreateUserService';
import { HttpStatusCode } from '@/src/shared/types/httpStatusCode';
import { HttpRequest } from '@/src/shared/types/httpRequest';
import { validateCreateUserData } from '../../validators/CreateUserValidator';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle({ req, res, next }: HttpRequest) {
    const valid = validateCreateUserData(req.body);

    if (valid.error) {
      return res.status(HttpStatusCode.BAD_REQUEST).send(valid.error.details);
    }

    const { email, password } = req.body;

    const user = await this.createUserService.execute({ email, password });

    return res.status(HttpStatusCode.CREATED).send(user);
  }
}
