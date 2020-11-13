import 'dotenv/config';
import express from 'express';

import controllerUsers from './app/controllers/controllerUsers';

const app = express();

app.use(express.json());

app.post('/users', controllerUsers.store);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});