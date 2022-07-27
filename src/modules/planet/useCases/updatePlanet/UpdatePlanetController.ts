import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";
import { Request, Response } from "express";
import { UpdatePlanetUseCase } from "./UpdatePlanetUseCase";

class UpdatePlanetController {
  async handle(request: Request, response: Response) {
    const updatePlanetData = request.body;

    const planetRepository = new PlanetRepository();
    const updatePlanetUseCase = new UpdatePlanetUseCase(planetRepository);

    await updatePlanetUseCase.execute(updatePlanetData);

    return response.status(201).json({});
  }
}

export { UpdatePlanetController };
