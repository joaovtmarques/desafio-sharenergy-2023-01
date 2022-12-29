import * as dotenv from 'dotenv';

dotenv.config();

import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
  return res.json({ ok: true });
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
