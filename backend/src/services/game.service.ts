import prisma from '../../prisma/client';

export const recordResult = (data: any) => prisma.match.create({ data });

export const uploadPhoto = (data: any) => prisma.match.update({
  where: { id: data.gameId },
  data: { photoUrl: data.photoUrl }
});

export const calculatePoints = async () => {
  // lógica de pontuação automatizada
  return { message: 'Pontuação calculada' };
};
