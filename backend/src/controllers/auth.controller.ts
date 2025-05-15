import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export async function register(req: Request, res: Response) {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
        return;
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(500).json({ error: 'Erro inesperado.' });
        return;
    }
}

export async function login(req: Request, res: Response) {
    try {
        const token = await authService.login(req.body);
        res.status(200).json({ token });
        return;
    } catch (err) {
        if (err instanceof Error) {
            res.status(401).json({ error: err.message });
            return;
        }
        res.status(500).json({ error: 'Erro inesperado.' });
        return;
    }
}

export async function approveUser(req: Request, res: Response) {
    try {
        const { userId } = req.params;
        await authService.approveUser(userId);
        res.status(200).json({ message: 'Usuário aprovado com sucesso.' });
        return;
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(500).json({ error: 'Erro inesperado.' });
        return;
    }
}

