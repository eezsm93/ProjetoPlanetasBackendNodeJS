import { CreatePlanetController } from "@modules/planet/useCases/createPlanet/CreatePlanetController";
import { Router } from "express";

const planetRoutes = Router();

let createPlanetController = new CreatePlanetController();

planetRoutes.post("/", createPlanetController.handle);

export { planetRoutes };
