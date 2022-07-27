import { Planet } from "../entities/Planet";

interface IPlanetRepository {
  create(planet: Planet): Promise<Planet>;
  listAll(): Promise<{ Planets: Planet[] }>;
  findById(id: string): Promise<Planet>;
  updatePlanet(planet: Planet): Promise<void>;
  deletePlanet?(planet: Planet): Promise<void>;
  activeOrDesactivePlanet?(planet: Planet): Promise<void>;
}

export { IPlanetRepository };
