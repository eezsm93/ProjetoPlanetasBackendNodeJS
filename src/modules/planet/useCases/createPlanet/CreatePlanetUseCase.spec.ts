import { AppError } from "../../../../shared/errors/AppError";
import { IPlanetRepository } from "@modules/planet/repository/IPlanetRepository";
import { PlanetRepositoryInMemory } from "@modules/planet/infra/in-memory/PlanetRepositoryInMemory";
import { CreatePlanetUseCase } from "./CreatePlanetUseCase";

describe("Create planet test", () => {
  let planetRepository: IPlanetRepository;
  let createPlanetUseCase;

  beforeEach(() => {
    planetRepository = new PlanetRepositoryInMemory();
    createPlanetUseCase = new CreatePlanetUseCase(planetRepository);
  });

  it("should not be able to create a new planet with same name", async () => {
    const planet = await createPlanetUseCase.execute({
      name: "Terra",
      description: "Teste",
      surfaceArea: 1,
      sunDistance: 2,
      durationDay: 3,
      gravity: 4,
      isActive: true,
    });

    expect(
      createPlanetUseCase.execute({
        name: planet.name,
        description: "Teste",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: 4,
        isActive: true,
      })
    ).rejects.toThrowError();
  });
});
