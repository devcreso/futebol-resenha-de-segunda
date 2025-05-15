import { Request, Response } from 'express';
import * as gameService from '../services/game.service';

export const recordResult = async (req: Request, res: Response) => {
  const result = await gameService.recordResult(req.body);
  res.json(result);
};

export const uploadPhoto = async (req: Request, res: Response) => {
  const photo = await gameService.uploadPhoto(req.body); // ajustar depois para upload real
  res.json(photo);
};

export const calculatePoints = async (_req: Request, res: Response) => {
  const points = await gameService.calculatePoints();
  res.json(points);
};
