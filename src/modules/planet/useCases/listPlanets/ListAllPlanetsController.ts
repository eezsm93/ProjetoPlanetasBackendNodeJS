import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";
import { Request, Response } from "express";
import { ListAllPlanetsUseCase } from "./ListAllPlanetsUseCase";

class ListAllPlanetsController {
  async handle(request: Request, response: Response) {
    const planetRepository = new PlanetRepository();
    const listAllPlanetsUseCase = new ListAllPlanetsUseCase(planetRepository);

    const allPlanets = await listAllPlanetsUseCase.execute();

    return response.status(201).json(allPlanets);
  }
}

export { ListAllPlanetsController };
