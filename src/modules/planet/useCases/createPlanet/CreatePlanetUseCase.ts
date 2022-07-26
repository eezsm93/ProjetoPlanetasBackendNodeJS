import { Planet } from "@modules/planet/entities/Planet";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";

interface ICreatePlanetDTO {
  name: string;
  description: string;
  surfaceArea: number;
  sunDistance: number;
  durationDay: number;
  gravity: number;
}

class CreatePlanetUseCase {
  constructor(private planetRepository: IPlanetRepository) {}

  async execute({
    name,
    description,
    surfaceArea,
    sunDistance,
    durationDay,
    gravity,
  }: ICreatePlanetDTO): Promise<Planet> {
    const planet = new Planet({
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
    });

    const planetPersisted = await this.planetRepository.create(planet);
    return planetPersisted;
  }
}

export { CreatePlanetUseCase };
