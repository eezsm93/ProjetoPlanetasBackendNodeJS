import { Planet } from "@modules/planet/entities/Planet";
import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";

interface IUpdateIsActiveDTO {
  id: string;
}

class ActiveOrDesactivePlanetUseCase {
  constructor(private planetRepository: PlanetRepository) {}

  async execute({ id }: IUpdateIsActiveDTO): Promise<void> {
    let planetToBeEdited = await this.planetRepository.findById(id);
    if (!planetToBeEdited)
      throw new Error("Nao foi possivel localizar este Planeta!");

    await this.planetRepository.activeOrDesactivePlanet(planetToBeEdited);
  }
}

export { ActiveOrDesactivePlanetUseCase };
