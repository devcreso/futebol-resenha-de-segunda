import prisma from '../../prisma/client';

export const confirmPresence = (data: any) => prisma.confirmation.create({ data });

export const getConfirmedUsers = () => prisma.confirmation.findMany({
  include: { user: true }
});
