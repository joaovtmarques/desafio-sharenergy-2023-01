import { Router } from 'express';

import { createUserFactory, findUserByIdFactory } from '../controllers/user';

const user = Router();

user.post('/users', (req, res, next) => createUserFactory().handle({ req, res, next }));
user.get('/users/:id', (req, res, next) => findUserByIdFactory().handle({ req, res, next }));

export { user };
