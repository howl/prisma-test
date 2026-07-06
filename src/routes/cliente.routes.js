import { Router } from 'express';
import { getClientes } from '../controllers/cliente.controller';

export const clienteRouter = Router();

clienteRouter.get('/', getClientes);
// userRouter.get('/', [authenticate], getUsers);
// userRouter.post('/', [authenticate, authorize('admin')], [validateCreateUser, validate], postUser);
// userRouter.get('/:userId', [authenticate], getUser);
// userRouter.post('/:userId/avatar', [authenticate, isSelfOrAdmin], uploadFile('avatar'), postAvatar);
// userRouter.delete('/:userId/avatar', [authenticate, isSelfOrAdmin], removeAvatar);
// userRouter.patch('/:userId', [authenticate, isSelfOrAdmin], [validateUpdateUser, validate], patchUser);
// userRouter.delete('/:userId', [authenticate, isSelfOrAdmin], deleteUser);
