import { Router } from 'express';

import { createUserFactory } from '../controllers/user';

const user = Router();

user.post('/users', (req, res, next) => createUserFactory().handle({ req, res, next }));

export { user };
