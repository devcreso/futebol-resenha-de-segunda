import { Router } from 'express';
import { getAllUsers, getUserById, updateUser, updateUserStatus } from '../controllers/user.controller';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.patch('/:id/status', updateUserStatus);

export default router;