import { Router } from 'express';
import { confirmPresence, getConfirmedUsers } from '../controllers/confirmation.controller';

const router = Router();

router.post('/', confirmPresence);
router.get('/', getConfirmedUsers);

export default router;
