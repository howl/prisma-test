export function mapPrismaError(err) {
  if (err.code === 'P2000') {
    err.status = 400;
    err.message = `Valor demasiado largo para la columna ${err.meta?.column_name || 'desconocida'}`;
  } else if (err.code === 'P2001') {
    err.status = 404;
    err.message = `El registro buscado en ${err.meta?.model_name || 'el modelo'} no existe`;
  } else if (err.code === 'P2002') {
    err.status = 409;
    const campo = err.meta?.target?.[0] || 'desconocido';
    err.message = `El valor del campo ${campo} ya existe`;
  } else if (err.code === 'P2003') {
    err.status = 400;
    err.message = `Violación de clave foránea en el campo ${err.meta?.field_name || 'desconocido'}`;
  } else if (err.code === 'P2004') {
    err.status = 400;
    err.message = `Error de restricción en la base de datos: ${err.meta?.database_error || ''}`;
  } else if (err.code === 'P2005') {
    err.status = 400;
    err.message = `El valor almacenado para ${err.meta?.field_name || 'el campo'} no es válido`;
  } else if (err.code === 'P2006') {
    err.status = 400;
    err.message = `El valor proporcionado para ${err.meta?.field_name || 'un campo'} en ${err.meta?.model_name || 'el modelo'} no es válido`;
  } else if (err.code === 'P2011') {
    err.status = 400;
    err.message = `Violación de restricción null en ${err.meta?.constraint || 'un campo'}`;
  } else if (err.code === 'P2012') {
    err.status = 400;
    err.message = `Falta un valor requerido en ${err.meta?.path || 'la consulta'}`;
  } else if (err.code === 'P2014') {
    err.status = 409;
    err.message = `Violación de relación: ${err.meta?.relation_name || 'la relación'} entre ${err.meta?.model_a_name || 'A'} y ${err.meta?.model_b_name || 'B'}`;
  } else if (err.code === 'P2015') {
    err.status = 404;
    err.message = `Registro relacionado no encontrado: ${err.meta?.details || ''}`;
  } else if (err.code === 'P2023') {
    err.status = 400;
    err.message = `Datos inconsistentes en columna: ${err.meta?.message || ''}`;
  } else if (err.code === 'P2024') {
    err.status = 503;
    err.message = 'Tiempo de espera agotado al obtener conexión de la base de datos';
  } else if (err.code === 'P2025') {
    err.status = 404;
    const modelo = err.meta?.modelName || 'Registro';
    const causa = err.meta?.cause ? `: ${err.meta.cause}` : '';
    err.message = `${modelo} no encontrado${causa}`;
  } else if (err.code === 'P2033') {
    err.status = 400;
    err.message = 'Un número usado en la consulta excede el límite de 64 bits';
  } else if (err.code === 'P2034') {
    err.status = 409;
    err.message = 'La transacción falló por conflicto de escritura o deadlock. Intenta de nuevo';
  } else if (err.code === 'P2037') {
    err.status = 503;
    err.message = 'Demasiadas conexiones a la base de datos';
  }

  return err;
}
