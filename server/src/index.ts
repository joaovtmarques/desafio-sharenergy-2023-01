import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import { ErrorMiddleware } from './api/middlewares/ErrorMiddleware';

const app = express();
app.use(express.json());

app.use(ErrorMiddleware);

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
