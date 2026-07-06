import { findClientes } from "../services/cliente.service";

export const getClientes = async (_req, res, next) => {
  try {
    const users = await findClientes({
      //populate: ['posts'],
    });

    // Poblados con los posts.
    //const users = await findUsers({ populate: ['posts'] });

    // Probando softDelete:
    //const users = await findUsers()                                                // solo activos
    //const users = await findUsers({ filters: { softDelete: false } })              // incluye borrados
    //const users = await findUsers({ where: { deletedAt: { $ne: null } }, filters: { softDelete: false } })  // solo borrados

    res.json({ data: users, meta: { total: users.length } });
  } catch (err) { next(err); }
};
