/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { DeleteUserService } from '@/src/domain/services/user/DeleteUserService';
import { BaseError } from '@/src/shared/classes/baseError';
import { HttpRequest } from '@/src/shared/types/httpRequest';

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle({ req, res, next }: HttpRequest) {
    const { id } = req.params;

    await this.deleteUserService.execute(id);

    return res.status(200).send();
  }
}
