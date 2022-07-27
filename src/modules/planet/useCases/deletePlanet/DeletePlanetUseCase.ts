import { Planet } from "@modules/planet/entities/Planet";
import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";

interface IDeletePlanetDTO {
  id: string;
}

class DeletePlanetUseCase {
  constructor(private planetRepository: PlanetRepository) {}

  async execute({ id }: IDeletePlanetDTO): Promise<void> {
    let planetToBeDeleted = await this.planetRepository.findById(id);
    if (!planetToBeDeleted)
      throw new Error("Nao foi possivel localizar este Planeta!");

    await this.planetRepository.deletePlanet(planetToBeDeleted);
  }
}

export { DeletePlanetUseCase };
