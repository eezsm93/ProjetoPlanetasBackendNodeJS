import { CreatePlanetController } from "@modules/planet/useCases/createPlanet/CreatePlanetController";
import { DeletePlanetController } from "@modules/planet/useCases/deletePlanet/DeletePlanetController";
import { ActiveOrDesactivePlanetController } from "@modules/planet/useCases/isActivePlanet/ActiveOrDesactivePlanetController";
import { ListPlanetByIdController } from "@modules/planet/useCases/listPlanetById/ListPlanetByIdController";
import { ListAllPlanetsController } from "@modules/planet/useCases/listPlanets/ListAllPlanetsController";
import { UpdatePlanetController } from "@modules/planet/useCases/updatePlanet/UpdatePlanetController";
import { Router } from "express";

const planetRoutes = Router();

let createPlanetController = new CreatePlanetController();
let listAllPlanetsController = new ListAllPlanetsController();
let listPlanetById = new ListPlanetByIdController();
let updatePlanetController = new UpdatePlanetController();
let activeOrDesactivePlanetsController =
  new ActiveOrDesactivePlanetController();
let deletePlanetController = new DeletePlanetController();

planetRoutes.post("/", createPlanetController.handle);
planetRoutes.get("/", listAllPlanetsController.handle);
planetRoutes.get("/:id", listPlanetById.handle);
planetRoutes.put("/", updatePlanetController.handle);
planetRoutes.put(
  "/activeOrDesactive/:id",
  activeOrDesactivePlanetsController.handle
);
planetRoutes.delete("/:id", deletePlanetController.handle);

export { planetRoutes };
