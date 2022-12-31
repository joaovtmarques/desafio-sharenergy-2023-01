import { CustomerModel } from '@/src/domain/models';
import prismaClient from '@/src/prisma';
import { CreateCustomerData, CustomerRepository } from './../CustomerRepository';

export class PrismaCustomerRepository implements CustomerRepository {
  async create(data: CreateCustomerData): Promise<CustomerModel> {
    return await prismaClient.customer.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        cpf: data.cpf,
        address: {
          create: {
            street: data.street,
            district: data.district,
            zipcode: data.zipcode,
            city: data.city,
            state: data.state,
          },
        },
      },
      include: { address: true },
    });
  }

  async findAll(): Promise<CustomerModel[]> {
    return await prismaClient.customer.findMany({
      include: {
        address: true,
      },
    });
  }
}
