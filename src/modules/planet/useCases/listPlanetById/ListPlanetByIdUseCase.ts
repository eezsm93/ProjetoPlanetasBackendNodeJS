import { Planet } from "@modules/planet/entities/Planet";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";
import { AppError } from "@shared/errors/AppError";

interface IListPlanetByIdDTO {
  id: string;
}

class ListPlanetByIdUseCase {
  constructor(private planetRepository: IPlanetRepository) {}

  async execute({ id }: IListPlanetByIdDTO): Promise<Planet> {
    let planet = await this.planetRepository.findById(id);

    if (!planet?.id) throw new AppError(`Usuario com id ${id} não existe`);
    return planet;
  }
}

export { ListPlanetByIdUseCase };
