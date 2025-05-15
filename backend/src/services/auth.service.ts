import prisma from '../../prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function register(data: any) {
    const { email, senha, ...resto } = data;
    const existe = await prisma.user.findUnique({ where: { email } });
    if (existe) throw new Error('E-mail já cadastrado');

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.user.create({
        data: {
            email,
            senha: senhaHash,
            aprovado: false,
            ...resto
        }
    });

    return novoUsuario;
}

export async function login(data: any) {
    const { email, senha } = data;

    const usuario = await prisma.user.findUnique({ where: { email } });
    if (!usuario || !usuario.approved) throw new Error('Usuário não encontrado ou não aprovado');

    const senhaValida = await bcrypt.compare(senha, usuario.password);
    if (!senhaValida) throw new Error('Senha incorreta');

    const token = jwt.sign(
        { userId: usuario.id, isAdmin: usuario.isAdmin },
        process.env.JWT_SECRET!,
        { expiresIn: '1d' }
    );

    return token;
}

export async function approveUser(userId: string) {
    await prisma.user.update({
        where: { id: userId },
        data: { approved: true }
    });
}