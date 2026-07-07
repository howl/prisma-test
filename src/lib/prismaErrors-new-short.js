export function mapPrismaError(err) {
  if (err.code === 'P2002') {
    err.status = 409;
    const field = err.meta?.driverAdapterError?.cause?.constraint?.fields?.[0] || 'desconocido';
    err.message = `El valor del campo ${field} ya existe`;
  } else if (err.code === 'P2025') {
    err.status = 404;
    const model = err.meta?.modelName || 'Registro';
    err.message = `${model} no encontrado`;
  } else {
    err.status = err.status || 400;
  }

  return err;
}
