import { CreatePlanetController } from "@modules/planet/useCases/createPlanet/CreatePlanetController";
import { ListAllPlanetsController } from "@modules/planet/useCases/listPlanets/ListAllPlanetsController";
import { Router } from "express";

const planetRoutes = Router();

let createPlanetController = new CreatePlanetController();
let listAllPlanetsController = new ListAllPlanetsController();

planetRoutes.post("/", createPlanetController.handle);
planetRoutes.get("/", listAllPlanetsController.handle);

export { planetRoutes };
