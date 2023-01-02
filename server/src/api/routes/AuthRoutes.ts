import { Router } from 'express';

import { authUserFactory } from '../controllers/auth';

const auth = Router();

auth.post('/login', (req, res, next) => authUserFactory().handle({ req, res, next }));

export { auth };
