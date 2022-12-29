import * as dotenv from 'dotenv';

dotenv.config();

import express from 'express';

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
