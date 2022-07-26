import { Router } from "express";
import { planetRoutes } from "./planet.routes";

const router = Router();

router.use("/planet", planetRoutes);

export { router };
