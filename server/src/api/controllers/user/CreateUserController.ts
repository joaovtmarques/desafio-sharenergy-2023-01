import { CreateUserService } from '@/src/domain/services/user/CreateUserService';
import { HttpRequest } from '@/src/shared/types/httpRequest';
import { HttpStatusCode } from '@/src/shared/types/httpStatusCode';

interface CreateUserRequest {
  email: string;
  password: string;
}

export class CreateUserController {
  // eslint-disable-next-line no-unused-vars
  constructor(private createUserService: CreateUserService) {}

  async handle({ req, res }: HttpRequest) {
    const { email, password } = req.body as CreateUserRequest;

    const user = await this.createUserService.execute({ email, password });

    return res.status(HttpStatusCode.CREATED).send(user);
  }
}
