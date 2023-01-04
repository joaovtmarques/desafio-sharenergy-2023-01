import { Router } from 'express';

import {
  createCustomerFactory,
  deleteCustomerFactory,
  findAllCustomersFactory,
  findCustomerByIdFactory,
  updateCustomerFactory,
} from '../controllers/customer';

const customer = Router();

customer.post('/customers', (req, res, next) => createCustomerFactory().handle({ req, res, next }));
customer.get('/customers', (req, res, next) =>
  findAllCustomersFactory().handle({ req, res, next })
);
customer.get('/customers/:id', (req, res, next) =>
  findCustomerByIdFactory().handle({ req, res, next })
);
customer.put('/customers/:id', (req, res, next) =>
  updateCustomerFactory().handle({ req, res, next })
);
customer.delete('/customers/:id', (req, res, next) =>
  deleteCustomerFactory().handle({ req, res, next })
);

export { customer };
