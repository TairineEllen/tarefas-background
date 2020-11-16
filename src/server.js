import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import controllerUsers from './app/controllers/controllerUsers';
import Queue from './app/lib/queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', controllerUsers.store);
app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});