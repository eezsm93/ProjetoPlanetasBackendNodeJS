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
      Planets: [...this.planets],
    };
  }

  async findById(id: string): Promise<Planet> {
    return { ...this.planets.find((planet) => planet.id === id) };
  }

  async updatePlanet(planetUpdateData: Planet): Promise<void> {
    this.planets = this.planets.map((planet) => {
      if (planet.id === planetUpdateData.id) planet = planetUpdateData;
      return planet;
    });
  }
}

export { PlanetRepositoryInMemory };
