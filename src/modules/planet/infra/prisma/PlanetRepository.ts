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

  async updatePlanet({ id, ...planet }: Planet): Promise<void> {
    console.log(id);
    console.log({ ...planet });
    await prisma.planet.update({
      where: {
        id: id,
      },
      data: {
        ...planet,
      },
    });
  }

  async findByAttribute(attr: string, value: any): Promise<Planet> {
    return (await prisma.planet.findFirst({ where: { [attr]: value } })) as any;
  }

  async deletePlanet(planet: Planet): Promise<void> {
    await prisma.planet.delete({
      where: {
        id: planet.id,
      },
    });
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
