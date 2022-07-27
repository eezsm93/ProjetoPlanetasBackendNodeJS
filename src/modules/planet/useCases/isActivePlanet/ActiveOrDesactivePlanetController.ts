import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";
import { Request, Response } from "express";
import { ActiveOrDesactivePlanetUseCase } from "./ActiveOrDesactivePlanetUseCase";

class ActiveOrDesactivePlanetController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const planetRepository = new PlanetRepository();
    const activeOrDesactivePlanetUseCase = new ActiveOrDesactivePlanetUseCase(
      planetRepository
    );

    await activeOrDesactivePlanetUseCase.execute({
      id,
    });

    return response.status(201).json({});
  }
}

export { ActiveOrDesactivePlanetController };
