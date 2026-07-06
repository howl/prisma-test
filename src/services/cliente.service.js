

export const findClientes = ({ where = {}, ...options } = {}) => {
  const em = RequestContext.getEntityManager();
  return em.find(User, where, options);
};
