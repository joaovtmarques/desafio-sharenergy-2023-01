import * as dotenv from 'dotenv';
import express from 'express';

import { EnsureAutheticatedMiddleware } from './api/middlewares/EnsureAuthenticatedMiddleware';
import { ErrorMiddleware } from './api/middlewares/ErrorMiddleware';
import { auth, user } from './api/routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use(user);
app.use(auth);

app.use(ErrorMiddleware);
app.use(EnsureAutheticatedMiddleware);

export { app };
