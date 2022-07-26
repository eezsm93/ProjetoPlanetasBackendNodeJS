import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";
import { Request, Response } from "express";
import { CreatePlanetUseCase } from "./CreatePlanetUseCase";

class CreatePlanetController {
  async handle(request: Request, response: Response) {
    const {
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
      isActive,
    } = request.body;

    const planetRepository = new PlanetRepository();
    const createPlanetUseCase = new CreatePlanetUseCase(planetRepository);

    const planet = await createPlanetUseCase.execute({
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
      isActive,
    });

    return response.status(201).json(planet);
  }
}

export { CreatePlanetController };
