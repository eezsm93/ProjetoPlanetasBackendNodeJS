import { PlanetRepository } from "@modules/planet/infra/prisma/PlanetRepository";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPlanetByIdUseCase } from "./ListPlanetByIdUseCase";

class ListPlanetByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const planetRepository = new PlanetRepository();
    const listPlanetByIdUseCase = new ListPlanetByIdUseCase(planetRepository);

    const user = await listPlanetByIdUseCase.execute({ id });

    return response.status(201).json(user);
  }
}

export { ListPlanetByIdController };
