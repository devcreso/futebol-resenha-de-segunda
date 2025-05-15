import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Token não enviado' });

    const [, token] = authHeader.split(' ');

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = payload;
        next();
    } catch {
        return res.status(401).json({ error: 'Token inválido' });
    }
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
    const user = (req as any).user;
    if (user?.isAdmin) return next();
    return res.status(403).json({ error: 'Acesso restrito a administradores' });
}