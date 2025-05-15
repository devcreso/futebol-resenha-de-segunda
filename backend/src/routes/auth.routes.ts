import { Router } from 'express';
import { register, login, approveUser } from '../controllers/auth.controller';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/approve/:userId', approveUser);

export default router;