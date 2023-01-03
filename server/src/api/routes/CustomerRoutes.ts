import { Router } from 'express';

import { createCustomerFactory, findAllCustomersFactory } from '../controllers/customer';

const customer = Router();

customer.post('/customers', (req, res, next) => createCustomerFactory().handle({ req, res, next }));
customer.get('/customers', (req, res, next) =>
  findAllCustomersFactory().handle({ req, res, next })
);

export { customer };
