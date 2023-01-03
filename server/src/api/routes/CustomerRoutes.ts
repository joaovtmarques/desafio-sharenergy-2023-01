import { Router } from 'express';

import { createCustomerFactory } from '../controllers/customer';

const customer = Router();

customer.post('/customers', (req, res, next) => createCustomerFactory().handle({ req, res, next }));

export { customer };
