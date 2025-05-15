import { Request, Response } from 'express';
import * as confirmationService from '../services/confirmation.service';

export const confirmPresence = async (req: Request, res: Response) => {
  const confirmation = await confirmationService.confirmPresence(req.body);
  res.json(confirmation);
};

export const getConfirmedUsers = async (_req: Request, res: Response) => {
  const confirmed = await confirmationService.getConfirmedUsers();
  res.json(confirmed);
};
