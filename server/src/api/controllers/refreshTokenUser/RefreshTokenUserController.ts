import { RefreshTokenUserService } from '@/src/domain/services/auth/RefreshTokenUserSevice';
import { HttpRequest } from '@/src/shared/types/httpRequest';

export class RefreshTokenUserController {
  constructor(private refreshTokenUserService: RefreshTokenUserService) {}

  async handle({ req, res, next }: HttpRequest) {
    const { refreshToken } = req.body;

    const token = await this.refreshTokenUserService.execute(refreshToken);

    return res.status(200).send(token);
  }
}
