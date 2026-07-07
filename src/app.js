import 'dotenv/config';
import express from 'express';
import { clienteRouter } from './routes/cliente.routes.js';
import { eventoRouter } from './routes/evento.routes.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/clientes', clienteRouter);
app.use('/eventos', eventoRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`);
});
