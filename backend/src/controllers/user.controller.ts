import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const updated = await userService.updateUser(req.params.id, req.body);
  res.json(updated);
};

export const updateUserStatus = async (req: Request, res: Response) => {
  const updated = await userService.updateUserStatus(req.params.id, req.body.status);
  res.json(updated);
};
