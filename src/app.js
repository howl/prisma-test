import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.get('/clientes', (req, res) => {
  return res.status(404).json(
    {
      ok: false,
      message: 'De momento no hay nada por aquí'
    }
  );
});

app.post('/clientes', (req, res) => {
  return res.status(404).json(
    {
      ok: false,
      message: 'De momento no hay nada por aquí'
    }
  );
});

app.get('/eventos', (req, res) => {
  return res.status(404).json(
    {
      ok: false,
      message: 'Por aquí tampoco'
    }
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`);
});
