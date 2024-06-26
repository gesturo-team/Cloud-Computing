import express from 'express';
import router from './src/routes/route.js';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';

const env = config().parsed;
const app = express();
const port = env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
