import { prisma } from "@database/prismaClient";
import { Planet } from "@modules/planet/entities/Planet";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";

class PlanetRepository implements IPlanetRepository {
  async findById(id: string): Promise<Planet> {
    return await prisma.planet.findUnique({
      where: {
        id,
      },
    });
  }

  async create(values: Planet): Promise<Planet> {
    const planet = prisma.planet.create({
      data: values,
    });

    return planet;
  }

  async listAll(): Promise<{ Planets: Planet[] }> {
    return {
      Planets: await prisma.planet.findMany(),
    };
  }

  async activeOrDesactivePlanet(values: Planet): Promise<void> {
    await prisma.planet.update({
      where: {
        id: values.id,
      },
      data: {
        isActive: !values.isActive,
      },
    });
  }
}

export { PlanetRepository };
