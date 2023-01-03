import { DeleteCustomerService } from '@/src/domain/services/customer/DeleteCustomerService';
import { HttpRequest } from '@/src/shared/types/httpRequest';

export class DeleteCustomerController {
  constructor(private deleteCustomerService: DeleteCustomerService) {}

  async handle({ req, res, next }: HttpRequest) {
    const { id } = req.params;

    await this.deleteCustomerService.execute(id);

    return res.status(200).send();
  }
}
