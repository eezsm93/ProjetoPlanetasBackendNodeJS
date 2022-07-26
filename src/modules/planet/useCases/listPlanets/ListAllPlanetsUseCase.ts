import { Planet } from "@modules/planet/entities/Planet";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";

class ListAllPlanetsUseCase {
  constructor(private planetRepository: IPlanetRepository) {}

  async execute(): Promise<{ Planets: Planet[] }> {
    const allPlanets = await this.planetRepository.listAll();
    return allPlanets;
  }
}

export { ListAllPlanetsUseCase };
