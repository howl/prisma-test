export const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;

  if (status === 500)
    console.error(`[ERROR] ${err.stack || err.message}`);

  const message = status === 500 && process.env.NODE_ENV === 'production'
    ? 'Error interno del servidor'
    : err.message || 'Error interno del servidor';

  res.status(status).json({ ok: false, message });
};
