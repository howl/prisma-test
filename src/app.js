import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.get('/clients', (req, res) => {
  return res.status(404).json(
    {
      ok: false,
      message: 'De momento no hay nada por aquí'
    }
  );
});

app.get('/events', (req, res) => {
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
