import { prisma } from "@database/prismaClient";
import { Planet } from "@modules/planet/entities/Planet";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";

class PlanetRepository implements IPlanetRepository {
  async create(values: Planet): Promise<Planet> {
    const planet = prisma.planet.create({
      data: values,
    });

    return planet;
  }
}

export { PlanetRepository };
