import { Planet } from "@modules/planet/entities/Planet";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";

class PlanetRepositoryInMemory implements IPlanetRepository {
  planets: Planet[] = [];

  async create(planet: Planet): Promise<Planet> {
    this.planets.push(planet);
    return { ...planet };
  }

  async listAll(): Promise<{ Planets: Planet[] }> {
    return {
      Planets: [...this.planets]}
    };
  }
}

export { PlanetRepositoryInMemory };
