import { CreatePlanetController } from "@modules/planet/useCases/createPlanet/CreatePlanetController";
import { ActiveOrDesactivePlanetController } from "@modules/planet/useCases/isActivePlanet/ActiveOrDesactivePlanetController";
import { ListAllPlanetsController } from "@modules/planet/useCases/listPlanets/ListAllPlanetsController";
import { UpdatePlanetController } from "@modules/planet/useCases/updatePlanet/UpdatePlanetController";
import { Router } from "express";

const planetRoutes = Router();

let createPlanetController = new CreatePlanetController();
let listAllPlanetsController = new ListAllPlanetsController();
let updatePlanetController = new UpdatePlanetController();
let activeOrDesactivePlanetsController =
  new ActiveOrDesactivePlanetController();

planetRoutes.post("/", createPlanetController.handle);
planetRoutes.get("/", listAllPlanetsController.handle);
planetRoutes.put("/", updatePlanetController.handle);
planetRoutes.put(
  "/activeOrDesactive/:id",
  activeOrDesactivePlanetsController.handle
);

export { planetRoutes };
