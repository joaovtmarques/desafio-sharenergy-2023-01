/* eslint-disable no-unused-vars */
import { CustomerModel } from '@/src/domain/models';

export interface CreateCustomerData {
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  street: string;
  district: string;
  zipcode: string;
  city: string;
  state: string;
}

export interface CustomerRepository {
  create(data: CreateCustomerData): Promise<CustomerModel>;
}
