import { Planet } from "@modules/planet/entities/Planet";
import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";

interface IUpdatePlanetDTO {
  id: string;
  name: string;
  description: string;
  surfaceArea: number;
  sunDistance: number;
  durationDay: number;
  gravity: number;
  isActive: boolean;
}

class UpdatePlanetUseCase {
  constructor(private planetRepository: PlanetRepository) {}

  async execute(updatePlanetData: IUpdatePlanetDTO): Promise<void> {
    let planet = new Planet(updatePlanetData);
    let planetToBeEdited = await this.planetRepository.findById(planet.id);

    if (!planetToBeEdited)
      throw new Error("Nao foi possivel localizar este Planeta!");

    Object.assign(planetToBeEdited, planet);

    await this.planetRepository.updatePlanet(planetToBeEdited);
  }
}

export { UpdatePlanetUseCase };
