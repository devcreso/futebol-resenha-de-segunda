import { Router } from 'express';
import { recordResult, uploadPhoto, calculatePoints } from '../controllers/game.controller';

const router = Router();

router.post('/result', recordResult);
router.post('/photo', uploadPhoto);
router.post('/calculate', calculatePoints);

export default router;