import * as dotenv from 'dotenv';
import express from 'express';

import { user } from './api/routes';
import { ErrorMiddleware } from './api/middlewares/ErrorMiddleware';

dotenv.config();

const app = express();
app.use(express.json());

app.use(user);

app.use(ErrorMiddleware);

export { app };
