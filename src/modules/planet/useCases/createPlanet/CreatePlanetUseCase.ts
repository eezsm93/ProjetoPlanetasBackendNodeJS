import { Planet } from "@modules/planet/entities/Planet";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";

interface ICreatePlanetDTO {
  name: string;
  description: string;
  surfaceArea: number;
  sunDistance: number;
  durationDay: number;
  gravity: number;
  isActive: boolean;
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
    isActive,
  }: ICreatePlanetDTO): Promise<Planet> {
    const planetNameAlredyExist = await this.planetRepository.findByAttribute(
      "name",
      name
    );

    if (planetNameAlredyExist?.id) {
      throw new Error("Planeta com Esse nome ja existe!");
    }
    const planet = new Planet({
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
      isActive,
    });

    const planetPersisted = await this.planetRepository.create(planet);
    return planetPersisted;
  }
}

export { CreatePlanetUseCase };
