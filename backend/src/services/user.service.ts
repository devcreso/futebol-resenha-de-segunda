import { PrismaClient, Status } from '@prisma/client';
import prisma from '../prisma/client';

export const getAllUsers = () => prisma.user.findMany();

export const getUserById = (id: string) =>
    prisma.user.findUnique({ where: { id } });

export const updateUser = (id: string, data: any) =>
    prisma.user.update({ where: { id }, data });

export const updateUserStatus = (id: string, status: string) => {
    // Validação simples e conversão para enum
    if (!Object.values(Status).includes(status as Status)) {
        throw new Error('Status inválido');
    }

    return prisma.user.update({
        where: { id },
        data: { status: status as Status },
    });
};