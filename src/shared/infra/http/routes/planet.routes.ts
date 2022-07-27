import { CreatePlanetController } from "@modules/planet/useCases/createPlanet/CreatePlanetController";
import { ActiveOrDesactivePlanetController } from "@modules/planet/useCases/isActivePlanet/ActiveOrDesactivePlanetController";
import { ListAllPlanetsController } from "@modules/planet/useCases/listPlanets/ListAllPlanetsController";
import { Router } from "express";

const planetRoutes = Router();

let createPlanetController = new CreatePlanetController();
let listAllPlanetsController = new ListAllPlanetsController();
let activeOrDesactivePlanetsController =
  new ActiveOrDesactivePlanetController();

planetRoutes.post("/", createPlanetController.handle);
planetRoutes.get("/", listAllPlanetsController.handle);
planetRoutes.put(
  "/activeOrDesactive/:id",
  activeOrDesactivePlanetsController.handle
);

export { planetRoutes };
