import * as dotenv from 'dotenv';
import express from 'express';

import { EnsureAutheticatedMiddleware } from './api/middlewares/EnsureAuthenticatedMiddleware';
import { ErrorMiddleware } from './api/middlewares/ErrorMiddleware';
import { auth, user, customer } from './api/routes';
import { swaggerDocs } from './utils/swagger';

dotenv.config();

const app = express();
app.use(express.json());

swaggerDocs(app);

app.use(auth);
app.use(user);
app.use(customer);

app.use(ErrorMiddleware);
app.use(EnsureAutheticatedMiddleware);

export { app };
