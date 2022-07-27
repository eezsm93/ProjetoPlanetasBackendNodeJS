import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";
import { Request, Response } from "express";
import { DeletePlanetUseCase } from "./DeletePlanetUseCase";

class DeletePlanetController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const planetRepository = new PlanetRepository();
    const deletePlanetUseCase = new DeletePlanetUseCase(planetRepository);

    await deletePlanetUseCase.execute({ id });

    return response.status(201).json({});
  }
}

export { DeletePlanetController };
